import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { ArrowRight, BarChart3, Code2, FileText, Mail, Menu, Smartphone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import type { SiteNavItem } from '../../../types/navigation'

const navItems: SiteNavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Connections', to: '/connections' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const productMenuItems = [
  { label: 'Email Automation', description: 'Verification workflows', icon: Mail, to: 'https://hnlsoftware.in/email-automation/', external: true },
  { label: 'Prop Trading Engine', description: 'Trade accounting workspace', icon: BarChart3, to: 'https://hnlsoftware.in/prop-trading-engine/', external: true },
  { label: 'Billing Software', description: 'Invoices and payments', icon: FileText, to: '/contact', external: false },
  { label: 'Mobile App', description: 'Operations on the go', icon: Smartphone, to: '/contact', external: false },
  { label: 'Custom Software', description: 'Built around your workflow', icon: Code2, to: '/contact', external: false },
] as const

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productMenuOpen, setProductMenuOpen] = useState(false)
  const [landingSection, setLandingSection] = useState<'home' | 'products'>('home')
  const [indicator, setIndicator] = useState<{ left: number; width: number; visible: boolean }>({ left: 0, width: 0, visible: false })
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    const handleLandingSectionChange = (event: Event) => {
      const section = (event as CustomEvent<'home' | 'products'>).detail
      if (section === 'home' || section === 'products') setLandingSection(section)
    }
    window.addEventListener('landing-section-change', handleLandingSectionChange)
    return () => window.removeEventListener('landing-section-change', handleLandingSectionChange)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setProductMenuOpen(false)
  }

  const scrollToLandingSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname !== '/') return
    event.preventDefault()
    closeMenu()
    window.dispatchEvent(new CustomEvent('landing-section-change', { detail: id === 'home-section' ? 'home' : 'products' }))
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const isLanding = location.pathname === '/'
  const activePath = isLanding ? (landingSection === 'home' ? '/' : '/products') : location.pathname

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current
      const activeLink = nav?.querySelector<HTMLAnchorElement>(`a[data-nav-path="${activePath}"]`)
      if (!nav || !activeLink) {
        setIndicator((current) => ({ ...current, visible: false }))
        return
      }
      const navBox = nav.getBoundingClientRect()
      const linkBox = activeLink.getBoundingClientRect()
      setIndicator({ left: linkBox.left - navBox.left, width: linkBox.width, visible: true })
    }
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activePath, menuOpen])

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="H&L Software home" onClick={closeMenu}>
          <img className="brand-image" src="/assets/branding/hnl-brand-lockup-hd.png" alt="H&L Software" />
        </Link>
        <nav ref={navRef} className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <span className="nav-active-indicator" aria-hidden="true" style={{ '--indicator-left': `${indicator.left}px`, '--indicator-width': `${indicator.width}px`, opacity: indicator.visible ? 1 : 0 } as CSSProperties} />
          {navItems.map((item) => {
            const landingTarget = item.label === 'Home' ? 'home-section' : item.label === 'Products' ? 'products-section' : null
            const isCurrent = activePath === item.to
            if (item.label === 'Products') {
              return <div className={`nav-product-menu-wrap${productMenuOpen ? ' open' : ''}`} key={item.to} onMouseEnter={() => setProductMenuOpen(true)} onMouseLeave={() => setProductMenuOpen(false)} onFocus={() => setProductMenuOpen(true)}>
                <NavLink to={isLanding ? `#products-section` : item.to} data-nav-path={item.to} onClick={(event) => {
                  if (window.matchMedia('(max-width: 920px)').matches) {
                    event.preventDefault()
                    setProductMenuOpen((value) => !value)
                    return
                  }
                  scrollToLandingSection(event, 'products-section')
                }} className={isCurrent ? 'active' : undefined} aria-haspopup="true" aria-expanded={productMenuOpen}>{item.label}</NavLink>
                <div className="nav-product-menu" role="menu" aria-label="Products">
                  {productMenuItems.map((product) => {
                    const Icon = product.icon
                    return product.external ? <a key={product.label} href={product.to} role="menuitem" onClick={closeMenu}><span className="nav-product-icon"><Icon size={16} aria-hidden="true" /></span><span><strong>{product.label}</strong><small>{product.description}</small></span><ArrowRight className="nav-product-arrow" size={15} aria-hidden="true" /></a> : <Link key={product.label} to={product.to} role="menuitem" onClick={closeMenu}><span className="nav-product-icon"><Icon size={16} aria-hidden="true" /></span><span><strong>{product.label}</strong><small>{product.description}</small></span><ArrowRight className="nav-product-arrow" size={15} aria-hidden="true" /></Link>
                  })}
                </div>
              </div>
            }
            if (landingTarget) {
              return <NavLink to={isLanding ? `#${landingTarget}` : item.to} key={item.to} data-nav-path={item.to} onClick={(event) => scrollToLandingSection(event, landingTarget)} className={isCurrent ? 'active' : undefined}>{item.label}</NavLink>
            }
            return <NavLink to={item.to} key={item.to} data-nav-path={item.to} onClick={closeMenu} className={isCurrent ? 'active' : undefined}>{item.label}</NavLink>
          })}
        </nav>
        <div className="nav-actions">
          <Link className="get-started" to="/contact">
            Get Started <ArrowRight size={19} />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
