import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { ArrowUpRight } from 'lucide-react'
import { brand } from '../data/content'
import portraitImg from '../assets/picture.jpeg'

const A = '#C9626A'
const A2 = '#E8A0A5'
const DARK = '#1A0A0F'
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

function AnimatedOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {[340, 265, 195].map((size, i) => (
        <motion.div key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ repeat: Infinity, duration: 22 + i * 6, ease: 'linear' }}
          className="absolute rounded-full border"
          style={{ width: size, height: size, borderColor: `rgba(201,98,106,${0.2 - i * 0.05})`, borderStyle: i === 1 ? 'dashed' : 'solid' }} />
      ))}
      <motion.div
        animate={{ boxShadow: [`0 0 30px 8px rgba(201,98,106,0.12)`, `0 0 60px 20px rgba(201,98,106,0.22)`, `0 0 30px 8px rgba(201,98,106,0.12)`], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="w-32 h-32 rounded-full flex items-center justify-center font-serif text-3xl font-bold z-10"
        style={{ background: `linear-gradient(135deg,#2A1018,${DARK})`, border: `2px solid rgba(201,98,106,0.5)`, color: A }}>
        AS
      </motion.div>
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div key={i} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 14 + i, ease: 'linear' }}
          className="absolute" style={{ width: 260, height: 260 }}>
          <div className="absolute w-2 h-2 rounded-full"
            style={{ background: i % 2 === 0 ? A : A2, top: '50%', left: '50%', transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`, opacity: 0.55 }} />
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY  = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: DARK }}>
      {/* Background image — fixed, no parallax on bg itself */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'scroll',
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, rgba(26,10,15,0.92) 0%, rgba(42,16,24,0.85) 50%, rgba(26,10,15,0.92) 100%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse 60% 50% at 15% 55%, rgba(201,98,106,0.18) 0%, transparent 60%)`,
        }} />
      </div>
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(201,98,106,0.8) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      <motion.div style={{ opacity: fade }} className="max-w-6xl mx-auto px-6 w-full py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-7 z-10">

          {/* <motion.div variants={up}>
            <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 border"
              style={{ borderColor: 'rgba(201,98,106,0.35)', color: A }}>
              <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 rounded-full" style={{ background: A }} />
              National Award Winner · 2× in 2 Years
            </span>
          </motion.div> */}

          <motion.h1 variants={up} className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] text-white">
            We Are the Women of{' '}
            <span style={{ background: `linear-gradient(135deg,${A},${A2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Independent India
            </span>
          </motion.h1>

          <motion.div variants={up} className="font-serif text-lg italic" style={{ color: `rgba(232,160,165,0.9)` }}>
            <TypeAnimation
              sequence={['Business Coach & Entrepreneur', 2200, 'Digital Skills Mentor', 2000, 'Empowering 900+ Women', 2000, 'National Award Winner', 2000]}
              speed={52} repeat={Infinity} wrapper="span" />
          </motion.div>

          <motion.p variants={up} className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {brand.sub}
          </motion.p>

          <motion.div variants={up} className="flex flex-wrap gap-4 pt-2">
            <Link to="contact" smooth duration={800} offset={-80}>
              <motion.button whileHover={{ scale: 1.03, boxShadow: `0 8px 32px rgba(201,98,106,0.45)` }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-white"
                style={{ background: A }}>
                Book a Free Call <ArrowUpRight size={14} />
              </motion.button>
            </Link>
            <Link to="services" smooth duration={800} offset={-80}>
              <motion.button whileHover={{ scale: 1.03, borderColor: A, color: A }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 text-xs font-semibold tracking-widest uppercase border border-white/20 text-white/70 transition-all">
                View Programs
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={up} className="flex items-center gap-5 pt-2">
            <div className="flex -space-x-2.5">
              {['FB','RS','NR','ZM'].map((init, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + i * 0.1 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border-2"
                  style={{ background: `hsl(${340 + i * 12},45%,28%)`, borderColor: DARK, color: A2 }}>
                  {init}
                </motion.div>
              ))}
            </div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <span className="font-semibold" style={{ color: A }}>900+</span> women empowered
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center relative" style={{ height: '480px' }}>
          
          {/* Portrait Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative z-10">
            <div className="relative w-80 h-96 rounded-3xl overflow-hidden"
              style={{ 
                boxShadow: '0 25px 80px rgba(201,98,106,0.4)',
                border: '4px solid rgba(201,98,106,0.3)'
              }}>
              <img 
                src={portraitImg} 
                alt={brand.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements around portrait */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20"
              style={{ background: `linear-gradient(135deg, ${A}, ${A2})` }} />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
              style={{ background: `linear-gradient(135deg, ${A2}, ${A})` }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
            whileHover={{ y: -4 }} className="absolute bottom-4 left-0 px-6 py-4 shadow-2xl z-20 bg-white rounded-lg" style={{ minWidth: '170px' }}>
            <p className="font-serif text-2xl font-bold" style={{ color: DARK }}>💰 Millionaire</p>
            <p className="text-xs mt-1" style={{ color: '#7A5A5E' }}>Helping women achieve financial freedom</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, type: 'spring', stiffness: 260, damping: 18 }}
            className="absolute top-4 right-4 w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-xl z-20"
            style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
            <span className="text-lg leading-none">🏆</span>
            <span className="text-[9px] font-bold mt-0.5 text-white">2× Award</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none"
        style={{ color: `rgba(201,98,106,0.4)` }}>
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8" style={{ background: `linear-gradient(to bottom,rgba(201,98,106,0.5),transparent)` }} />
      </motion.div>

      {/* scroll cue only — wave handled by Divider in App */}
    </section>
  )
}
