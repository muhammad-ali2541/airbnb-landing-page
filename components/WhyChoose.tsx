"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sunset,
  ShieldCheck,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

const features = [
  {
    icon: Sunset,
    title: "Panoramic Sunsets",
    desc: "Watch the hills turn golden every evening from your private terrace.",
  },
  {
    icon: Waves,
    title: "Private Heated Pool",
    desc: "An exclusive infinity pool overlooking the valley.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fully Equipped Kitchen",
    desc: "Cook comfortably with a modern chef-grade kitchen.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Fast fibre internet throughout the property.",
  },
  {
    icon: Car,
    title: "Private Parking",
    desc: "Secure on-site parking for multiple vehicles.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Secure",
    desc: "Trusted listing with safety and quality assurance.",
  },
];

const BG = "#F5F2E8";
const GREEN = "#5C6B50";
const DARK = "#1F1F1F";
const SAND = "#C8A98D";

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24" style={{ backgroundColor: BG }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-sm font-normal mb-4"
          style={{ color: DARK }}>
          Why Choose Hilltop Haven
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight mb-16 max-w-2xl mx-auto"
          style={{ color: GREEN }}>
          More Than a Place to Stay
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 + 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <f.icon
                size={26}
                strokeWidth={1.5}
                style={{ color: GREEN }}
                className="mb-5"
              />

              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: GREEN }}>
                {f.title}
              </h3>

              <p className="text-sm leading-relaxed font-medium text-gray-600">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
