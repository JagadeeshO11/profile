import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { brand } from '../data/content'

const A = '#C9626A', A2 = '#E8A0A5'
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

export default function Contact() {
  const handleWhatsAppClick = () => {
    const phones = ['+919963115040', '+917396069658']
    const phone = phones[Math.floor(Math.random() * phones.length)]
    const msg = 'Hello Asfiya Ma\'am, I would like to book a free consultation with you.'
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const contactInfo = [
    { icon: Mail,   label: 'Email',    value: brand.email,   href: `mailto:${brand.email}` },
    { icon: Phone,  label: 'Phone 1',  value: '+91 99631 15040',   href: 'tel:+919963115040' },
    { icon: Phone,  label: 'Phone 2',  value: '+91 73960 69658',   href: 'tel:+917396069658' },
    { icon: MapPin, label: 'Location', value: brand.location, href: '#' },
  ]

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* DARK section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'rgba(26,10,15,0.87)' }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(201,98,106,0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px', opacity: 0.05,
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: A }}>
            <span className="w-5 h-px" style={{ background: A }} /> Let's Connect <span className="w-5 h-px" style={{ background: A }} />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-white">
            Book Your{' '}
            <span style={{ background: `linear-gradient(135deg,${A},${A2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Free Consultation
            </span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A 30-minute call to explore where you are, where you want to be, and whether we're the right fit.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">

          {/* Contact Info */}
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="flex flex-col items-center text-center p-5 border transition-all hover:border-[#C9626A] hover:bg-white/5"
                style={{ borderColor: 'rgba(201,98,106,0.25)', background: 'rgba(255,255,255,0.03)' }}>
                <div className="w-11 h-11 border flex items-center justify-center mb-3 shrink-0" style={{ borderColor: A }}>
                  <Icon size={16} style={{ color: A }} />
                </div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
                <p className="text-xs font-medium break-words w-full" style={{ color: 'rgba(255,255,255,0.75)' }}>{value}</p>
              </a>
            ))}
          </motion.div>

          {/* WhatsApp Button */}
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center">
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(37,211,102,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 text-base font-bold tracking-wide text-white rounded-full transition-all"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
              <MessageCircle size={24} />
              Book Free Consultation on WhatsApp
            </motion.button>
            <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              No commitment required · 30-minute discovery call · Instant response
            </p>
          </motion.div>

          {/* Info Box */}
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-10 p-6 border-l-4" style={{ borderColor: A, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              I personally review every message and respond within 24 hours. Your information is always kept private.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
