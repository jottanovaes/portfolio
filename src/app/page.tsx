import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// main projects (or stared one)

export default function Home() {
  return (
    <main
      className={`${inter.variable} container mx-auto h-screen px-2 pt-20 sm:px-0`}
    >
      <h1 className=' mb-1 text-3xl font-bold sm:mb-4 sm:text-6xl'>
        Jotta Novaes
      </h1>
      <h2 className='text-lg font-light sm:text-2xl'>
        Frontend Developer at UOL
      </h2>
      <section id='about'>
        <p>
          With a background in biology, I unexpectedly found my true calling in
          algorithms and coding. I&quot;ve successfully ventured through the
          FullStack Trybe course and am now thriving as a Frontend Developer.
        </p>
        <p>
          Beyond work, I dedicate my time as a passionate volunteer at
          &quot;Arboreser RP&quot;, where hours fly by unnoticed.
        </p>
        <p>
          Being a teacher brings me immense joy—a role I embraced thanks to an
          enriching internship during my Computer Science BSc at IFNMG.
        </p>
      </section>
    </main>
  )
}
