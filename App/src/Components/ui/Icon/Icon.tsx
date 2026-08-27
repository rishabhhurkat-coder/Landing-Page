import type { ReactNode } from 'react'

type IconProps = {
  children: ReactNode
  tone: string
}

export function Icon({ children, tone }: IconProps) {
  return <div className={`feature-icon ${tone}`}>{children}</div>
}
