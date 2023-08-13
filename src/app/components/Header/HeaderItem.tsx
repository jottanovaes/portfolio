import { ArrowDownCircleIcon } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface HeaderItemProps extends LinkProps {
  text: string
}

export function HeaderItem({ href, text }: HeaderItemProps) {
  return (
    <Link
      href={href}
      className='group flex items-center gap-2 py-5 leading-5 sm:px-3'
    >
      {text}
      <ArrowDownCircleIcon
        size={16}
        className='hidden transition-transform duration-300 group-hover:rotate-180 sm:block'
      />
    </Link>
  )
}
