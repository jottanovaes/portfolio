import Link from 'next/link'

function Projects() {
  return (
    <section id='projects' className='mt-8'>
      <div className='flex flex-col gap-2'>
        <span className='text-base font-bold leading-normal text-gray-500'>
          April 23th
        </span>
        <Link href='#' className='rounded border-2 border-black'>
          <div className='min-h-7 flex h-12 items-center justify-center bg-black'></div>
          <div className='flex flex-col gap-4 px-6 py-4'>
            <h3 className='text-base font-bold leading-tight'>
              EcoHub: Embrace Sustainability, Join the Movement
            </h3>
            <p>
              EcoHub connects eco-enthusiasts worldwide. Dive into
              sustainability, collaborate on green projects, access resources,
              and find eco-friendly products. Join us today and be the change.
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Projects
