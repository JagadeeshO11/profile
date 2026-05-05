import { motion } from 'framer-motion'
import { cardHover, fadeUp } from '../../lib/variants'

/**
 * PremiumCard — animated card with hover lift
 */
export default function PremiumCard({ children, className = '', highlight = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      // @ts-ignore
      custom={cardHover}
      style={{
        background: highlight ? '#1C0A2E' : 'var(--card)',
        border: `1px solid ${highlight ? '#C9A84C' : 'var(--border)'}`,
      }}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Gold shimmer on hover */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.06), transparent)' }}
      />
      {children}
    </motion.div>
  )
}
