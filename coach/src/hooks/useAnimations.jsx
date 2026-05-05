import { useInView } from 'react-intersection-observer'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

// ── Fade in with direction ──────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    show: { opacity: 1, y: 0, x: 0 },
  }
  return (
    <motion.div ref={ref} variants={variants} initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

// ── Stagger children ────────────────────────────────────────────────────────
export function StaggerChildren({ children, className = '', stagger = 0.12 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'show' : 'hidden'}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
      className={className}>
      {children}
    </motion.div>
  )
}

export const fadeItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// ── Magnetic hover button ───────────────────────────────────────────────────
export function MagneticButton({ children, className = '', style = {}, onClick }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMove = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.button style={{ x: sx, y: sy, ...style }} className={className}
      onMouseMove={handleMove} onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }} onClick={onClick}>
      {children}
    </motion.button>
  )
}

// ── Scroll reveal text (word by word) ──────────────────────────────────────
export function RevealText({ text, className = '', delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const words = text.split(' ')
  return (
    <motion.span ref={ref} className={`inline-flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => (
        <motion.span key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ── Animated counter ────────────────────────────────────────────────────────
export function AnimatedNumber({ value, suffix = '', className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, v => Math.round(v))
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, value, spring])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}
