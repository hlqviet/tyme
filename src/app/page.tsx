import Button from '@/src/_components/Button'
import SearchIcon from '@/src/_components/Icons/SearchIcon'
import List from '@/src/_components/List'
import Select from '@/src/_components/Select'
import Tag from '@/src/_components/Tag'
import TextField from '@/src/_components/TextField'
import Subtitle from '@/src/_components/Typography/Subtitle/Subtitle'
import Title from '@/src/_components/Typography/Title'

export default function Home() {
  return (
    <main>
      <Button type='primary'>Search</Button>
      <TextField startIcon={<SearchIcon />} placeholder='Quick search' />
      <Select>
        <Select.Option>All</Select.Option>
        <Select.Option>Right</Select.Option>
      </Select>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <Tag>Tag</Tag>
      <List>
        <List.Item>Item</List.Item>
      </List>
    </main>
  )
}
