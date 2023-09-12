import Image from 'next/image'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex flex-col gap-7'>
      <div className='flex w-fit flex-col gap-3'>
        <h1 className='text-4xl font-bold'>Jotta Novaes</h1>
        <h2 className='text-xl font-light'>Frontend Developer at UOL</h2>
        <p className='text-base font-light'>
          I create, test, and refine web pages.
        </p>
      </div>
      <div className='flex items-center justify-start gap-2'>
        <a href='https://linkedin.com/in/jottanovaes/' target='_blank'>
          <Image src={linkedin} width={25} height={25} alt='Linkedin' />
        </a>
        <a href='https://github.com/jottanovaes' target='_blank'>
          <Image src={github} width={25} height={25} alt='Github' />
        </a>
      </div>
      <nav className='flex items-center justify-center gap-4 text-base font-bold text-gray-400 '>
        <a
          href='#about'
          className='transition-all duration-300 hover:text-black hover:underline'
        >
          about
        </a>
        <a
          href='#experiences'
          className='transition-all duration-300 hover:text-black hover:underline'
        >
          experiences
        </a>
        <a
          href='#projects'
          className='transition-all duration-300 hover:text-black hover:underline'
        >
          projects
        </a>
      </nav>
    </header>
  )
}

export default Header
