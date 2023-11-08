import Box from '@/src/_components/Box'
import Text from '@/src/_components/Typography/Text'
import Hero from '@/src/_models/hero'

const HeroCard = (props: Hero) => {
  const { imageUrl, name, price, tier } = props

  return (
    <Box className='p-4 bg-gray-900/70 rounded flex flex-wrap gap-4 hover:bg-gray-900 hover:cursor-pointer transition'>
      <Box className='relative w-full'>
        <img className='w-full' alt={name} src={imageUrl} />
        <Text className='absolute top-0 left-0 px-4 py-1 rounded bg-white/20'>
          {tier}
        </Text>
      </Box>
      <Box className='w-full flex justify-between'>
        <Text className='font-bold'>{name}</Text>
        <Text>{price} ETH</Text>
      </Box>
      <Box className='w-full flex items-center gap-2'>
        <img
          className='max-w-6 max-h-6 rounded-full'
          alt='Profile picture'
          src='/assets/images/ghozali-ghozalu.jpeg'
        />
        <Text>Ghozali_Ghozalu</Text>
      </Box>
    </Box>
  )
}

export default HeroCard
