"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.png')`, // replace with your new image
        }}
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Soft warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 sm:px-8 lg:px-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 max-w-5xl">
          Mountain Views
          <br />
          <span className="italic text-sand-300">& Peaceful Escape</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-sand-100 font-body font-light text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          Escape to our private Forestville retreat featuring an outdoor
          infrared sauna, hot tub under the stars, mountain views, fast WiFi,
          and a fully equipped kitchen — the perfect stay for relaxation and
          renewal.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Button 1 → Airbnb Listing */}
          <button
            onClick={() =>
              window.open(
                "https://www.airbnb.com/rooms/54406644?source_impression_id=p3_1777638177_P3aClRlKrHT55Hj2",
                "_blank",
              )
            }
            className="px-8 sm:px-10 py-4 bg-sand-400 text-charcoal-900 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-sand-300 transition-colors duration-300 rounded-md w-full sm:w-auto">
            Book Your Stay
          </button>

          {/* Button 2 → Contact Form */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 sm:px-10 py-4 border border-sand-300/70 text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white/10 transition-colors duration-300 rounded-md w-full sm:w-auto">
            Contact Host
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand-300">
        <span className="text-[10px] sm:text-xs tracking-widest uppercase font-light">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
