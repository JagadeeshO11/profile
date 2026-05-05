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
              <motion.div whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(201,98,106,0.15)' }}
                transition={{ duration: 0.3 }}
                className="p-6 border h-full flex flex-col bg-white"
                style={{ borderColor: '#EDD8DA' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm border-2 shrink-0"
                    style={{ background: '#FDF6F7', color: A, borderColor: '#EDD8DA' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: DARK }}>{t.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#C4A0A3' }}>{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={12} fill={A} style={{ color: A }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#7A5A5E' }}>"{t.quote}"</p>
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
