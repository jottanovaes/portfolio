import { Inter } from 'next/font/google'
import About from './components/about'
import Experiences from './components/experiences'
import Posts from './components/projects'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// main projects (or stared one)

export default function Home() {
  return (
    <main
      className={`${inter.variable} lg:py-17 gap-7 bg-white lg:flex lg:flex-1 lg:flex-col`}
    >
      <About />
      <Experiences />
      <Posts />
    </main>
  )
}
