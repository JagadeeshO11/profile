import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { MapPin, Phone, Mail } from 'lucide-react'
import { brand } from '../data/content'

const A = '#C9626A', DARK = '#1A0A0F'

const InstagramIcon = () => (<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>)
const LinkedinIcon  = () => (<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>)
const FacebookIcon  = () => (<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>)
const YoutubeIcon   = () => (<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>)
const WhatsappIcon  = () => (<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>)

const navLinks = [
  { to: 'about', label: 'About' }, { to: 'services', label: 'Programs' },
  { to: 'results', label: 'Testimonials' }, { to: 'insights', label: 'Insights' },
  { to: 'contact', label: 'Contact' },
]
const socials = [
  { icon: FacebookIcon, href: brand.facebook }, { icon: InstagramIcon, href: brand.instagram },
  { icon: WhatsappIcon, href: brand.whatsapp }, { icon: LinkedinIcon, href: brand.linkedin },
  { icon: YoutubeIcon, href: brand.youtube },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(201,98,106,0.15)' }}>
      {/* Dark bg image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'rgba(26,10,15,0.96)' }} />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="space-y-5">
            <h3 className="font-serif text-2xl font-bold text-white">
              Asfiya<span style={{ color: A }}> Sulthana</span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Helping women across India become financially independent through digital skills. Alhamdulillah.
            </p>
            <ul className="space-y-3">
              {[{ icon: MapPin, text: brand.location }, { icon: Phone, text: brand.phone, href: `tel:${brand.phone}` }, { icon: Mail, text: brand.email, href: `mailto:${brand.email}` }].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={13} className="mt-0.5 shrink-0" style={{ color: A }} />
                  {href ? <a href={href} className="text-sm transition-colors hover:text-[#C9626A]" style={{ color: 'rgba(255,255,255,0.4)' }}>{text}</a>
                        : <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{text}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: A }}>Menu</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map(l => (
                <li key={l.to}>
                  <Link to={l.to} smooth duration={700} offset={-80}
                    className="text-sm cursor-pointer transition-colors hover:text-[#C9626A]"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: A }}>Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.slice(3).map(l => (
                <li key={l.to}>
                  <Link to={l.to} smooth duration={700} offset={-80}
                    className="text-sm cursor-pointer transition-colors hover:text-[#C9626A]"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: A }}>Follow Us</h4>
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a key={i} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ y: -3, borderColor: A, color: A }}
                  className="w-9 h-9 border flex items-center justify-center transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.35)' }}>
                  <Icon />
                </motion.a>
              ))}
            </div>
            <Link to="contact" smooth duration={700} offset={-80}>
              <motion.button whileHover={{ scale: 1.03, background: A, color: '#ffffff' }} whileTap={{ scale: 0.97 }}
                className="mt-5 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-all"
                style={{ borderColor: 'rgba(201,98,106,0.4)', color: A }}>
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>Made with ♥ for women's empowerment</p>
        </div>
      </div>
    </footer>
  )
}
