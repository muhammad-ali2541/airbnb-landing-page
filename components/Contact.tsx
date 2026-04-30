'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', dates: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Please tell us about your stay'
    return e
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const inputBase =
    'w-full bg-transparent border border-sand-300 rounded-sm px-4 py-3.5 text-sm text-charcoal-900 placeholder:text-sand-400 focus:outline-none focus:border-charcoal-900 transition-colors duration-200'

  return (
    <section id="contact" className="py-28 bg-charcoal-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sand-500 tracking-[0.25em] uppercase text-xs font-light mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-sand-100 text-4xl md:text-5xl font-light">
            Plan Your Stay
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-5 text-center py-16"
          >
            <CheckCircle size={48} className="text-sand-400" strokeWidth={1.2} />
            <h3 className="font-display text-sand-200 text-3xl font-light">
              Thank you, {form.name.split(' ')[0]}!
            </h3>
            <p className="text-sand-500 font-light">
              We'll be in touch within 24 hours to confirm your dates.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-sand-50 rounded-sm p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <input
                  className={inputBase}
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              {/* Email */}
              <div>
                <input
                  className={inputBase}
                  placeholder="Email address"
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              {/* Dates */}
              <div className="md:col-span-2">
                <input
                  className={inputBase}
                  placeholder="Preferred dates (e.g. Aug 10 – Aug 17, 2025)"
                  value={form.dates}
                  onChange={e => setForm({ ...form, dates: e.target.value })}
                />
              </div>
              {/* Message */}
              <div className="md:col-span-2">
                <textarea
                  className={`${inputBase} resize-none h-32`}
                  placeholder="Tell us about your group, any special requests..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-10 py-4 bg-charcoal-900 text-sand-50 text-xs tracking-[0.2em] uppercase font-medium hover:bg-sand-600 transition-colors duration-300 rounded-sm"
              >
                Send Enquiry
                <Send size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
