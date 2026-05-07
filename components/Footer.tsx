"use client";
import { Instagram, Mail, Phone, Map, Facebook } from "lucide-react";

const BG = "#E8EDE5";
const GREEN = "#5C6B50";
const DARK_GREEN = "#3d4836";
const SAND = "#D2B8A1";
const BLACK = "#1F1F1F";

// Simple Airbnb SVG icon
function AirbnbIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2C9 7 5 9.5 5 13a7 7 0 0 0 14 0c0-3.5-4-6-7-11z" />
      <path d="M12 2c3 5 7 7.5 7 11a7 7 0 0 1-14 0c0-3.5 4-6 7-11z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: BG, borderTop: `1px solid ${SAND}40` }}
      className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="overflow-hidden rounded-full"
                style={{ width: "52px", height: "52px" }}>
                <img
                  src="/logo-1.png"
                  alt="Hilltop Haven logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-display font-semibold"
                  style={{ fontSize: "1.2rem", color: GREEN }}>
                  Hilltop Haven
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: BLACK,
                    marginTop: "4px",
                  }}>
                  Sonoma County, California
                </span>
              </div>
            </div>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: DARK_GREEN }}>
              A peaceful hilltop retreat thoughtfully designed for slow
              mornings, breathtaking golden sunsets, cozy evenings, and a truly
              elevated Sonoma County escape surrounded by comfort, nature, and
              unforgettable memories.
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
              }}>
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                "About",
                "Gallery",
                "Amenities",
                "Reviews",
                "FAQ",
                "Location",
                "Contact",
              ].map((l) => (
                <li key={l}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(l.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm font-light transition-colors"
                    style={{ color: DARK_GREEN }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = DARK_GREEN)
                    }>
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
              }}>
              Contact
            </p>
            <ul className="space-y-3">
              {/* <li
                className="flex items-center gap-3 text-sm font-light"
                style={{ color: DARK_GREEN }}>
                <Mail size={14} strokeWidth={1.5} />
                <a href="mailto:elipoint@gmail.com" className="hover:underline">
                  elipoint@gmail.com
                </a>
              </li> */}

              <li
                className="flex items-center gap-3 text-sm font-light"
                style={{ color: DARK_GREEN }}>
                <Phone size={14} strokeWidth={1.5} />
                <a href="tel:+14153120307" className="hover:underline">
                  +1 415 312 0307
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hilltop_haven_vacation?igsh=MXd5eWc4eXR1bGprbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors"
                  style={{ color: DARK_GREEN }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = DARK_GREEN)
                  }>
                  <Instagram size={14} strokeWidth={1.5} />
                  @hilltop_haven_vacation
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1KNwErJqFD/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors"
                  style={{ color: DARK_GREEN }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = DARK_GREEN)
                  }>
                  <Facebook size={14} strokeWidth={1.5} />
                  Hilltop Haven - Russian River Stay
                </a>
              </li>
              <li>
                <a
                  href="https://www.airbnb.com/rooms/54406644?source_impression_id=p3_1777638177_P3aClRlKrHT55Hj2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors"
                  style={{ color: DARK_GREEN }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = DARK_GREEN)
                  }>
                  <AirbnbIcon size={14} />
                  Book on Airbnb
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/GyhWouZfrfApZCwC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-light transition-colors"
                  style={{ color: DARK_GREEN }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = DARK_GREEN)
                  }>
                  <Map size={14} strokeWidth={1.5} />
                  8791 Vila Road, Forestville, CA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar — centered copyright, reduced padding */}
        <div
          className="pt-5 pb-1 flex justify-center"
          style={{ borderTop: `1px solid ${SAND}40` }}>
          <p className="text-sm font-light" style={{ color: DARK_GREEN }}>
            © {new Date().getFullYear()} Hilltop Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
