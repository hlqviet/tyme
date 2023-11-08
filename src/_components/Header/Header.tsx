import Button from '@/src/_components/Button'
import Link from '@/src/_components/Link'
import List from '@/src/_components/List'

const links = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About Us',
    href: '/about-us'
  },
  {
    text: 'Our Teams',
    href: '/our-teams'
  },
  {
    text: 'Roadmap',
    href: '/roadmap'
  },
  {
    text: 'Whitepaper',
    href: '/whitepaper'
  }
]

const Header = () => {
  return (
    <header className='overflow-x-auto whitespace-nowrap md:overflow-x-hidden p-4 lg:px-32 bg-black/70 flex justify-between items-center'>
      <List>
        <List.Item className='inline uppercase ml-0'>
          <Link href={links[0].href}>{links[0].text}</Link>
        </List.Item>
        {links.slice(1).map(({ text, href }) => (
          <List.Item key={text} className='inline uppercase ml-12'>
            <Link href={href}>{text}</Link>
          </List.Item>
        ))}
      </List>
      <Button className='ml-8 md:ml-0' type='primary'>
        Connect Wallet
      </Button>
    </header>
  )
}

export default Header
