"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  // Initial 5 — first image is the hero span (large)
  { url: "/29.png", alt: "Exterior", span: "lg:col-span-2 lg:row-span-2" },
  { url: "/46.png", alt: "Living Room", span: "" },
  { url: "/50.png", alt: "Kitchen", span: "" },
  { url: "/40.png", alt: "Bedroom", span: "" },
  { url: "/26.png", alt: "Bathroom", span: "" },

  // View More batch 1
  { url: "/33.png", alt: "Patio", span: "" },
  { url: "/23.png", alt: "Deck 1", span: "" },
  { url: "/45.png", alt: "Deck 2", span: "" },
  { url: "/48.png", alt: "Laundry Area", span: "" },
  { url: "/24.png", alt: "Hot Tub", span: "" },
  { url: "/49.png", alt: "Movie theater", span: "" },

  // View More batch 2
  { url: "/14.png", alt: "Deck 1", span: "" },
  { url: "/32.png", alt: "Exterior", span: "" },
  { url: "/9.png", alt: "Exterior", span: "" },
  { url: "/16.png", alt: "Exterior", span: "" },

  // View More batch 3
  { url: "/43.png", alt: "Living Room", span: "" },
  { url: "/35.png", alt: "Living Room", span: "" },
  { url: "/22.png", alt: "Living Room", span: "" },
  { url: "/34.png", alt: "Living Room", span: "" },
  { url: "/22.png", alt: "Living Room", span: "" },

  // View More batch 4
  { url: "/7.png", alt: "Kitchen", span: "" },
  { url: "/11.png", alt: "Kitchen", span: "" },
  { url: "/25.png", alt: "Kitchen", span: "" },
  { url: "/27.png", alt: "Kitchen", span: "" },
  { url: "/38.png", alt: "Kitchen", span: "" },
  { url: "/41.png", alt: "Bedroom 2", span: "" },

  // View More batch 5
  { url: "/1.png", alt: "Bathroom", span: "" },
  { url: "/5.png", alt: "Deck 1", span: "" },
  { url: "/3.png", alt: "Deck 1", span: "" },
  { url: "/15.png", alt: "Deck 2", span: "" },
  { url: "/28.png", alt: "Deck 2", span: "" },
  { url: "/37.png", alt: "Deck 2", span: "" },

  // View More batch 6
  { url: "/2.png", alt: "Deck 2", span: "" },
  { url: "/19.png", alt: "Deck 2", span: "" },
  { url: "/47.png", alt: "Hot Tub", span: "" },
  { url: "/10.png", alt: "Hot Tub", span: "" },
  { url: "/44.png", alt: "Hot Tub", span: "" },
  { url: "/30.png", alt: "Movie theater", span: "" },

  // View More batch 7
  { url: "/39.png", alt: "Movie theater", span: "" },
  { url: "/31.png", alt: "Movie theater", span: "" },
  { url: "/6.png", alt: "Movie theater", span: "" },

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
