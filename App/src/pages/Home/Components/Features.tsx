import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, Box, CloudCog, FileText, ShieldCheck } from 'lucide-react'
import { Container } from '../../../Components/ui/Container'
import { FeatureCard } from './FeatureCard'

const features = [
  {
    icon: <BarChart3 />,
    tone: 'blue',
    title: 'Live Trading Insights',
    description: 'Track markets, monitor positions, and make data-driven decisions in real time.',
  },
  {
    icon: <FileText />,
    tone: 'green',
    title: 'Smart Billing',
    description: 'Create invoices, manage customers, and get paid faster with ease.',
  },
  {
    icon: <Box />,
    tone: 'purple',
    title: 'Strategy Management',
    description: 'Allocate strategies, analyze performance, and maximize returns.',
  },
  {
    icon: <CloudCog />,
    tone: 'orange',
    title: 'Real-time Reports',
    description: 'Get advanced reports and dashboards to track every aspect of your business.',
  },
  {
    icon: <ShieldCheck />,
    tone: 'blue',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security, role-based access, and reliable system performance.',
  },
]

export function Features() {
  const [featureRef, featureInView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section className="landing-features" ref={featureRef}>
      <Container className="landing-features-inner">
        <motion.div className="landing-section-heading" initial={{ opacity: 0, y: 18 }} animate={featureInView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <span>Everything You Need. All in One Place.</span>
          <motion.h2 initial={{ opacity: 0, y: 18 }} animate={featureInView ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 0.12, duration: 0.6, ease: 'easeOut' }}>Powerful Features for <em>Modern Businesses</em></motion.h2>
        </motion.div>
        <div className="landing-feature-grid">
        {features.map((feature, index) => (
          <AnimatePresence key={feature.title}>
            {featureInView && <FeatureCard {...feature} index={index} />}
          </AnimatePresence>
        ))}
        </div>
      </Container>
    </section>
  )
}
