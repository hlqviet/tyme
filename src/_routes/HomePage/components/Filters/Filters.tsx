import { HTMLAttributes } from 'react'

import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import CloseIcon from '@/src/_components/Icons/CloseIcon'
import SearchIcon from '@/src/_components/Icons/SearchIcon'
import Select from '@/src/_components/Select'
import TextField from '@/src/_components/TextField'
import Subtitle from '@/src/_components/Typography/Subtitle/Subtitle'
import { SortType, Theme, Tier } from '@/src/_lib/enums'

const tiers = ['All', ...Object.values(Tier)]
const themes = ['All', ...Object.values(Theme)]

interface FiltersProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {}

const Filters = (props: FiltersProps) => {
  const { className = '' } = props

  return (
    <Box className={`flex flex-wrap gap-4 md:visible ${className}`}>
      <TextField startIcon={<SearchIcon />} placeholder='Quick search' />
      <Box className='w-full'>
        <Subtitle>Tier</Subtitle>
        <Select>
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
        <Select>
          <Select.Option value={SortType.Asc}>Low to high</Select.Option>
          <Select.Option value={SortType.Desc}>High to low</Select.Option>
        </Select>
      </Box>
      <Box className='w-full flex flex-wrap gap-4'>
        <Button startIcon={<CloseIcon />}>Reset filter</Button>
        <Button type='primary'>Search</Button>
      </Box>
    </Box>
  )
}

export default Filters
