'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image via gradient placeholder (replace with real image) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80')`,
        }}
      />

      {/* Dark overlay with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-charcoal-900/30 to-charcoal-900/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-sand-300 tracking-[0.3em] uppercase text-xs font-body font-light mb-6"
        >
          Tuscany Hills, Italy
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
          className="font-display text-white text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-6 max-w-4xl"
        >
          Where Silence
          <br />
          <span className="italic text-sand-300">Becomes Luxury</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-sand-200 font-body font-light text-lg max-w-lg mb-10 leading-relaxed"
        >
          A secluded hilltop villa with panoramic views, a private pool, and all
          the warmth of Tuscan life — yours for a few precious days.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-sand-400 text-charcoal-900 text-xs tracking-[0.2em] uppercase font-medium hover:bg-sand-300 transition-colors duration-300 rounded-sm"
          >
            Reserve Your Stay
          </button>
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-sand-300/60 text-sand-100 text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors duration-300 rounded-sm"
          >
            Explore the Villa
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand-300"
      >
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
