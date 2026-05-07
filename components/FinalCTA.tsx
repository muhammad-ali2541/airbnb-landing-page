"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-36 overflow-hidden"
      ref={ref}
      style={{
        backgroundImage: `url('/CTA.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="absolute inset-0 bg-charcoal-900/65" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sand-300 tracking-[0.3em] uppercase text-xs font-light mb-6">
          Limited Availability
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-sand-50 text-5xl md:text-7xl font-light leading-tight mb-6">
          A Quiet Escape Above
          <br />
          <span className="italic text-sand-300">Sonoma</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sand-300 font-light text-lg mb-10 leading-relaxed">
          Peak dates fill quickly. Enquire now to reserve your stay at Hilltop
          Haven.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-12 py-5 bg-sand-400 text-charcoal-900 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-sand-300 transition-colors duration-300 rounded-[1rem]">
            Check Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
}
