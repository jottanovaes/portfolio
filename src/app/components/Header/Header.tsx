import Link from 'next/link'

import { HeaderItem } from '@/app/components/Header/HeaderItem'
import Image from 'next/image'
import logo from '@/app/assets/logo.svg'
import { Menu, X } from 'lucide-react'

// Adicionar animação com framermotion
// Adicionar estado para controlar checkbox
// Adicionar etado click outside para fechar menu

export function Header() {
  return (
    <div className='fixed w-full select-none bg-white'>
      <nav className='relative mx-6 my-2 flex items-center justify-between sm:container sm:mx-auto'>
        <Link href='#'>
          <Image src={logo} width={40} height={40} alt='logo' />
        </Link>

        <input
          type='checkbox'
          name='menu'
          id='menu'
          className='peer invisible absolute right-8'
        />
        <label
          htmlFor='menu'
          className='cursor-pointer peer-checked:hidden sm:hidden sm:peer-checked:hidden'
        >
          <Menu className='' />
        </label>
        <label
          htmlFor='menu'
          className='hidden cursor-pointer peer-checked:block sm:hidden sm:peer-checked:hidden'
        >
          <X className='' />
        </label>

        <ul className='hidden items-center gap-6 rounded border-2 border-black transition-all duration-300 peer-checked:absolute peer-checked:right-0 peer-checked:top-10 peer-checked:block peer-checked:border-black sm:flex sm:border-none sm:peer-checked:static sm:peer-checked:flex'>
          <li className='list-none px-12 pl-6 hover:bg-gray-100 sm:px-0 sm:hover:bg-transparent'>
            <HeaderItem href='#' text='projects' />
          </li>
          <li className='list-none px-12 pl-6 hover:bg-gray-100 sm:px-0 sm:hover:bg-transparent'>
            <HeaderItem href='#' text='contact' />
          </li>

          <li className='list-none px-12 pl-6 hover:bg-gray-100 sm:px-0 sm:hover:bg-transparent'>
            <Link
              href='#'
              className='flex py-5 leading-5 sm:my-2 sm:rounded sm:border-2 sm:border-black sm:bg-green-300 sm:px-4 sm:py-3 sm:transition-shadow sm:duration-300 sm:hover:bg-green-400 sm:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]'
            >
              resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
