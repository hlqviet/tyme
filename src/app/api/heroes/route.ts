import heroes from '@/src/_data/heroes.json'
import { ITEMS_PER_PAGE } from '@/src/_lib/constants'
import { SortType } from '@/src/_lib/enums'
import { deserializeRequest, filterData } from '@/src/_lib/helpers'
import Hero from '@/src/_models/hero'

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page')) || 1
  const sort = searchParams.get('sort')
  const { filters, terms } = deserializeRequest(request, ['filters', 'terms'])
  const data = heroes as Hero[]
  const filteredData = filterData({
    data,
    filters,
    terms: terms as Record<string, string>
  })

  if (sort) {
    const [property, sortType] = sort.split(':')

    filteredData.sort((a, b) => {
      const aProp = (a as any)[property]
      const bProp = (b as any)[property]

      return sortType === SortType.Asc ? aProp - bProp : bProp - aProp
    })
  }

  const from = (page - 1) * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE
  const paginatedData = filteredData.slice(from, to)
  const pagination = {
    pageNumber: page,
    hasNextPage: filteredData[to + 1] !== undefined
  }

  return Response.json({ data: paginatedData, pagination })
}
