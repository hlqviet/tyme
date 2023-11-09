import useQuery from '@/src/_hooks/useQuery/useQuery'
import { Resource, ResourceAction } from '@/src/_lib/enums'
import Hero from '@/src/_models/hero'

interface UseGetHeroesQueryProps
  extends Pick<Parameters<typeof useQuery>[0], 'query' | 'sort'> {}

const useGetHeroesQuery = (props: UseGetHeroesQueryProps) => {
  const { query, sort } = props
  const { data, error, loading } = useQuery<Hero>({
    action: ResourceAction.Get,
    resource: Resource.Hero,
    query,
    sort
  })

  return { data, error, loading }
}

export default useGetHeroesQuery
