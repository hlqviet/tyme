import Box from '@/src/_components/Box'
import Button from '@/src/_components/Button'
import CommentIcon from '@/src/_components/Icons/CommentIcon'
import HandsetIcon from '@/src/_components/Icons/HandsetIcon'
import Link from '@/src/_components/Link'
import TextField from '@/src/_components/TextField'
import Text from '@/src/_components/Typography/Text'
import Title from '@/src/_components/Typography/Title'

const links = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Whitepaper',
    href: '/whitepaper'
  },
  {
    text: 'FAQs',
    href: '/faqs'
  },
  {
    text: 'About us',
    href: '/about-us'
  },
  {
    text: 'Marketplace',
    href: '/marketplace'
  },
  {
    text: 'News',
    href: '/news'
  },
  {
    text: 'Our teams',
    href: '/our-teams'
  },
  {
    text: 'Roadmap',
    href: '/roadmap'
  },
  {
    text: 'Community',
    href: '/community'
  }
]

const Footer = () => {
  return (
    <footer className='p-4 text-sm md:text-base lg:px-32 lg:pt-10 lg:pb-24 bg-zinc-900'>
      <Box className='flex flex-wrap gap-4 lg:gap-0'>
        <Box className='lg:basis-1/3'>
          <Title>Navigation</Title>
          <Box className='flex flex-wrap'>
            {links.map(({ text, href }) => (
              <Box key={text} className='basis-1/3'>
                <Link href={href}>{text}</Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className='lg:basis-1/3'>
          <Title>Contact Us</Title>
          <Box>
            <Box className='flex items-center gap-2'>
              <HandsetIcon /> <Link href='tel:01234568910'>01234568910</Link>
            </Box>
            <Box className='flex items-center gap-2'>
              <CommentIcon />{' '}
              <Link href='mailto:tymex-talent@tyme.com'>
                <Text>tymex-talent@tyme.com</Text>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className='lg:basis-1/3'>
          <Title>Subcribe to receive our latest update</Title>
          <Box className='flex gap-4'>
            <TextField placeholder='Your email address' />
            <Button type='primary'>Subscribe</Button>
          </Box>
        </Box>
      </Box>
      <hr className='my-8' />
      <Text>
        &copy; {new Date().getFullYear()} Tyme - Edit. All rights reserved.
      </Text>
    </footer>
  )
}

export default Footer
