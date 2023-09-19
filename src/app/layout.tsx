import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'j',
  description: 'A Developer Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body
        className={`${inter.className} container mx-auto px-12 py-7 md:px-24 lg:flex lg:py-0`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
