import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  to?: string
  onClick?: () => void
}

export function Button({ children, variant = 'primary', icon, to, onClick }: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon ?? <ArrowRight size={20} strokeWidth={1.8} />}
    </>
  )
  const className = `button button-${variant}`

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  )
}
