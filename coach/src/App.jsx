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
import Results from './components/Results'
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
          <title>Asfiya Sulthana | Business Coach & Entrepreneur | Empowering 900+ Women</title>
          <meta name="description" content="Asfiya Sulthana - 4× National Award Winner helping 900+ women achieve financial independence through digital skills. Business Coach, Entrepreneur & Digital Skills Mentor in Hyderabad, India." />
          
          {/* Keywords */}
          <meta name="keywords" content="Asfiya Sulthana, business coach, women empowerment, digital skills training, freelancing mentor, financial independence, Hyderabad coach, national award winner, entrepreneur mentor, Facebook ads training, graphic design course, video editing training, social media management" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://asfiyasulthana.com/" />
          <meta property="og:title" content="Asfiya Sulthana | Business Coach & Entrepreneur" />
          <meta property="og:description" content="4× National Award Winner helping 900+ women achieve financial independence through digital skills. Join the movement of independent women." />
          <meta property="og:image" content="https://asfiyasulthana.com/og-image.jpg" />
          <meta property="og:locale" content="en_IN" />
          <meta property="og:site_name" content="Asfiya Sulthana" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://asfiyasulthana.com/" />
          <meta name="twitter:title" content="Asfiya Sulthana | Business Coach & Entrepreneur" />
          <meta name="twitter:description" content="4× National Award Winner helping 900+ women achieve financial independence through digital skills." />
          <meta name="twitter:image" content="https://asfiyasulthana.com/twitter-image.jpg" />
          
          {/* Additional SEO */}
          <meta name="author" content="Asfiya Sulthana" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <link rel="canonical" href="https://asfiyasulthana.com/" />
          
          {/* Geo Tags */}
          <meta name="geo.region" content="IN-TG" />
          <meta name="geo.placename" content="Hyderabad" />
          <meta name="geo.position" content="17.385044;78.486671" />
          <meta name="ICBM" content="17.385044, 78.486671" />
          
          {/* Language */}
          <meta httpEquiv="content-language" content="en-IN" />
          
          {/* Mobile */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#C9626A" />
          
          {/* Structured Data - JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Asfiya Sulthana",
              "url": "https://asfiyasulthana.com",
              "image": "https://asfiyasulthana.com/asfiya-sulthana.jpg",
              "jobTitle": "Business Coach & Entrepreneur",
              "worksFor": {
                "@type": "Organization",
                "name": "Digital Empowerment Platform"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "email": "asfiyasulthana.work@gmail.com",
              "telephone": "+919963115040",
              "sameAs": [
                "https://www.facebook.com/share/18jHxmunh6/",
                "https://www.youtube.com/@AsfiyaSulthana_01",
                "https://www.instagram.com/"
              ],
              "award": "National Award Winner - 4 Times",
              "description": "Business Coach & Entrepreneur empowering 900+ women to become financially independent through digital skills."
            })}
          </script>
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

          <Results />
          <Divider top={LIGHT} bottom={DARK} />

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
