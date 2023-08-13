import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Home() {
  return (
    <main className={`${inter.variable}`}>
      {/* <h1>
        Oi, <span>icon</span>Eu sou o Jotta.
      </h1> */}
    </main>
  )
}
