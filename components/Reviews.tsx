'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    rating: 5,
    text: 'Absolutely breathtaking. The sunsets from the terrace were unlike anything I\'ve ever seen. We didn\'t want to leave. We\'ll be back every year.',
    date: 'September 2024',
    initials: 'SM',
  },
  {
    name: 'Marco & Giulia',
    location: 'Milan, Italy',
    rating: 5,
    text: 'The villa exceeded every expectation. Immaculate, peaceful, and the pool is simply magical. The host was incredibly attentive without being intrusive.',
    date: 'August 2024',
    initials: 'MG',
  },
  {
    name: 'James R.',
    location: 'New York, USA',
    rating: 5,
    text: 'We hosted a family reunion here — 8 of us — and it was seamless. Plenty of space, great kitchen, and the most stunning backdrop imaginable.',
    date: 'July 2024',
    initials: 'JR',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#cdb590" stroke="none" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="reviews" className="py-28 bg-sand-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sand-500 tracking-[0.25em] uppercase text-xs font-light mb-4">
            Guest Reviews
          </p>
          <h2 className="font-display text-charcoal-900 text-4xl md:text-5xl font-light mb-6">
            Loved by Every Guest
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Stars count={5} />
            <span className="font-display text-3xl text-charcoal-900 font-light">4.98</span>
            <span className="text-sand-600 text-sm font-light">· 74 reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
              className="bg-white border border-sand-200 rounded-sm p-8 flex flex-col gap-5"
            >
              <Stars count={r.rating} />
              <p className="text-charcoal-800/70 text-sm font-light leading-relaxed italic flex-1">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-sand-100">
                <div className="w-9 h-9 rounded-full bg-sand-200 flex items-center justify-center text-xs font-medium text-charcoal-800">
                  {r.initials}
                </div>
                <div>
                  <p className="text-charcoal-900 text-sm font-medium">{r.name}</p>
                  <p className="text-sand-500 text-xs">{r.location} · {r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
