"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "London, UK",
    rating: 5,
    text: "Absolutely breathtaking. The sunsets from the terrace were unlike anything I've ever seen. We didn't want to leave. We'll be back every year.",
    date: "September 2024",
    initials: "SM",
  },
  {
    name: "Marco & Giulia",
    location: "Milan, Italy",
    rating: 5,
    text: "The villa exceeded every expectation. Immaculate, peaceful, and the pool is simply magical. The host was incredibly attentive without being intrusive.",
    date: "August 2024",
    initials: "MG",
  },
  {
    name: "James R.",
    location: "New York, USA",
    rating: 5,
    text: "We hosted a family reunion here — 8 of us — and it was seamless. Plenty of space, great kitchen, and the most stunning backdrop imaginable.",
    date: "July 2024",
    initials: "JR",
  },
  {
    name: "Priya & Arjun",
    location: "Singapore",
    rating: 5,
    text: "From the moment we arrived, we felt completely at home. The kitchen is a dream, the beds are cloud-soft, and waking up to those vineyard views is pure magic.",
    date: "June 2024",
    initials: "PA",
  },
  {
    name: "Claire D.",
    location: "Paris, France",
    rating: 5,
    text: "A hidden gem tucked into the hills. The mornings were still, the evenings were golden, and every corner of this property felt intentionally designed for rest.",
    date: "May 2024",
    initials: "CD",
  },
  {
    name: "Thomas & Lisa",
    location: "Berlin, Germany",
    rating: 5,
    text: "We celebrated our anniversary here and it was perfect in every way. The host thought of everything. Hilltop Haven lives up to its name completely.",
    date: "April 2024",
    initials: "TL",
  },
];

const GREEN = "#5C6B50";
const DARK = "#1F1F1F";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#C8A98D" stroke="none" />
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] md:w-[380px] rounded-2xl p-8 flex flex-col gap-5 shadow-sm"
      style={{ backgroundColor: "#fff", border: "1px solid #e8e0d4" }}>
      <Stars count={r.rating} />
      <p
        className="text-sm font-light leading-relaxed italic flex-1"
        style={{ color: `${DARK}99` }}>
        "{r.text}"
      </p>
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid #f0ebe3" }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
          style={{ backgroundColor: "#EDE4D8", color: DARK }}>
          {r.initials}
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: DARK }}>
            {r.name}
          </p>
          <p className="text-xs" style={{ color: "#C8A98D" }}>
            {r.location} · {r.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate reviews for seamless infinite loop
  const doubled = [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrame: number;
    let startTime: number | null = null;
    // Speed: pixels per second
    const SPEED = 40;

    // Total width of one set of cards (reviews.length cards)
    // We'll compute dynamically after mount
    const totalWidth = track.scrollWidth / 2;

    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const offset = (elapsed / 1000) * SPEED;

      // Reset seamlessly when we've scrolled one full set
      const looped = offset % totalWidth;

      track!.style.transform = `translateX(-${looped}px)`;
      animFrame = requestAnimationFrame(animate);
    }

    animFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section
      id="reviews"
      className="py-28"
      style={{ backgroundColor: "#faf8f3" }}
      ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Small Label — matches Gallery */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-sm font-normal text-center mb-4"
          style={{ color: DARK }}>
          Guest Reviews
        </motion.p>

        {/* Heading — matches Gallery */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight text-center mb-10"
          style={{ color: GREEN }}>
          Loved by Every Guest
        </motion.h2>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-16">
          <Stars count={5} />
          <span
            className="text-center font-display text-4xl md:text-5xl font-normal leading-tight"
            style={{ color: DARK }}>
            4.96
          </span>
          <span className="text-sm font-light" style={{ color: "#C8A98D" }}>
            · 195 reviews
          </span>
        </motion.div>
      </div>

      {/* Infinite Slider — full width, overflow hidden */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="overflow-hidden"
        // Fade edges
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content" }}>
          {doubled.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
