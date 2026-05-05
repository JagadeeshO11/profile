import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { Mail, Phone, MapPin, Calendar, Inbox, Trash2, ArrowUpRight } from 'lucide-react'
import { brand } from '../data/content'

const A = '#C9626A', A2 = '#E8A0A5'
const STORAGE_KEY = 'coach_bookings'
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

function useBookings() {
  const [bookings, setBookings] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [] } catch { return [] }
  })
  const save = data => {
    const updated = [{ ...data, id: Date.now(), date: new Date().toLocaleString() }, ...bookings]
    setBookings(updated); localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }
  const remove = id => {
    const updated = bookings.filter(b => b.id !== id)
    setBookings(updated); localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }
  return { bookings, save, remove }
}

const inputCls = "w-full px-4 py-3.5 text-sm border outline-none transition-all focus:border-[#C9626A] placeholder-white/30"
const inputStyle = { borderColor: 'rgba(201,98,106,0.3)', color: '#ffffff', background: 'rgba(255,255,255,0.08)' }

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const { bookings, save, remove } = useBookings()
  const [showInbox, setShowInbox] = useState(false)

  const onSubmit = async data => {
    await new Promise(r => setTimeout(r, 700))
    save(data)
    toast.success("Message received! I'll be in touch within 24 hours.", {
      duration: 5000,
      style: { background: '#1A0A0F', color: '#ffffff', border: '1px solid rgba(201,98,106,0.4)', borderRadius: '4px', fontSize: '13px' },
    })
    reset()
  }

  const contactInfo = [
    { icon: Mail,     label: 'Email',    value: brand.email,   href: `mailto:${brand.email}` },
    { icon: Phone,    label: 'Phone',    value: brand.phone,   href: `tel:${brand.phone}` },
    { icon: MapPin,   label: 'Location', value: brand.location, href: '#' },
    { icon: Calendar, label: 'Schedule', value: 'Book via Calendly →', href: '#' },
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

      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto relative z-10">

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

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Info */}
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-2 space-y-7">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 border flex items-center justify-center shrink-0" style={{ borderColor: A }}>
                  <Icon size={15} style={{ color: A }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="text-sm transition-colors hover:text-[#C9626A]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {value}
                  </a>
                </div>
              </div>
            ))}
            <div className="p-5 border-l-4" style={{ borderColor: A, background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                I personally review every application and respond within 24 hours. Your information is always kept private.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-3 space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-8 border"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(201,98,106,0.25)', backdropFilter: 'blur(12px)' }}>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input placeholder="Full Name *" className={inputCls} style={inputStyle} {...register('name', { required: true })} />
                  {errors.name && <p className="text-xs mt-1" style={{ color: A2 }}>Required</p>}
                </div>
                <div>
                  <input placeholder="Email Address *" type="email" className={inputCls} style={inputStyle} {...register('email', { required: true })} />
                  {errors.email && <p className="text-xs mt-1" style={{ color: A2 }}>Required</p>}
                </div>
              </div>

              <input placeholder="Business / Company Name" className={inputCls} style={inputStyle} {...register('company')} />

              <select className={inputCls}
                style={{ ...inputStyle, background: 'rgba(26,10,15,0.6)' }}
                {...register('service', { required: true })}>
                <option value="" style={{ background: '#1A0A0F' }}>Select a Program *</option>
                <option value="coaching" style={{ background: '#1A0A0F' }}>1:1 Business Coaching</option>
                <option value="masterclass" style={{ background: '#1A0A0F' }}>Digital Skills Masterclass</option>
                <option value="freelancing" style={{ background: '#1A0A0F' }}>Freelancing Launchpad</option>
                <option value="website" style={{ background: '#1A0A0F' }}>Website Design Training</option>
                <option value="unsure" style={{ background: '#1A0A0F' }}>Not sure yet</option>
              </select>
              {errors.service && <p className="text-xs -mt-2" style={{ color: A2 }}>Please select a program</p>}

              <textarea rows={4} placeholder="Tell me about yourself and what you want to achieve *"
                className={`${inputCls} resize-none`} style={inputStyle} {...register('message', { required: true })} />
              {errors.message && <p className="text-xs -mt-2" style={{ color: A2 }}>Required</p>}

              <motion.button type="submit" disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(201,98,106,0.4)' }} whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-semibold tracking-widest uppercase text-white disabled:opacity-60"
                style={{ background: A }}>
                {isSubmitting ? 'Submitting...' : 'Request My Free Consultation'} <ArrowUpRight size={14} />
              </motion.button>

              <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>
                No commitment required · 30-minute discovery call
              </p>
            </form>

            {/* Inbox */}
            <div>
              <motion.button onClick={() => setShowInbox(v => !v)}
                whileHover={{ borderColor: A, color: A }}
                className="relative flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2.5 border transition-all"
                style={{ borderColor: 'rgba(201,98,106,0.3)', color: 'rgba(255,255,255,0.5)' }}>
                <Inbox size={13} /> View Submissions
                {bookings.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold text-white"
                    style={{ background: A }}>{bookings.length}</span>
                )}
              </motion.button>

              {showInbox && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 overflow-hidden border p-5 space-y-4"
                  style={{ borderColor: 'rgba(201,98,106,0.25)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
                  <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Submissions ({bookings.length})
                  </p>
                  {bookings.length === 0 && <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>No submissions yet.</p>}
                  {bookings.map(b => (
                    <div key={b.id} className="flex justify-between gap-4 p-4 border"
                      style={{ borderColor: 'rgba(201,98,106,0.2)', background: 'rgba(255,255,255,0.05)' }}>
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-sm font-semibold text-white">{b.name}</span>
                          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{b.email}</span>
                          <span className="text-xs px-2 py-0.5" style={{ background: 'rgba(201,98,106,0.2)', color: A }}>{b.service}</span>
                        </div>
                        <p className="text-xs break-words" style={{ color: 'rgba(255,255,255,0.55)' }}>{b.message}</p>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{b.date}</p>
                      </div>
                      <button onClick={() => remove(b.id)} className="opacity-30 hover:opacity-70 transition-opacity shrink-0">
                        <Trash2 size={14} className="text-white" />
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
