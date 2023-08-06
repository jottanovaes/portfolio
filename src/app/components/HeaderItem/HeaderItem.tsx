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
      className='group flex items-center gap-2 px-3 py-5 leading-5'
    >
      {text}
      <ArrowDownCircleIcon
        size={16}
        className='transition-transform duration-300 group-hover:rotate-180'
      />
    </Link>
  )
}
