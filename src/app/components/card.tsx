import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Props {
  endDate?: string
  startDate: string
  href: string
  title: string
  description: string
}

function stringToDate(date: string) {
  /*
   * date format: '1/4/2021'
   */
  const [_day, month, year] = date.split('/')
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ]

  return `${months[parseInt(month) - 1]}, ${year}`
}

export function Card({ startDate, href, title, description, endDate }: Props) {
  return (
    <div className='flex w-full flex-col gap-2 lg:flex-row'>
      <span className='w-fit min-w-[100px] whitespace-nowrap text-sm font-bold leading-normal text-gray-500'>
        {stringToDate(startDate)}
        &nbsp;&mdash;&nbsp;
        <br className='hidden lg:block' />
        {endDate ? `${stringToDate(endDate)}` : 'PRESENT'}
      </span>
      <Link
        href={href}
        className='w-full rounded border-2 border-black lg:max-w-xl'
      >
        <div className='min-h-7 flex h-12 items-center justify-center bg-black'></div>
        <div className='flex flex-1 flex-col gap-4 px-6 py-4'>
          <h3 className='flex items-center gap-2 text-base font-bold leading-tight'>
            {title}
            <ExternalLink width={18} />
          </h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}
