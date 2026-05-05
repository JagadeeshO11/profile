import { useState, useEffect } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { ThemeProvider } from './context/ThemeContext'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Awards from './components/Awards'
import Services from './components/Services'
import Results from './components/Results'
import Partners from './components/Partners'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'

// Section bg colors — must match each section's actual background
const DARK  = '#1A0A0F'   // Hero, Awards, Services, Partners, Contact, Footer
const LIGHT = '#FDF6F7'   // About, Results, Insights

function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center shadow-lg"
          style={{ background: '#C9626A' }}>
          <ChevronUp size={18} color="#ffffff" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>Asfiya Sulthana | Business Coach & Entrepreneur</title>
          <meta name="description" content="Helping women across India become financially independent through digital skills. National Award Winner 2× | 900+ women empowered." />
        </Helmet>
        <Preloader />
        <Navbar />
        <main>
          <Hero />
          <Divider top={DARK}  bottom={LIGHT} />

          <About />
          <Divider top={LIGHT} bottom={DARK} flip />

          <Awards />
          <Divider top={DARK}  bottom={LIGHT} />

          <Services />
          <Divider top={DARK}  bottom={LIGHT} flip />

          <Results />
          <Divider top={LIGHT} bottom={DARK} />

          <Partners />

          <Insights />
          <Divider top={LIGHT} bottom={DARK} />

          <Contact />
          <Divider top={DARK}  bottom={DARK} />
        </main>

        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </HelmetProvider>
  )
}
