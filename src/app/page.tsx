import Link from 'next/link'
import { Inter } from 'next/font/google'
import { HeaderItem } from '@/components/HeaderItem/HeaderItem'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Home() {
  return (
    <main className={`${inter.variable}`}>
      <div className='fixed w-full bg-white'>
        <nav className='container mx-auto flex items-center justify-between'>
          <div className='logo'>logo?</div>

          <ul className='flex items-center gap-6'>
            <li className='list-none'>
              <HeaderItem href='#' text='projects' />
            </li>
            <li className='list-none'>
              <HeaderItem href='#' text='contact' />
            </li>

            <li className='list-none'>
              <Link
                href='#'
                className='my-2 block rounded border-2 border-black bg-green-300 px-4 py-3 leading-5 transition-shadow hover:bg-green-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]'
              >
                resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='h-screen bg-blue-500'></div>
      <div className='h-screen bg-red-500'></div>
    </main>
  )
}
