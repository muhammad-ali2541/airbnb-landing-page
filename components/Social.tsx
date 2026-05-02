"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, ChevronLeft, ChevronRight, Facebook } from "lucide-react";

const igImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80",
  "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=400&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
  "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=400&q=80",
];

const GREEN = "#5C6B50";
const DARK = "#1F1F1F";
const VISIBLE = 4;
const LEN = igImages.length;
const GAP = 8; // px gap between cards

// 5 sets: enough clones on both sides to never show a gap
const repeated = [
  ...igImages,
  ...igImages,
  ...igImages,
  ...igImages,
  ...igImages,
];
const START = LEN * 2; // start in the 3rd set (index 12)

export default function Social() {
  const sectionRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  // rawIndex climbs/drops freely — no snapping ever
  const [rawIndex, setRawIndex] = useState(START);
  // Whether we're mid-transition (block rapid clicks)
  const [animating, setAnimating] = useState(false);

  // dotIndex is purely visual — which original image is "first" in view
  const dotIndex = (((rawIndex - START) % LEN) + LEN) % LEN;

  // Card width in px (computed from track width)
  const cardWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return (trackRef.current.offsetWidth - GAP * (VISIBLE - 1)) / VISIBLE;
  }, []);

  // Translate the track imperatively to avoid Framer spring settle issues
  const applyTransform = useCallback(
    (index: number, animated: boolean) => {
      const track = trackRef.current;
      if (!track) return;
      const cw = cardWidth();
      const tx = -(index * (cw + GAP));
      track.style.transition = animated
        ? "transform 420ms cubic-bezier(0.4, 0, 0.2, 1)"
        : "none";
      track.style.transform = `translateX(${tx}px)`;
    },
    [cardWidth],
  );

  // On mount, position without animation
  useEffect(() => {
    applyTransform(START, false);
  }, [applyTransform]);

  const slide = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);

    const next = rawIndex + dir;
    setRawIndex(next);
    applyTransform(next, true);

    // After CSS transition ends, check if we need to silently reposition
    setTimeout(() => {
      setRawIndex((current) => {
        // If we've drifted too close to either edge, snap to equivalent middle position
        let corrected = current;
        if (current >= LEN * 4) corrected = current - LEN * 2;
        if (current < LEN) corrected = current + LEN * 2;

        if (corrected !== current) {
          // Apply instantly (no transition)
          const track = trackRef.current;
          if (track) {
            const cw = cardWidth();
            const tx = -(corrected * (cw + GAP));
            track.style.transition = "none";
            track.style.transform = `translateX(${tx}px)`;
          }
        }
        return corrected;
      });
      setAnimating(false);
    }, 430); // just after transition duration
  };

  return (
    <section
      className="py-28"
      style={{ backgroundColor: "#F5F2E8" }}
      ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-sm font-normal text-center mb-4"
          style={{ color: DARK }}>
          Follow Along
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight text-center mb-6"
          style={{ color: GREEN }}>
          Life at Hilltop Haven
        </motion.h2>

        {/* Social handles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-12">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/hilltop_haven_vacation?igsh=MXd5eWc4eXR1bGprbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-light tracking-wide transition-colors duration-200"
            style={{ color: "#C8A98D" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#C8A98D")}>
            <Instagram size={16} />
            @hilltop_haven_vacation
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1KNwErJqFD/?mibextid=wwXIfr" // update if different
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-light tracking-wide transition-colors duration-200"
            style={{ color: "#C8A98D" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#C8A98D")}>
            <Facebook size={16} />
            Hilltop Haven - Russian River Stay
          </a>
        </motion.div>

        {/* Slider row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-6">
          {/* Left arrow */}
          <button
            onClick={() => slide(-1)}
            aria-label="Previous"
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: GREEN, color: "#fff" }}>
            <ChevronLeft size={20} />
          </button>

          {/* Clipped viewport */}
          <div className="overflow-hidden flex-1">
            {/* Track — moved imperatively via ref */}
            <div
              ref={trackRef}
              className="flex"
              style={{ gap: `${GAP}px`, willChange: "transform" }}>
              {repeated.map((url, i) => (
                <a
                  key={i}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group rounded-2xl block flex-shrink-0"
                  style={{
                    // Fixed width so CSS transition math is exact
                    width: `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                    aspectRatio: "1 / 1",
                  }}>
                  <img
                    src={url}
                    alt={`Instagram post ${(i % LEN) + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/30">
                    <Instagram
                      size={20}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => slide(1)}
            aria-label="Next"
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: GREEN, color: "#fff" }}>
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {igImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (animating) return;
                const target = START + i;
                setRawIndex(target);
                applyTransform(target, true);
                setAnimating(true);
                setTimeout(() => setAnimating(false), 430);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === dotIndex ? "20px" : "6px",
                height: "6px",
                backgroundColor: i === dotIndex ? GREEN : "#C8A98D",
                opacity: i === dotIndex ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
