'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = ['About', 'Gallery', 'Amenities', 'Reviews', 'Contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sand-50/95 backdrop-blur-md shadow-sm border-b border-sand-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-wide text-charcoal-900">
            Villa Serenova
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-sand-600 font-body font-light mt-0.5">
            Luxury Retreat
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm tracking-widest uppercase text-charcoal-800 hover:text-sand-600 transition-colors duration-200 font-light"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo('Contact')}
            className="px-6 py-2.5 bg-charcoal-900 text-sand-50 text-xs tracking-[0.15em] uppercase font-medium hover:bg-sand-600 transition-colors duration-300 rounded-sm"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-sand-50 border-t border-sand-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-sm tracking-widest uppercase text-charcoal-800 hover:text-sand-600 transition-colors"
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => scrollTo('Contact')}
                className="mt-2 px-6 py-3 bg-charcoal-900 text-sand-50 text-xs tracking-[0.15em] uppercase font-medium w-full rounded-sm"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
