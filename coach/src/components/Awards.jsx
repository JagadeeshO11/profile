import { motion } from 'framer-motion'
import { awards } from '../data/content'

const A = '#C9626A', A2 = '#E8A0A5', DARK = '#1A0A0F'

export default function Awards() {
  return (
    <section id="awards" className="relative py-20 px-6 overflow-hidden" style={{ background: DARK }}>

      {/* Decorative certificate border frame */}
      <div className="absolute inset-6 pointer-events-none" style={{
        border: '1px solid rgba(201,98,106,0.15)',
        boxShadow: 'inset 0 0 60px rgba(201,98,106,0.04)',
      }} />
      <div className="absolute inset-8 pointer-events-none" style={{
        border: '1px solid rgba(201,98,106,0.08)',
      }} />

      {/* Corner ornaments */}
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 pointer-events-none`}>
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d={i === 0 ? 'M0,16 L0,0 L16,0' : i === 1 ? 'M32,16 L32,0 L16,0' : i === 2 ? 'M0,16 L0,32 L16,32' : 'M32,16 L32,32 L16,32'}
              stroke={A} strokeWidth="2" opacity="0.5"
            />
            <circle cx={i === 0 ? 0 : i === 1 ? 32 : i === 2 ? 0 : 32}
              cy={i < 2 ? 0 : 32} r="3" fill={A} opacity="0.4" />
          </svg>
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: A }}>
            <span className="w-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${A})` }} />
            Achievements
            <span className="w-8 h-px" style={{ background: `linear-gradient(to left, transparent, ${A})` }} />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            National{' '}
            <span style={{ background: `linear-gradient(135deg,${A},${A2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Awards
            </span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Recognised nationally for outstanding contribution to women's empowerment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {awards.map((a, i) => (
            <motion.div key={a.year}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.65 }}
              whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(201,98,106,0.2)' }}
              className="relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,98,106,0.25)', backdropFilter: 'blur(8px)' }}>

              {/* Ribbon corner badge */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-3 right-[-20px] w-24 py-1.5 text-center text-[10px] font-bold tracking-widest uppercase rotate-45"
                  style={{ background: A, color: '#fff' }}>
                  {a.year}
                </div>
              </div>

              <motion.div initial={{ x: '-100%' }} whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(201,98,106,0.08), transparent)' }} />

              <div className="p-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(201,98,106,0.12)', border: '1px solid rgba(201,98,106,0.3)' }}>
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{a.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>{a.desc}</p>
                <div className="flex items-center gap-2 pt-4" style={{ borderTop: '1px solid rgba(201,98,106,0.15)' }}>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: A }}>Year {a.year}</span>
                  <span className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${A}, transparent)` }} />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>2× Winner</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          className="flex justify-center mt-14">
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 96 96" className="absolute inset-0 w-full h-full">
              <circle cx="48" cy="48" r="44" fill="none" stroke={A} strokeWidth="1.5" opacity="0.4" strokeDasharray="4 3" />
              <circle cx="48" cy="48" r="36" fill="none" stroke={A} strokeWidth="1" opacity="0.25" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xl">⭐</span>
              <span className="text-[9px] font-bold tracking-widest uppercase mt-0.5" style={{ color: A }}>Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
