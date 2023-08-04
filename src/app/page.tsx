import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Home() {
  return (
    <main className={`${inter.variable}`}>
      <nav className='container flex justify-between py-2'>
        <div className='logo'>logo?</div>
        <ul className='flex gap-2'>
          <li>
            <Link href='#' className='block rounded px-4 py-3 leading-5'>
              projects
            </Link>
          </li>
          <li>
            <Link href='#' className='block rounded px-4 py-3 leading-5'>
              contact
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='block h-12 rounded border-2 border-black bg-green-300 px-4 py-3 leading-5 hover:bg-green-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]'
            >
              resume
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
