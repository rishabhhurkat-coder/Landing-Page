import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Icon } from '../../../Components/ui/Icon'

type FeatureCardProps = {
  icon: ReactNode
  tone: string
  title: string
  description: string
  link?: string
  href?: string
  index: number
}

export function FeatureCard({ icon, tone, title, description, link, href = '#contact', index }: FeatureCardProps) {
  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: 'easeOut' }}
    >
      <Icon tone={tone}>{icon}</Icon>
      <div className="feature-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {link && <a href={href}>{link} <ArrowRight size={17} /></a>}
      </div>
    </motion.article>
  )
}
