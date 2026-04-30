'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sunset, ShieldCheck, Wifi, Car, UtensilsCrossed, Waves } from 'lucide-react'

const features = [
  {
    icon: Sunset,
    title: 'Panoramic Sunsets',
    desc: 'Watch the Tuscan hills turn gold every evening from your private terrace.',
  },
  {
    icon: Waves,
    title: 'Private Heated Pool',
    desc: 'A 12-metre infinity pool overlooking the valley — yours exclusively.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fully Equipped Kitchen',
    desc: 'Cook like a local with a chef-grade kitchen stocked with essentials.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    desc: 'Fibre connection throughout for those who work while they wander.',
  },
  {
    icon: Car,
    title: 'Private Parking',
    desc: 'Secure gated parking for up to 4 vehicles on the property.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified & Insured',
    desc: '5-star rated, Superhost certified, fully insured for your peace of mind.',
  },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 bg-sand-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sand-500 tracking-[0.25em] uppercase text-xs font-light text-center mb-4"
        >
          Why Villa Serenova
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-charcoal-900 text-4xl md:text-5xl font-light text-center mb-16 max-w-2xl mx-auto"
        >
          More Than a Place to Stay
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className="group p-8 bg-sand-50 rounded-sm border border-sand-200 hover:border-sand-400 hover:shadow-md transition-all duration-300"
            >
              <f.icon
                size={26}
                strokeWidth={1.4}
                className="text-sand-600 group-hover:text-charcoal-900 transition-colors mb-5"
              />
              <h3 className="font-display text-xl text-charcoal-900 font-medium mb-2">
                {f.title}
              </h3>
              <p className="text-charcoal-800/60 text-sm font-light leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
