'use client'

import { useEffect, useMemo, useState } from 'react'

import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import Tag from '@/src/_components/Tag'
import Text from '@/src/_components/Typography/Text'
import useGetHeroesQuery from '@/src/_hooks/useGetHeroesQuery'
import { SortType } from '@/src/_lib/enums'
import Hero from '@/src/_models/hero'
import Filters from '@/src/_routes/HomePage/components/Filters'
import HeroCard from '@/src/_routes/HomePage/components/HeroCard'

const tags = ['All', 'Upper Body', 'Lower Body', 'Hat', 'Shoes', 'Accessory']

const HomePage = () => {
  const [filtersVisible, setFiltersVisible] = useState(true)
  const [persistedHeroes, setPersistedHeroes] = useState<Hero[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [terms, setTerms] = useState<Record<string, string | undefined>>({})
  const [filters, setFilters] = useState<
    Record<string, string | number | boolean | undefined>
  >({})
  const [sort, setSort] = useState<Record<string, SortType>>({
    price: SortType.Asc
  })

  const queryParams = useMemo(
    () => ({
      query: {
        terms,
        filters,
        page: currentPage
      },
      sort
    }),
    [currentPage, filters, sort, terms]
  )

  const { data = { data: [] }, error, loading } = useGetHeroesQuery(queryParams)
  const { data: heroes, pagination } = data

  // useEffect(() => {
  //   fetchHeroes()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  useEffect(() => {
    if (!heroes.length) return

    setPersistedHeroes((prevState) => [...prevState, ...heroes])
  }, [heroes])

  const handleFiltersVisibility = () => {
    setFiltersVisible((prevState) => !prevState)
  }

  const handleViewMoreClick = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  if (error) return <Box>{error.toString()}</Box>

  return (
    <Box className='flex flex-wrap gap-8'>
      <Box className='md:hidden'>
        <Button onClick={handleFiltersVisibility}>
          {filtersVisible ? 'Hide filters' : 'Show filters'}
        </Button>
      </Box>
      <Box className='basis-full md:basis-1/4'>
        <Filters
          className={filtersVisible ? '' : 'invisible'}
          setTerms={setTerms}
          setFilters={setFilters}
          setSort={setSort}
          setCurrentPage={setCurrentPage}
          setPersistedHeroes={setPersistedHeroes}
        />
      </Box>
      <Box className='basis-full md:flex-1'>
        <Box className='overflow-x-auto flex flex-wrap gap-4'>
          <Tag className='!bg-pink-500'>{tags[0]}</Tag>
          {tags.slice(1).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Box>
        <Box className='mt-4 max-h-screen overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
          {!loading && persistedHeroes.length === 0 && (
            <Text>No heroes found.</Text>
          )}

          {persistedHeroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </Box>
        {pagination?.hasNextPage && (
          <Box className='basis-full flex justify-center'>
            <Button
              type='primary'
              disabled={loading}
              loading={loading}
              onClick={handleViewMoreClick}
            >
              View more
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
