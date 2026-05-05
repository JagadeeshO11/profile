// Single source of truth for all Framer Motion variants

export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeDown = {
  hidden:  { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeLeft = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeRight = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

export const scaleHover = {
  rest:  { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } },
  tap:   { scale: 0.97 },
}

export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 2px 8px rgba(28,10,46,0.04)' },
  hover: { y: -8, boxShadow: '0 24px 64px rgba(28,10,46,0.12)', transition: { duration: 0.35, ease: 'easeOut' } },
}

export const imageReveal = {
  hidden:  { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export const lineGrow = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
}

export const navItem = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.5, ease: 'easeOut' } },
}

export const badgePop = {
  hidden:  { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1,   transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.5 } },
}
