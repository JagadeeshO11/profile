import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { awards } from '../data/content'
import awardsImg  from '../assets/awards.jpeg'
import wa1 from '../assets/WhatsApp Image 2026-05-06 at 2.17.52 PM.jpeg'
import wa2 from '../assets/WhatsApp Image 2026-05-06 at 2.17.52 PM (1).jpeg'
import wa3 from '../assets/WhatsApp Image 2026-05-06 at 2.17.52 PM (2).jpeg'

const A = '#C9626A', A2 = '#E8A0A5', DARK = '#1A0A0F'
const awardImages = [awardsImg, wa1, wa2, wa3]

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
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

        {/* Success Quote Section */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-16 p-8 rounded-3xl relative overflow-hidden"
          style={{ 
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(201,98,106,0.2)',
            backdropFilter: 'blur(12px)'
          }}>
          <div className="absolute top-0 left-0 w-32 h-32 opacity-10"
            style={{ background: `radial-gradient(circle, ${A}, transparent)` }} />
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
            style={{ background: `radial-gradient(circle, ${A2}, transparent)` }} />
          
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Success:
            </h3>
            <p className="text-lg md:text-xl font-medium mb-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We show you how to achieve it better.
            </p>
            <div className="w-16 h-1 mx-auto rounded-full mb-4"
              style={{ background: `linear-gradient(90deg, ${A}, ${A2})` }} />
            <p className="text-base md:text-lg italic" style={{ color: 'rgba(255,255,255,0.7)' }}>
              "If everyone moves forward together, success will follow on its own."
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {awardImages.map((img, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.65 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImage(img)}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
              style={{ 
                boxShadow: '0 20px 60px rgba(201,98,106,0.25)',
                border: '4px solid rgba(201,98,106,0.25)',
                aspectRatio: '1',
                background: 'white',
                transition: 'all 0.4s ease'
              }}>
              
              {/* Full square image */}
              <img 
                src={img} 
                alt={`National Award ${i + 1}`} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
              />
              
              {/* Premium gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Click to view indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-6 py-3 rounded-full font-semibold text-sm text-white"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  🔍 Click to View
                </div>
              </div>
              
              {/* Golden trophy badge - top right */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full flex items-center justify-center text-4xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                style={{ 
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  boxShadow: '0 8px 24px rgba(255,215,0,0.6), inset 0 2px 4px rgba(255,255,255,0.5)',
                  border: '4px solid white'
                }}>
                🏆
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute top-6 left-6 text-3xl animate-pulse">
                ✨
              </div>
              <div className="absolute bottom-6 right-8 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>
                ⭐
              </div>
              
              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
              
              {/* Corner accent - top left */}
              <div className="absolute top-0 left-0 w-16 h-16 opacity-20"
                style={{ 
                  background: `linear-gradient(135deg, ${A}, transparent)`,
                  borderRadius: '0 0 100% 0'
                }} />
              
              {/* Corner accent - bottom right */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
                style={{ 
                  background: `linear-gradient(135deg, transparent, ${A2})`,
                  borderRadius: '100% 0 0 0'
                }} />
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

    {/* Image Lightbox Modal */}
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.95)' }}>
          
          {/* Close button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:rotate-90 z-10"
            style={{ background: A, boxShadow: '0 4px 16px rgba(201,98,106,0.4)' }}>
            <X size={28} />
          </motion.button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl">
            <img
              src={selectedImage}
              alt="Award Full View"
              className="w-full h-auto max-h-[85vh] object-contain rounded-3xl mx-auto"
              style={{ boxShadow: '0 25px 100px rgba(201,98,106,0.6)', border: '4px solid rgba(201,98,106,0.3)' }}
            />
          </motion.div>

          {/* Instructions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm px-6 py-3 rounded-full"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
            Click anywhere to close • ESC to exit
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
