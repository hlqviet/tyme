'use client'

import { useState } from 'react'

import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import Tag from '@/src/_components/Tag'
import heroes from '@/src/_data/heroes.json'
import Filters from '@/src/_routes/HomePage/components/Filters'
import HeroCard from '@/src/_routes/HomePage/components/HeroCard'

const tags = ['All', 'Upper Body', 'Lower Body', 'Hat', 'Shoes', 'Accessory']

const HomePage = () => {
  const [filtersVisible, setFiltersVisible] = useState(true)

  const handleFiltersVisibility = () => {
    setFiltersVisible((prevState) => !prevState)
  }

  return (
    <Box className='flex flex-wrap gap-8'>
      <Box className='md:hidden'>
        <Button onClick={handleFiltersVisibility}>
          {filtersVisible ? 'Hide filters' : 'Show filters'}
        </Button>
      </Box>
      <Box className='basis-full md:basis-1/4'>
        <Filters className={filtersVisible ? '' : 'invisible'} />
      </Box>
      <Box className='basis-full md:flex-1'>
        <Box className='overflow-x-auto flex flex-wrap gap-4'>
          <Tag className='!bg-pink-500'>{tags[0]}</Tag>
          {tags.slice(1).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Box>
        <Box className='mt-4 max-h-screen overflow-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
