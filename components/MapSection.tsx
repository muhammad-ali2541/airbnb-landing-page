"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Wine,
  Utensils,
  ShoppingBag,
  TreePine,
  Clock,
} from "lucide-react";

const GREEN = "#5C6B50";
const DARK = "#1F1F1F";

// Sonoma County, CA coordinates for Hilltop Haven (illustrative)
const LAT = 38.2919;
const LNG = -122.458;

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50168.96!2d${LNG}!3d${LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085a7f10fc20f5d%3A0x98e8d3d4fea57b5d!2sSonoma%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;

const nearby = [
  {
    icon: Wine,
    label: "Sonoma Plaza",
    detail: "12 min drive",
    desc: "World-class tasting rooms & restaurants",
  },
  {
    icon: TreePine,
    label: "Jack London State Park",
    detail: "18 min drive",
    desc: "Scenic hiking trails through redwoods",
  },
  {
    icon: Utensils,
    label: "The Girl & The Fig",
    detail: "14 min drive",
    desc: "Iconic farm-to-table Sonoma dining",
  },
  {
    icon: Wine,
    label: "Benziger Winery",
    detail: "8 min drive",
    desc: "Biodynamic estate & vineyard tours",
  },
  {
    icon: ShoppingBag,
    label: "Sonoma Market",
    detail: "10 min drive",
    desc: "Local produce, deli & specialty goods",
  },
];

export default function MapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28" style={{ backgroundColor: "#faf8f3" }} id="location" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-base font-normal text-center mb-4"
          style={{ color: DARK }}>
          Location
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight text-center mb-4"
          style={{ color: GREEN }}>
          Perfectly Placed in Sonoma
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm font-light mb-16 max-w-lg mx-auto"
          style={{ color: "#C8A98D" }}>
          Tucked into the hills of Sonoma County — secluded enough for total
          peace, close enough to explore everything wine country has to offer.
        </motion.p>

        {/* Map + Nearby grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Map embed — takes 3/5 width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm"
            style={{ border: "1px solid #e8e0d4", height: "460px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.763578866996!2d-122.90730097192358!3d38.49309698030586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808423005dfa49dd%3A0x9baa9234d2ee27da!2sHilltop%20Haven%20%F0%9F%8C%85!5e0!3m2!1sen!2s!4v1777708130065!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.7) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hilltop Haven location map"
            />
          </motion.div>

          {/* Nearby places — takes 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 flex flex-col gap-3">
            {/* Address pill */}
            <div
              className="flex items-center gap-3 rounded-2xl px-5 py-4 mb-1"
              style={{ backgroundColor: "#fff", border: "1px solid #e8e0d4" }}>
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: GREEN }}>
                <MapPin size={15} color="#fff" />
              </span>
              <div>
                <p className="text-sm font-medium" style={{ color: DARK }}>
                  Hilltop Haven
                </p>
                <p className="text-xs font-light" style={{ color: "#C8A98D" }}>
                  Sonoma County, California, USA
                </p>
              </div>
            </div>

            {/* Nearby cards */}
            {nearby.map((place, i) => (
              <motion.div
                key={place.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200 hover:shadow-md"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e8e0d4",
                }}>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EDE4D8" }}>
                  <place.icon size={14} color={GREEN} />
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: DARK }}>
                    {place.label}
                  </p>
                  <p
                    className="text-xs font-light truncate"
                    style={{ color: `${DARK}80` }}>
                    {place.desc}
                  </p>
                </div>
                <span
                  className="text-xs font-medium flex-shrink-0 px-2 py-1 rounded-lg"
                  style={{ backgroundColor: "#F5F2E8", color: GREEN }}>
                  {place.detail}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
