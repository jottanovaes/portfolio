import Link from 'next/link'

interface Props {
  text: string
  href: string
}
export function NavItem({ text, href }: Props) {
  return (
    <Link
      href={href}
      className='transition-all duration-300 hover:text-black hover:underline lg:text-4xl'
    >
      {text}
    </Link>
  )
}
