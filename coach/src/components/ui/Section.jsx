import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../lib/variants'

export default function Section({ id, children, dark = false, className = '', style = {} }) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer(0.12, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className={`section relative overflow-hidden ${className}`}
      style={{ background: dark ? '#1C0A2E' : 'var(--bg)', ...style }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.div variants={fadeUp}
          className={`inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase mb-4 ${center ? 'justify-center w-full' : ''}`}
          style={{ color: '#C9A84C' }}>
          <span className="w-5 h-px inline-block" style={{ background: '#C9A84C' }} />
          {eyebrow}
          <span className="w-5 h-px inline-block" style={{ background: '#C9A84C' }} />
        </motion.div>
      )}
      <motion.h2 variants={fadeUp}
        className="font-serif text-4xl md:text-5xl font-semibold leading-tight"
        style={{ color: light ? '#FAF8F4' : 'var(--text)' }}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp}
          className={`mt-4 text-base leading-relaxed ${center ? 'mx-auto' : ''} max-w-xl`}
          style={{ color: light ? 'rgba(250,248,244,0.6)' : 'var(--muted)' }}>
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
