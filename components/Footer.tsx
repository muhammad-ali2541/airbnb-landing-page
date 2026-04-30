'use client'
import { Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-sand-800/30 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl text-sand-200 font-light mb-1">
              Villa Serenova
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-sand-600 mb-4">
              Tuscany Hills, Italy
            </p>
            <p className="text-sand-500 text-sm font-light leading-relaxed">
              A luxury hilltop retreat for discerning travellers seeking beauty,
              peace, and the authentic warmth of Tuscany.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sand-300 text-xs tracking-[0.2em] uppercase mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {['About', 'Gallery', 'Amenities', 'Reviews', 'Contact'].map((l) => (
                <li key={l}>
                  <button
                    onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sand-500 hover:text-sand-300 text-sm font-light transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sand-300 text-xs tracking-[0.2em] uppercase mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sand-500 text-sm font-light">
                <Mail size={14} strokeWidth={1.5} />
                hello@villaserenova.com
              </li>
              <li className="flex items-center gap-3 text-sand-500 text-sm font-light">
                <Phone size={14} strokeWidth={1.5} />
                +39 055 000 1234
              </li>
              <li className="flex items-center gap-3 text-sand-500 text-sm font-light">
                <Instagram size={14} strokeWidth={1.5} />
                @villaserenova
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand-800/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sand-700 text-xs font-light">
            © {new Date().getFullYear()} Villa Serenova. All rights reserved.
          </p>
          <p className="text-sand-700 text-xs font-light">
            Privacy Policy · Terms of Stay
          </p>
        </div>
      </div>
    </footer>
  )
}
