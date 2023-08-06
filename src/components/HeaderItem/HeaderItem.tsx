import { ArrowDownCircleIcon } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface HeaderItemProps extends LinkProps {
  text: string
}

export function HeaderItem({ href, text }: HeaderItemProps) {
  return (
    <Link href={href} className='flex items-center gap-2 px-3 py-5 leading-5'>
      {text}
      <ArrowDownCircleIcon size={16} />
    </Link>
  )
}
