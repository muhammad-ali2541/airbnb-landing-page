'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, BedDouble, Bath, MapPin } from 'lucide-react'

const stats = [
  { icon: Users, value: '8', label: 'Guests Max', desc: 'Spacious for families & groups' },
  { icon: BedDouble, value: '4', label: 'Bedrooms', desc: 'Each with en-suite luxury' },
  { icon: Bath, value: '4', label: 'Bathrooms', desc: 'Marble-fitted, spa-inspired' },
  { icon: MapPin, value: '12km', label: 'From Town', desc: 'Peaceful yet accessible' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 bg-charcoal-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sand-500 tracking-[0.25em] uppercase text-xs font-light text-center mb-4"
        >
          At a Glance
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-sand-100 text-4xl md:text-5xl font-light text-center mb-16"
        >
          Everything You Need
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-sand-800/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i + 0.2 }}
              className="bg-charcoal-900 p-10 flex flex-col items-center text-center group hover:bg-charcoal-800 transition-colors duration-300"
            >
              <stat.icon
                size={28}
                className="text-sand-500 group-hover:text-sand-400 transition-colors mb-5"
                strokeWidth={1.5}
              />
              <span className="font-display text-5xl text-sand-200 font-light mb-1">
                {stat.value}
              </span>
              <span className="text-sand-400 text-xs tracking-[0.2em] uppercase mb-2">
                {stat.label}
              </span>
              <span className="text-sand-600 text-sm font-light leading-relaxed">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
