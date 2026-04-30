'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  { url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80', alt: 'Pool View', span: 'lg:col-span-2 lg:row-span-2' },
  { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', alt: 'Master Bedroom', span: '' },
  { url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80', alt: 'Bathroom', span: '' },
  { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Kitchen', span: '' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Terrace', span: '' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="py-28 bg-sand-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sand-500 tracking-[0.25em] uppercase text-xs font-light text-center mb-4"
        >
          Visual Tour
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-charcoal-900 text-4xl md:text-5xl font-light text-center mb-16"
        >
          The Villa in Every Light
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className={`relative overflow-hidden group rounded-sm ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-sand-100 text-xs tracking-widest uppercase font-light">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
