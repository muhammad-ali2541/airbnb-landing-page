'use client'
import { Instagram, Mail, Phone } from 'lucide-react'

const BG = "#E8EDE5";
const GREEN = "#5C6B50";
const DARK_GREEN = "#3d4836";
const SAND = "#D2B8A1";
const BLACK = "#1F1F1F";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: BG, borderTop: `1px solid ${SAND}40` }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              
              {/* Logo */}
              <div
                className="overflow-hidden rounded-full"
                style={{ width: "52px", height: "52px" }}
              >
                <img
                  src="/logo-1.png"
                  alt="Hilltop Haven logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Brand Text */}
              <div className="flex flex-col leading-none">
                <span
                  className="font-display font-semibold"
                  style={{ fontSize: "1.2rem", color: GREEN }}
                >
                  Hilltop Haven
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: BLACK,
                    marginTop: "4px",
                  }}
                >
                  Sonoma County, California
                </span>
              </div>
            </div>

            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: DARK_GREEN }}
            >
              A peaceful hilltop retreat designed for slow mornings, golden sunsets,
              and an elevated Sonoma escape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs uppercase mb-5"
              style={{
                letterSpacing: "0.2em",
                color: DARK_GREEN,
                fontWeight: 600,
              }}
            >
              Quick Links
            </p>

            <ul className="space-y-3">
              {['About', 'Gallery', 'Amenities', 'Reviews', 'Contact'].map((l) => (
                <li key={l}>
                  <button
                    onClick={() =>
                      document.getElementById(l.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-sm font-light transition-colors"
                    style={{ color: DARK_GREEN }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = DARK_GREEN)}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs uppercase mb-5"
              style={{
                letterSpacing: "0.2em",
                color: DARK_GREEN,
                fontWeight: 600,
              }}
            >
              Contact
            </p>

            <ul className="space-y-3">
              <li
                className="flex items-center gap-3 text-sm font-light"
                style={{ color: DARK_GREEN }}
              >
                <Mail size={14} strokeWidth={1.5} />
                hello@hilltophaven.com
              </li>

              <li
                className="flex items-center gap-3 text-sm font-light"
                style={{ color: DARK_GREEN }}
              >
                <Phone size={14} strokeWidth={1.5} />
                +1 (415) 312-0307
              </li>

              <li
                className="flex items-center gap-3 text-sm font-light"
                style={{ color: DARK_GREEN }}
              >
                <Instagram size={14} strokeWidth={1.5} />
                @hilltophaven
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: `1px solid ${SAND}40` }}
        >
          <p className="text-xs font-light" style={{ color: DARK_GREEN }}>
            © {new Date().getFullYear()} Hilltop Haven. All rights reserved.
          </p>

          <p className="text-xs font-light" style={{ color: DARK_GREEN }}>
            Privacy Policy · Terms of Stay
          </p>
        </div>
      </div>
    </footer>
  )
}