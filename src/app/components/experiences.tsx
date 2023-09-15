import { Card } from './card'

const desc = 'More info coming soon.'

function Experiences() {
  return (
    <section className='flex flex-col items-start gap-8' id='experiences'>
      <h2 className='font-bold'>Experience</h2>
      <Card startDate='1/9/2023' title='UOL Host' href='#' description={desc} />
      <Card
        startDate='1/10/2021'
        endDate='1/12/2022'
        title='Trybe'
        href='#'
        description={desc}
      />
    </section>
  )
}

export default Experiences
