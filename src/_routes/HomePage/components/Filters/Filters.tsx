import { Dispatch, HTMLAttributes, SetStateAction, useState } from 'react'

import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import CloseIcon from '@/src/_components/Icons/CloseIcon'
import SearchIcon from '@/src/_components/Icons/SearchIcon'
import Select from '@/src/_components/Select'
import TextField from '@/src/_components/TextField'
import Subtitle from '@/src/_components/Typography/Subtitle/Subtitle'
import { SortType, Theme, Tier } from '@/src/_lib/enums'
import Hero from '@/src/_models/hero'

const tiers = ['All', ...Object.values(Tier)]
const themes = ['All', ...Object.values(Theme)]

interface FiltersProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  setTerms: Dispatch<SetStateAction<Record<string, string | undefined>>>
  setFilters: Dispatch<
    SetStateAction<Record<string, string | number | boolean | undefined>>
  >
  setSort: Dispatch<SetStateAction<Record<string, SortType>>>
  setCurrentPage: Dispatch<SetStateAction<number>>
  setPersistedHeroes: Dispatch<SetStateAction<Hero[]>>
}

const Filters = (props: FiltersProps) => {
  const {
    className = '',
    setTerms,
    setFilters,
    setSort,
    setCurrentPage,
    setPersistedHeroes
  } = props
  const [search, setSearch] = useState('')
  const [tier, setTier] = useState('All')
  const [priceSort, setPriceSort] = useState(SortType.Asc)

  const handleResetFiltersClick = () => {
    setSearch('')
    setTier('All')
    setPriceSort(SortType.Asc)
  }

  const handleSearchClick = () => {
    setCurrentPage(1)
    setPersistedHeroes([])

    setTerms((prevState) => ({
      ...prevState,
      name: search
    }))

    setFilters((prevState) => ({
      ...prevState,
      tier: tier === 'All' ? undefined : tier
    }))

    setSort((prevState) => ({
      ...prevState,
      price: priceSort
    }))
  }

  return (
    <Box className={`flex flex-wrap gap-4 md:visible ${className}`}>
      <TextField
        startIcon={<SearchIcon />}
        placeholder='Quick search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box className='w-full'>
        <Subtitle>Tier</Subtitle>
        <Select value={tier} onChange={(e) => setTier(e.target.value)}>
          {tiers.map((tier) => (
            <Select.Option key={tier} value={tier}>
              {tier}
            </Select.Option>
          ))}
        </Select>
      </Box>
      <Box className='w-full'>
        <Subtitle>Theme</Subtitle>
        <Select>
          {themes.map((theme) => (
            <Select.Option key={theme} value={theme}>
              {theme}
            </Select.Option>
          ))}
        </Select>
      </Box>
      <Box className='w-full'>
        <Subtitle>Time</Subtitle>
        <Select>
          <Select.Option>Latest</Select.Option>
        </Select>
      </Box>
      <Box className='w-full'>
        <Subtitle>Price</Subtitle>
        <Select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value as SortType)}
        >
          <Select.Option value={SortType.Asc}>Low to high</Select.Option>
          <Select.Option value={SortType.Desc}>High to low</Select.Option>
        </Select>
      </Box>
      <Box className='w-full flex flex-wrap gap-4'>
        <Button startIcon={<CloseIcon />} onClick={handleResetFiltersClick}>
          Reset filters
        </Button>
        <Button type='primary' onClick={handleSearchClick}>
          Search
        </Button>
      </Box>
    </Box>
  )
}

export default Filters
