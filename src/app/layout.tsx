import './globals.css'

import type { Metadata } from 'next'

import Content from '@/src/_components/Content'
import Footer from '@/src/_components/Footer'
import Header from '@/src/_components/Header'

export const metadata: Metadata = {
  title: 'Tyme',
  description: 'Tyme pre-interview test'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[url('/assets/images/background.png')] bg-no-repeat bg-cover">
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  )
}
