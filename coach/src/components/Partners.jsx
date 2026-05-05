import { motion } from 'framer-motion'

const A = '#C9626A'
const platforms = ['Meta Business', 'Canva Pro', 'YouTube', 'Instagram', 'LinkedIn', 'Fiverr', 'Upwork', 'Freelancer', 'Facebook Ads', 'Video Editing']

export default function Partners() {
  const doubled = [...platforms, ...platforms]
  return (
    <section className="py-14 overflow-hidden relative">
      {/* DARK section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'rgba(26,10,15,0.88)' }} />
      </div>

      <div className="relative z-10">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase mb-8" style={{ color: 'rgba(201,98,106,0.8)' }}>
          Platforms & Skills We Teach
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(26,10,15,0.9), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(26,10,15,0.9), transparent)' }} />
          <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
            className="flex gap-4 w-max">
            {doubled.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2.5 border shrink-0"
                style={{ borderColor: 'rgba(201,98,106,0.25)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)' }}>
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{p}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
