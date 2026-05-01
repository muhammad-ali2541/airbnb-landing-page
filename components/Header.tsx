"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Gallery", "Amenities", "Reviews", "Contact"];

const BG = "#E8EDE5";
const GREEN = "#5C6B50";
const DARK_GREEN = "#3d4836";
const SAND = "#D2B8A1";
const WHITE = "#fff";
const BLACK = "#000";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: BG,
        borderBottom: scrolled ? `1px solid ${SAND}60` : `1px solid ${SAND}30`,
        boxShadow: scrolled ? "0 2px 16px 0 rgba(92,107,80,0.08)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-[82px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
          {/* Fixed Logo */}
          <div
            className="flex-shrink-0 overflow-hidden rounded-full"
            style={{
              width: "58px",
              height: "58px",
              background: "transparent",
            }}>
            <img
              src="/logo-1.png"
              alt="Hilltop Haven logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand Text */}
          <div className="flex flex-col leading-none">
            <span
              className="font-display font-bold tracking-wide"
              style={{
                fontSize: "1.45rem",
                color: GREEN,
              }}>
              Hilltop Haven
            </span>

            <span
              className="mt-1 hidden sm:block"
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: BLACK,
                fontWeight: 500,
                paddingTop: "5px",
              }}>
              Sonoma County, California
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="transition-colors duration-200"
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: DARK_GREEN,
                fontWeight: 600,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
              onMouseLeave={(e) => (e.currentTarget.style.color = DARK_GREEN)}>
              {link}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => window.open("tel:+14153120307", "_blank")}
            className="transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
            style={{
              backgroundColor: GREEN,
              color: "#fff",
              fontSize: "0.78rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "0.95rem 1.8rem",
              borderRadius: "12px",
            }}>
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          style={{ color: GREEN }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: BG,
              borderTop: `1px solid ${SAND}50`,
            }}>
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left transition-colors"
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: DARK_GREEN,
                    fontWeight: 600,
                  }}>
                  {link}
                </button>
              ))}

              <button
                onClick={() => scrollTo("Contact")}
                className="mt-2 w-full transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: GREEN,
                  color: "#fff",
                  fontSize: "0.78rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  padding: "0.95rem 1.5rem",
                  borderRadius: "12px",
                }}>
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
