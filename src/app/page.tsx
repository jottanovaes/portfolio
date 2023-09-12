import { Inter } from 'next/font/google'
import Header from './components/header'
import About from './components/about'
import Experiences from './components/experiences'
import Projects from './components/projects'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// main projects (or stared one)

export default function Home() {
  return (
    <main className={`${inter.variable} container mx-auto px-12 py-7`}>
      <Header />
      <About />
      <Experiences />
      <Projects />
    </main>
  )
}
