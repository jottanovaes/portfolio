import { Inter } from 'next/font/google'
import Header from './components/header'
import About from './components/about'
import Experiences from './components/experiences'
import Projects from './components/projects'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// main projects (or stared one)

export default function Home() {
  return (
    <main
      className={`${inter.variable} container mx-auto px-12 py-7 lg:flex lg:max-h-screen`}
    >
      <Header />
      <section className='no-scrollbar flex flex-1 flex-col gap-10 overflow-y-scroll pt-8 lg:pt-0'>
        <About />
        <Experiences />
        <Projects />
      </section>
    </main>
  )
}
