'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram } from 'lucide-react'

const igImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80',
  'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=400&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80',
  'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=400&q=80',
]

export default function Social() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-sand-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sand-500 tracking-[0.25em] uppercase text-xs font-light mb-4">
            Follow Along
          </p>
          <h2 className="font-display text-charcoal-900 text-4xl md:text-5xl font-light mb-4">
            Life at Villa Serenova
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sand-600 hover:text-charcoal-900 transition-colors text-sm font-light tracking-wide"
          >
            <Instagram size={16} />
            @villaserenova
          </a>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {igImages.map((url, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 + 0.2 }}
              className="relative aspect-square overflow-hidden group rounded-sm block"
            >
              <img
                src={url}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={20}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
