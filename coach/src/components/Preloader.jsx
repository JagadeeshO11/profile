import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const A = '#C9626A'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  useEffect(() => { const t = setTimeout(() => setVisible(false), 2400); return () => clearTimeout(t) }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#1A0A0F' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="w-14 h-14 rounded-full border-2 border-t-transparent mb-6"
            style={{ borderColor: 'rgba(201,98,106,0.25)', borderTopColor: A }} />
          <div className="flex gap-0.5">
            {'Asfiya Sulthana'.split('').map((l, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="font-serif text-xl font-semibold"
                style={{ color: l === ' ' ? 'transparent' : A, minWidth: l === ' ' ? '6px' : 'auto' }}>
                {l}
              </motion.span>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="text-xs tracking-[0.3em] uppercase mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Business Coach & Entrepreneur
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
