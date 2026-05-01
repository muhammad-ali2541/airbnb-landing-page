"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BedDouble, Bed, Bath } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "4",
    label: "Guests",
    desc: "Perfect for couples, families & peaceful getaways",
  },
  {
    icon: BedDouble,
    value: "2",
    label: "Bedrooms",
    desc: "Comfortable private rooms designed for restful stays",
  },
  {
    icon: Bed,
    value: "3",
    label: "Beds",
    desc: "Thoughtfully arranged for comfort and flexibility",
  },
  {
    icon: Bath,
    value: "1",
    label: "Bath",
    desc: "Clean, modern bathroom with essential amenities",
  },
];

const BG = "#F5F2E8";
const GREEN = "#5C6B50";
const DARK = "#1F1F1F";
const SAND = "#C8A98D";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-sm font-normal mb-4"
          style={{ color: DARK }}>
          At A Glance
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight mb-16"
          style={{ color: GREEN }}>
          Everything You Need
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.1,
                delay: 0.05 * i + 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl bg-white p-10 text-center shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center">
                {/* Icon */}
                <stat.icon
                  size={30}
                  strokeWidth={1.6}
                  style={{ color: GREEN }}
                  className="mb-5"
                />

                {/* Number */}
                <span
                  className="text-5xl font-medium mb-2"
                  style={{ color: GREEN }}>
                  {stat.value}
                </span>

                {/* Label */}
                <span
                  className="uppercase tracking-[0.22em] text-sm font-semibold mb-5"
                  style={{ color: SAND }}>
                  {stat.label}
                </span>

                {/* Description */}
                <p
                  className="text-base leading-relaxed font-medium"
                  style={{ color: "#3A3A3A" }}>
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
