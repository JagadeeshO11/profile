import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { testimonials } from '../data/content'

const A = '#C9626A', A2 = '#E8A0A5', DARK = '#1A0A0F'
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

export default function Results() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section id="results" className="py-24 px-6 relative overflow-hidden">
      {/* LIGHT section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'rgba(253,246,247,0.88)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: A }}>
            <span className="w-5 h-px" style={{ background: A }} /> Testimonials <span className="w-5 h-px" style={{ background: A }} />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2" style={{ color: DARK }}>
            What Our <span style={{ background: `linear-gradient(135deg,${A},${A2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Clients Say</span>
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24} loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.swiper-dots' }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={s => { s.params.navigation.prevEl = prevRef.current; s.params.navigation.nextEl = nextRef.current }}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-14">
          {testimonials.map(t => (
            <SwiperSlide key={t.id}>
              <motion.div 
                whileHover={{ y: -12, boxShadow: '0 32px 64px rgba(201,98,106,0.25)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative p-10 h-full flex flex-col bg-white overflow-hidden"
                style={{ 
                  borderRadius: '32px',
                  minHeight: '480px',
                  boxShadow: '0 8px 32px rgba(201,98,106,0.12), 0 2px 8px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(201,98,106,0.1)'
                }}>
                
                {/* Premium gradient overlays */}
                <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.07]"
                  style={{ 
                    background: `radial-gradient(circle at top right, ${A}, ${A2}, transparent)`,
                    filter: 'blur(40px)'
                  }} />
                <div className="absolute bottom-0 left-0 w-40 h-40 opacity-[0.05]"
                  style={{ 
                    background: `radial-gradient(circle at bottom left, ${A2}, transparent)`,
                    filter: 'blur(30px)'
                  }} />
                
                {/* Avatar Section - Premium Design */}
                <div className="flex items-start gap-5 mb-7 relative z-10">
                  <div className="relative group">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: `linear-gradient(135deg, ${A}, ${A2})`,
                        filter: 'blur(12px)',
                        transform: 'scale(1.1)'
                      }} />
                    
                    {/* Main avatar container */}
                    <div className="relative w-24 h-24 rounded-3xl flex items-center justify-center text-6xl shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        background: 'linear-gradient(135deg, #FFF5F7, #FFE8EC)',
                        boxShadow: '0 8px 24px rgba(201,98,106,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                        border: '2px solid rgba(255,255,255,0.8)'
                      }}>
                      🧕
                    </div>
                    
                    {/* Premium decorative elements */}
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${A}, ${A2})`,
                        border: '3px solid white',
                        boxShadow: '0 4px 12px rgba(201,98,106,0.3)'
                      }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    
                    {/* Sparkle effect */}
                    <div className="absolute -top-1 -right-1 text-xl animate-pulse">✨</div>
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <p className="font-bold text-lg mb-1.5" style={{ 
                      color: DARK,
                      letterSpacing: '-0.02em'
                    }}>{t.name}</p>
                    <p className="text-sm font-medium" style={{ 
                      color: A,
                      letterSpacing: '0.01em'
                    }}>{t.role}</p>
                  </div>
                </div>

                {/* Premium Star Rating */}
                <div className="flex gap-2 mb-6 relative z-10">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                      className="relative">
                      <Star 
                        size={20} 
                        fill="#FFD700" 
                        style={{ 
                          color: '#FFD700',
                          filter: 'drop-shadow(0 2px 6px rgba(255,215,0,0.4))'
                        }} 
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text - Premium Typography */}
                <div className="flex-1 mb-6 relative z-10">
                  <div className="absolute -left-2 top-0 text-6xl opacity-[0.06]" style={{ color: A }}>“</div>
                  <p className="text-[15px] leading-[1.75] font-medium relative" style={{ 
                    color: '#4A2F32',
                    letterSpacing: '-0.01em'
                  }}>
                    {t.quote}
                  </p>
                  <div className="absolute -right-2 bottom-0 text-6xl opacity-[0.06]" style={{ color: A }}>”</div>
                </div>

                {/* Premium bottom accent */}
                <div className="relative z-10 mt-auto">
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(201,98,106,0.08)' }}>
                    <motion.div 
                      className="h-full rounded-full"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      style={{ 
                        background: `linear-gradient(90deg, ${A}, ${A2})`,
                        boxShadow: `0 0 12px ${A}80`
                      }} 
                    />
                  </div>
                </div>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                  style={{ 
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-5 mt-2">
          <button ref={prevRef} className="w-11 h-11 border flex items-center justify-center transition-all hover:border-[#C9626A] hover:text-[#C9626A]"
            style={{ borderColor: '#EDD8DA', color: '#C4A0A3' }}>
            <ArrowLeft size={16} />
          </button>
          <div className="swiper-dots flex gap-2" />
          <button ref={nextRef} className="w-11 h-11 border flex items-center justify-center transition-all hover:border-[#C9626A] hover:text-[#C9626A]"
            style={{ borderColor: '#EDD8DA', color: '#C4A0A3' }}>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .swiper-dots .swiper-pagination-bullet{width:8px;height:8px;border-radius:50%;background:rgba(201,98,106,0.25);cursor:pointer;transition:all .3s;}
        .swiper-dots .swiper-pagination-bullet-active{background:#C9626A;width:24px;border-radius:4px;}
      `}</style>
    </section>
  )
}
