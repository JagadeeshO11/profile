import { motion } from 'framer-motion'

/**
 * Realistic animated ocean wave divider
 * - 3 layered waves with different speeds & opacities
 * - Rose accent on the leading wave crest
 * - Foam highlight dots on wave peaks
 */
export default function Divider({ top, bottom, flip = false }) {
  const A  = '#C9626A'
  const A2 = '#F5B8BC'

  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ height: 120, background: bottom, marginTop: -1 }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <defs>
          {/* Wave 1 — back layer, slow */}
          <motion.path
            id="wave1"
            d="M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1380,80 1440,60"
          />

          {/* Glow filter for rose accent */}
          <filter id="glow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Wave 3 — back, slowest, most transparent ── */}
        <motion.path
          d="M0,70 C240,30 480,110 720,70 C960,30 1200,110 1440,70 L1440,0 L0,0 Z"
          fill={top}
          opacity="0.35"
          animate={{
            d: [
              'M0,70 C240,30 480,110 720,70 C960,30 1200,110 1440,70 L1440,0 L0,0 Z',
              'M0,55 C240,95 480,25 720,55 C960,95 1200,25 1440,55 L1440,0 L0,0 Z',
              'M0,70 C240,30 480,110 720,70 C960,30 1200,110 1440,70 L1440,0 L0,0 Z',
            ],
          }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        />

        {/* ── Wave 2 — mid layer ── */}
        <motion.path
          d="M0,80 C200,40 400,110 600,75 C800,40 1000,105 1200,70 C1320,50 1400,85 1440,75 L1440,0 L0,0 Z"
          fill={top}
          opacity="0.6"
          animate={{
            d: [
              'M0,80 C200,40 400,110 600,75 C800,40 1000,105 1200,70 C1320,50 1400,85 1440,75 L1440,0 L0,0 Z',
              'M0,60 C200,100 400,30 600,65 C800,100 1000,35 1200,60 C1320,80 1400,45 1440,55 L1440,0 L0,0 Z',
              'M0,80 C200,40 400,110 600,75 C800,40 1000,105 1200,70 C1320,50 1400,85 1440,75 L1440,0 L0,0 Z',
            ],
          }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />

        {/* ── Wave 1 — front, fastest, full opacity ── */}
        <motion.path
          d="M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82 L1440,0 L0,0 Z"
          fill={top}
          animate={{
            d: [
              'M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82 L1440,0 L0,0 Z',
              'M0,65 C160,100 320,40 480,68 C640,100 800,40 960,68 C1120,100 1300,50 1440,68 L1440,0 L0,0 Z',
              'M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82 L1440,0 L0,0 Z',
            ],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />

        {/* ── Rose accent crest line on front wave ── */}
        <motion.path
          d="M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82"
          fill="none"
          stroke={A}
          strokeWidth="2.5"
          opacity="0.85"
          filter="url(#glow)"
          animate={{
            d: [
              'M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82',
              'M0,65 C160,100 320,40 480,68 C640,100 800,40 960,68 C1120,100 1300,50 1440,68',
              'M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82',
            ],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />

        {/* ── Foam highlight on crest ── */}
        <motion.path
          d="M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82"
          fill="none"
          stroke={A2}
          strokeWidth="0.8"
          opacity="0.6"
          animate={{
            d: [
              'M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82',
              'M0,65 C160,100 320,40 480,68 C640,100 800,40 960,68 C1120,100 1300,50 1440,68',
              'M0,85 C160,50 320,110 480,80 C640,50 800,110 960,80 C1120,50 1300,100 1440,82',
            ],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />

        {/* ── Foam dots at wave crests ── */}
        {[120, 360, 600, 840, 1080, 1320].map((cx, i) => (
          <motion.circle
            key={i}
            cx={cx}
            r="3"
            fill={A2}
            opacity="0.55"
            animate={{
              cy: [50, 100, 50],
              opacity: [0.55, 0.2, 0.55],
              r: [3, 1.5, 3],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'easeInOut',
              delay: i * 0.15,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
