"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    alt: "Pool View",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    alt: "Master Bedroom",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80",
    alt: "Bathroom",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Kitchen",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Terrace",
    span: "",
  },

  // Extra images for View More
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    alt: "Living Room",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    alt: "Dining Area",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80",
    alt: "Outdoor Seating",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    alt: "Luxury Bedroom",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    alt: "Garden View",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
    alt: "Balcony Sunset",
    span: "",
  },

  // More images for second View More
  {
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    alt: "Cozy Lounge",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    alt: "Elegant Interior",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    alt: "Relaxing Patio",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80",
    alt: "Private Entrance",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    alt: "Nature Walk",
    span: "",
  },
];

const INITIAL_COUNT = 5;
const LOAD_MORE_COUNT = 6;

const GREEN = "#5C6B50";
const DARK = "#1F1F1F";
const SAND = "#C8A98D";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleImages = images.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, images.length));
  };

  const handleViewLess = () => {
    setVisibleCount((prev) => Math.max(prev - LOAD_MORE_COUNT, INITIAL_COUNT));
  };

  return (
    <section
      id="gallery"
      className="py-28"
      style={{ backgroundColor: "#faf8f3" }}
      ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-sm font-normal mb-4"
          style={{ color: DARK }}>
          Visual Tour
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight mb-16"
          style={{ color: GREEN }}>
          The Villa in Every Light
        </motion.h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {visibleImages.map((img, i) => (
            <motion.div
              key={`${img.alt}-${i}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08 + 0.2,
              }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-2xl group shadow-sm ${img.span}`}>
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-white text-xs tracking-[0.18em] uppercase font-medium">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {visibleCount < images.length && (
            <button
              onClick={handleViewMore}
              className="px-8 py-3 rounded-xl font-medium uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: GREEN,
                color: "#fff",
              }}>
              View More
            </button>
          )}

          {visibleCount > INITIAL_COUNT && (
            <button
              onClick={handleViewLess}
              className="px-8 py-3 rounded-xl border font-medium uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:scale-105"
              style={{
                borderColor: GREEN,
                color: GREEN,
                backgroundColor: "transparent",
              }}>
              View Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
