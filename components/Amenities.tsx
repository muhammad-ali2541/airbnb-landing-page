"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Waves,
  Flame,
  Thermometer,
  Wifi,
  Tv,
  UtensilsCrossed,
  Car,
  Mountain,
  Droplets,
  Shirt,
  ShieldCheck,
  Baby,
  Dog,
  Dumbbell,
  Lock,
  Music,
  Bath,
  TreePine,
} from "lucide-react";

const amenities = [
  { icon: Waves, label: "Private Hot Tub" },
  { icon: Thermometer, label: "Private Sauna" },
  { icon: Mountain, label: "Mountain View" },
  { icon: Flame, label: "Indoor Fireplace" },
  { icon: Wifi, label: "Fast WiFi · 60 Mbps" },
  { icon: Tv, label: '65" HDTV + Streaming' },
  { icon: UtensilsCrossed, label: "Full Kitchen" },
  { icon: Car, label: "Free Parking" },
  { icon: Droplets, label: "Outdoor Shower" },
  { icon: Shirt, label: "Washer & Dryer" },
  { icon: Dumbbell, label: "Exercise Equipment" },
  { icon: Baby, label: "Family Friendly" },
  { icon: Dog, label: "Pets Allowed" },
  { icon: ShieldCheck, label: "Security Cameras" },
  { icon: Lock, label: "Self Check-in" },
  { icon: TreePine, label: "Hammock" },
  { icon: Music, label: "Bluetooth Sound System" },
  { icon: Bath, label: "Bathtub" },
];

export default function Amenities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="amenities" className="py-28 bg-charcoal-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sand-500 tracking-[0.25em] uppercase text-xs font-light text-center mb-4">
          Included
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-sand-100 text-4xl md:text-5xl font-light text-center mb-16">
          Amenities & Comforts
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 + 0.2 }}
              className="flex flex-col items-center text-center gap-3 p-5 border border-sand-800/30 rounded-[1rem] hover:border-sand-600/50 hover:bg-white/5 transition-all duration-300 group">
              <item.icon
                size={22}
                strokeWidth={1.4}
                className="text-sand-500 group-hover:text-sand-300 transition-colors"
              />
              <span className="text-sand-400 text-xs font-light tracking-wide group-hover:text-sand-200 transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
