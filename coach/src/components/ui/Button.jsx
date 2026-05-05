import { motion } from 'framer-motion'

export function GoldButton({ children, onClick, className = '', type = 'button' }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(201,168,76,0.35)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`gold-btn cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  )
}

export function OutlineButton({ children, onClick, className = '', type = 'button' }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(201,168,76,0.08)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`outline-btn cursor-pointer ${className}`}
    >
      {children}
    </motion.button>
  )
}
