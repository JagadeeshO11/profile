import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { insights } from '../data/content'

const A = '#C9626A', A2 = '#E8A0A5', DARK = '#1A0A0F'
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

export default function Insights() {
  return (
    <section id="insights" className="py-24 px-6 relative overflow-hidden">
      {/* LIGHT section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'rgba(253,246,247,0.88)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: A }}>
              <span className="w-5 h-px" style={{ background: A }} /> Thought Leadership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2" style={{ color: DARK }}>
              Insights & <span style={{ background: `linear-gradient(135deg,${A},${A2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Perspectives</span>
            </h2>
          </motion.div>
          <motion.button variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            whileHover={{ scale: 1.03, background: A, color: '#ffffff' }} whileTap={{ scale: 0.97 }}
            className="self-start shrink-0 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-all"
            style={{ borderColor: A, color: A }}>
            View All Articles
          </motion.button>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-3 gap-6">
          {insights.map(post => (
            <motion.article key={post.id} variants={up} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}
              className="group flex flex-col border overflow-hidden cursor-pointer hover:shadow-xl transition-shadow bg-white"
              style={{ borderColor: '#EDD8DA' }}>
              <div className="h-44 relative overflow-hidden" style={{ background: '#FDF6F7' }}>
                <motion.div animate={{ x: ['-110%', '110%'] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'linear', repeatDelay: 2.5 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(201,98,106,0.15),transparent)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl font-bold" style={{ color: 'rgba(201,98,106,0.08)' }}>{post.category[0]}</span>
                </div>
                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(26,10,15,0.75)' }}>
                  <ArrowUpRight size={24} style={{ color: A }} />
                </motion.div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1"
                    style={{ background: '#FDF6F7', color: A }}>{post.category}</span>
                  <span className="text-xs" style={{ color: '#C4A0A3' }}>{post.date}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold leading-snug mb-3 transition-colors duration-300 group-hover:text-[#C9626A]"
                  style={{ color: DARK }}>{post.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#7A5A5E' }}>{post.excerpt}</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t" style={{ borderColor: '#EDD8DA' }}>
                  <span className="text-xs" style={{ color: '#C4A0A3' }}>{post.readTime}</span>
                  <motion.span whileHover={{ x: 3 }}
                    className="text-xs font-medium flex items-center gap-1 transition-colors group-hover:text-[#C9626A]"
                    style={{ color: '#C4A0A3' }}>
                    Read More <ArrowUpRight size={11} />
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
