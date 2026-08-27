import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import { Button } from '../../../Components/ui/Button'
import { Container } from '../../../Components/ui/Container'
import { BackgroundEffects } from './BackgroundEffects'
import heroProductImage from '../../../assets/images/hl-product-dashboard-hero.png'

const easing = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="landing-hero">
      <BackgroundEffects />
      <Container className="landing-hero-grid">
        <div className="landing-hero-copy">
          <motion.div className="landing-eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6, ease: easing }}><span /> All-in-One Business Management Suite</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7, ease: easing }}>
            Run <span>Smarter.</span>
            <br />
            Grow <span>Faster.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.65, ease: easing }}>
            H&amp;L Software empowers businesses with intelligent trading, seamless billing, and real-time insights — all in one place.
          </motion.p>
          <motion.p className="landing-hero-secondary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46, duration: 0.65, ease: easing }}>Automate operations, reduce errors, and focus on what matters most: growing your business.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6, ease: easing }}>
            <Button variant="primary" to="/products">
              Explore Products
            </Button>
            <Button variant="secondary" to="/contact" icon={<CalendarDays size={19} strokeWidth={1.8} />}>
              Book a Demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="landing-product-visual"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.85, ease: easing }}
        >
          <img
            src={heroProductImage}
            alt="H&L Software dashboard for trading, billing, analytics and business management"
          className="hero-product-image"
          />
        </motion.div>
      </Container>
    </section>
  )
}
