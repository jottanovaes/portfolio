import { Card } from './card'

const desc =
  'EcoHub connects eco-enthusiasts worldwide. Dive into sustainability, collaborate on green projects, access resources, and find eco-friendly products. Join us today and be the change.'
function Projects() {
  return (
    <section id='projects' className='flex flex-col items-start gap-8'>
      <h2 className='font-bold'>Projects</h2>
      <Card
        startDate='1/4/2023'
        title='EcoHub: Embrace Sustainability, Join the Movement'
        href='#'
        description={desc}
      />
      <Card
        startDate='1/4/2023'
        title='EcoHub: Embrace Sustainability, Join the Movement'
        href='#'
        description={desc}
      />
      <Card
        startDate='1/4/2023'
        title='EcoHub: Embrace Sustainability, Join the Movement'
        href='#'
        description={desc}
      />
    </section>
  )
}

export default Projects
