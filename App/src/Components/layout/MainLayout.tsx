import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="site-shell">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
