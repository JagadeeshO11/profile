import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-scroll'
import { services } from '../data/content'

const A = '#C9626A', A2 = '#E8A0A5'
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* DARK section — bg image + dark overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1490750967868-88df5691cc5e?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'rgba(26,10,15,0.85)' }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(201,98,106,0.5) 1px, transparent 1px)`,
          backgroundSize: '30px 30px', opacity: 0.06,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: A }}>
            <span className="w-5 h-px" style={{ background: A }} /> Work With Me <span className="w-5 h-px" style={{ background: A }} />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-white">
            Coaching <span style={{ background: `linear-gradient(135deg,${A},${A2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Programs</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Every program delivers real skills, real income, and real independence.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <motion.div key={s.id} variants={up}
              whileHover={{ y: -8, boxShadow: s.highlight ? '0 24px 64px rgba(201,98,106,0.35)' : '0 20px 48px rgba(201,98,106,0.15)' }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col p-7 border overflow-hidden"
              style={{
                background: s.highlight ? 'rgba(201,98,106,0.15)' : 'rgba(255,255,255,0.07)',
                borderColor: s.highlight ? A : 'rgba(201,98,106,0.25)',
                backdropFilter: 'blur(8px)',
              }}>

              {s.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-white" style={{ background: A }}>Popular</span>
                </div>
              )}

              <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="mb-5 text-2xl w-fit" style={{ color: A }}>{s.icon}</motion.div>

              <h3 className="font-serif text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.outcome}</p>

              <ul className="space-y-2.5 mb-7 flex-1">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <Check size={13} className="mt-0.5 shrink-0" style={{ color: A }} />{f}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-5 mt-auto flex items-center justify-between"
                style={{ borderColor: 'rgba(201,98,106,0.2)' }}>
                <div>
                  <p className="font-serif text-lg font-semibold" style={{ color: A }}>{s.price}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.duration}</p>
                </div>
                <Link to="contact" smooth duration={800} offset={-80}>
                  <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                    className="text-xs font-semibold tracking-widest uppercase px-4 py-2 transition-all"
                    style={s.highlight ? { background: A, color: '#ffffff' } : { border: `1px solid ${A}`, color: A }}>
                    Apply
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
