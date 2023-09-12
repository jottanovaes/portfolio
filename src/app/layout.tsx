import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        <a rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
