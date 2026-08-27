import './Home.css'
import { useEffect, useRef } from 'react'
import { Hero } from './Components/Hero'
import { Features } from './Components/Features'
import { Products } from '../Products/Components/Products'

export function HomePage() {
  const homeRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const homeSection = homeRef.current
    const productsSection = productsRef.current
    if (!homeSection || !productsSection) return

    const announceSection = (section: 'home' | 'products') => window.dispatchEvent(new CustomEvent('landing-section-change', { detail: section }))
    announceSection('home')
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target === productsSection) announceSection('products')
      if (visible?.target === homeSection) announceSection('home')
    }, { threshold: [0.05, 0.2, 0.5], rootMargin: '-90px 0px -45% 0px' })

    observer.observe(homeSection)
    observer.observe(productsSection)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="homepage landing-page" aria-label="HomePage">
      <section ref={homeRef} id="home-section">
        <Hero />
        <Features />
      </section>
      <div ref={productsRef} id="products-section">
        <Products />
      </div>
    </main>
  )
}

// Keep the shorter export available for existing imports while the route uses
// the explicit HomePage name.
export const Home = HomePage
