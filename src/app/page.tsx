import Link from 'next/link'
import { Inter } from 'next/font/google'
import { HeaderItem } from '@/app/components/HeaderItem/HeaderItem'
import Image from 'next/image'
import logo from '@/app/assets/logo.svg'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Home() {
  return (
    <main className={`${inter.variable}`}>
      <div className='fixed w-full bg-white'>
        <nav className='container mx-auto flex items-center justify-between'>
          <Link href='#'>
            <Image src={logo} width={40} height={40} alt='logo' />
          </Link>

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
                className='my-2 block rounded border-2 border-black bg-green-300 px-4 py-3 leading-5 transition-shadow duration-300 hover:bg-green-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]'
              >
                resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
