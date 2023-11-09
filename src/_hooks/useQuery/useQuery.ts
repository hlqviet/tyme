import { useCallback, useEffect, useState } from 'react'

import { Resource, ResourceAction, SortType } from '@/src/_lib/enums'
import { GetResponse } from '@/src/_lib/types'

interface UseQueryProps {
  action: ResourceAction
  resource: Resource
  options?: RequestInit
  query?: {
    filters?: Record<string, string | number | boolean | undefined>
    terms?: Record<string, string | undefined>
    page?: number
  }
  sort?: Record<string, SortType>
}

const useQuery = <T extends any>(props: UseQueryProps) => {
  const { action, resource, options, query, sort } = props
  const [error, setError] = useState<Error | undefined>()
  const [data, setData] = useState<GetResponse<T> | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const queryParams = new URLSearchParams()

      if (query && Object.keys(query).length) {
        for (const [key, value] of Object.entries(query)) {
          if (!value) continue

          if (key === 'filters' || key === 'terms') {
            queryParams.set(key, JSON.stringify(value))
            continue
          }

          queryParams.set(key, value.toString())
        }
      }

      if (sort && Object.keys(sort).length) {
        const [property, sortType] = Object.entries(sort)[0]

        queryParams.set('sort', `${property}:${sortType}`)
      }

      try {
        const response = await fetch(
          `/api/${resource}?${queryParams.toString()}`,
          {
            method: action,
            ...options
          }
        )

        setData(await response.json())
        setError(undefined)
      } catch (err) {
        setError(err as Error)
        setData(undefined)
      } finally {
        setLoading(false)
      }
    })()
  }, [action, options, query, resource, sort])

  return { error, data, loading }
}

export default useQuery
