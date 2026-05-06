import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { stats, values, mission, vision, awards, brand } from '../data/content'
import portraitImg from '../assets/picture.jpeg'

const A = '#C9626A'
const A2 = '#E8A0A5'
const DARK = '#1A0A0F'
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
const GRAD = { background: `linear-gradient(135deg,${A},${A2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }

function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])
  useEffect(() => {
    if (!started) return
    let v = 0; const step = end / (duration / 16)
    const t = setInterval(() => { v += step; if (v >= end) { setCount(end); clearInterval(t) } else setCount(Math.floor(v)) }, 16)
    return () => clearInterval(t)
  }, [started, end, duration])
  return { ref, count }
}

function StatCard({ value, suffix, label }) {
  const { ref, count } = useCounter(value)
  return (
    <div ref={ref} className="text-center py-4">
      <p className="font-serif text-5xl font-bold" style={GRAD}>{count}{suffix}</p>
      <p className="text-sm mt-2 tracking-wide" style={{ color: '#7A5A5E' }}>{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle texture bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'rgba(255,255,255,0.88)' }} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 mb-20 border"
          style={{ borderColor: '#EDD8DA', background: '#FDF6F7' }}>
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 opacity-30" style={{ borderColor: A }} />
              <div className="relative aspect-[4/5] overflow-hidden"
                style={{ background: '#FDF6F7' }}>
                <img 
                  src={portraitImg} 
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 max-w-[240px] p-5 shadow-2xl" style={{ background: DARK }}>
                <p className="font-serif text-sm italic leading-relaxed text-white opacity-90">
                  "We are the women of Independent India."
                </p>
                <p className="text-xs mt-2 tracking-widest uppercase" style={{ color: A }}>— {brand.founder}</p>
              </div>
            </div>

            <div className="mt-16 space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: A }}>National Awards</p>
              {awards.map((a, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 items-start p-4 border-l-4"
                  style={{ borderColor: A, background: '#FDF6F7' }}>
                  <span className="text-3xl shrink-0">🏆</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: DARK }}>{a.title}</p>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: '#7A5A5E' }}>{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-7">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: A }}>
                <span className="w-5 h-px" style={{ background: A }} /> My Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mt-2" style={{ color: DARK }}>
                From Dreams to <span style={GRAD}>Millionaire & Beyond</span>
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#5A3A3E' }}>
              I am <strong style={{ color: DARK }}>Asfiya Sulthana</strong> — Business Coach, Entrepreneur, and Founder of a growing digital platform. I earned over ₹36 lakhs and helped 900+ women become financially independent. Alhamdulillah.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#5A3A3E' }}>
              I have achieved the National Award twice in 2 years, and today I empower girls to fulfil their dreams and support their families — all through the power of digital skills.
            </p>

            <div className="p-5 border-l-4" style={{ borderColor: A, background: '#FDF6F7' }}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: A }}>✦ Mission</p>
              <p className="text-sm leading-relaxed" style={{ color: '#5A3A3E' }}>{mission}</p>
            </div>

            <div className="p-5 border-l-4" style={{ borderColor: '#EDD8DA', background: '#FDF6F7' }}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#C4A0A3' }}>✦ Vision</p>
              <p className="text-sm leading-relaxed" style={{ color: '#5A3A3E' }}>{vision}</p>
            </div>

            <div className="space-y-4">
              {values.map(v => (
                <motion.div key={v.title} whileHover={{ x: 4 }} className="flex gap-3 items-start">
                  <span className="mt-0.5 text-sm shrink-0" style={{ color: A }}>{v.icon}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: DARK }}>{v.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: '#7A5A5E' }}>{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
