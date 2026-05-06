import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const A = '#C9626A'
const links = [
  { to: 'hero',     label: 'Home' },
  { to: 'about',    label: 'About Us' },
  // { to: 'services', label: 'Programs' },
  { to: 'results',  label: 'Testimonials' },
  { to: 'insights', label: 'Insights' },
  { to: 'contact',  label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: scrolled ? 'rgba(253,246,247,0.97)' : 'rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 2px 20px rgba(201,98,106,0.08)' : '0 0 0 rgba(0,0,0,0)',
        borderBottom: scrolled ? '1px solid #EDD8DA' : '1px solid transparent',
        transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
      }}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link to="hero" smooth duration={700} className="cursor-pointer select-none">
          <span className="font-serif text-2xl font-bold"
            style={{ color: scrolled ? '#1A0A0F' : '#ffffff', transition: 'color 0.35s ease' }}>
            Asfiya<span style={{ color: A }}> Sulthana</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to} smooth duration={700} offset={-80}
              spy activeClass="!text-[#C9626A]"
              className="relative text-sm font-medium cursor-pointer group"
              style={{ color: scrolled ? '#7A5A5E' : 'rgba(255,255,255,0.85)', transition: 'color 0.35s ease' }}>
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full"
                style={{ background: A, transition: 'width 0.3s ease' }} />
            </Link>
          ))}
          <Link to="contact" smooth duration={700} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(201,98,106,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: A, color: '#ffffff' }}>
              Get In Touch <ArrowUpRight size={13} />
            </motion.button>
          </Link>
        </nav>

        <button onClick={() => setOpen(o => !o)} className="lg:hidden"
          style={{ color: scrolled ? '#1A0A0F' : '#ffffff', transition: 'color 0.35s ease' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t" style={{ borderColor: '#EDD8DA' }}>
            <div className="px-6 py-5 space-y-4">
              {links.map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}>
                  <Link to={l.to} smooth duration={700} offset={-80} onClick={() => setOpen(false)}
                    className="block text-sm font-medium py-1 transition-colors hover:text-[#C9626A]"
                    style={{ color: '#7A5A5E' }}>{l.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="contact" smooth duration={700} onClick={() => setOpen(false)}>
                <button className="w-full py-3 text-xs font-semibold tracking-widest uppercase mt-2 text-white"
                  style={{ background: A }}>Get In Touch</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
