import './globals.css'

import type { Metadata } from 'next'

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
        {children}
      </body>
    </html>
  )
}
