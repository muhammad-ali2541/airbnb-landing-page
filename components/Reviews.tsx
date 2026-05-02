"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Sparkles, CheckCircle, Search, MessageCircle, Map, Tag } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600"] });

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
const BG = "#faf8f3"; // matches section background

const overallBars = [
  { star: 5, pct: 94 },
  { star: 4, pct: 4 },
  { star: 3, pct: 1 },
  { star: 2, pct: 0 },
  { star: 1, pct: 1 },
];

const categoryRatings = [
  { label: "Cleanliness",    score: 4.9, Icon: Sparkles      },
  { label: "Accuracy",       score: 5.0, Icon: CheckCircle   },
  { label: "Check-in",       score: 5.0, Icon: Search        },
  { label: "Communication",  score: 5.0, Icon: MessageCircle },
  { label: "Location",       score: 4.8, Icon: Map           },
  { label: "Value",          score: 4.8, Icon: Tag           },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#C8A98D" stroke="none" />
      ))}
    </div>
  );
}

function Laurel({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="52"
      height="68"
      viewBox="0 0 52 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M26 64 C26 64 10 50 10 30 C10 16 18 6 26 6"
        stroke="#3a3a3a"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="13" cy="16" rx="7" ry="10" transform="rotate(-40 13 16)" fill="#2e2e2e" opacity="0.85"/>
      <ellipse cx="9"  cy="28" rx="7" ry="10" transform="rotate(-20 9 28)"  fill="#383838" opacity="0.80"/>
      <ellipse cx="10" cy="41" rx="6" ry="9"  transform="rotate(0 10 41)"   fill="#2e2e2e" opacity="0.75"/>
      <ellipse cx="16" cy="52" rx="5" ry="8"  transform="rotate(18 16 52)"  fill="#3a3a3a" opacity="0.70"/>
      <ellipse cx="22" cy="60" rx="4" ry="6"  transform="rotate(30 22 60)"  fill="#2e2e2e" opacity="0.60"/>
    </svg>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] md:w-[380px] rounded-2xl p-8 flex flex-col gap-5 shadow-sm"
      style={{ backgroundColor: "#fff", border: "1px solid #e8e0d4" }}
    >
      <Stars count={r.rating} />
      <p className="text-sm font-light leading-relaxed italic flex-1" style={{ color: `${DARK}99` }}>
        "{r.text}"
      </p>
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #f0ebe3" }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
          style={{ backgroundColor: "#EDE4D8", color: DARK }}
        >
          {r.initials}
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: DARK }}>{r.name}</p>
          <p className="text-xs" style={{ color: "#C8A98D" }}>{r.location} · {r.date}</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const trackRef = useRef<HTMLDivElement>(null);

  const doubled = [...reviews, ...reviews];
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animFrame: number;
    let startTime: number | null = null;
    let pausedAt: number | null = null;
    const SPEED = 40;
    const totalWidth = track.scrollWidth / 2;

    function animate(ts: number) {
      if (pausedRef.current) {
        // While paused, shift startTime forward so position stays frozen
        if (pausedAt === null) pausedAt = ts;
        startTime = startTime! + (ts - pausedAt);
        pausedAt = ts;
      } else {
        pausedAt = null;
        if (!startTime) startTime = ts;
      }
      const looped = ((ts - startTime!) / 1000 * SPEED) % totalWidth;
      track!.style.transform = `translateX(-${looped}px)`;
      animFrame = requestAnimationFrame(animate);
    }
    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section id="reviews" className="py-28" style={{ backgroundColor: BG }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-sm font-normal mb-4"
          style={{ color: DARK }}
        >
          Guest Reviews
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight mb-12"
          style={{ color: GREEN }}
        >
          Loved by Every Guest
        </motion.h2>

        {/* ── Rating badge — no card bg, blends with section ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          {/* Laurels + score + labels — transparent bg */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-5 mb-4">
              <Laurel />
              <span
                className={`${cormorant.className} text-7xl md:text-8xl font-semibold leading-none`}
                style={{ color: DARK, letterSpacing: "-0.02em" }}
              >
                4.96
              </span>
              <Laurel flip />
            </div>
            <p className="text-base font-semibold mb-1" style={{ color: DARK }}>
              Guest favourite
            </p>
            <p
              className="text-sm font-light text-center max-w-xs leading-relaxed"
              style={{ color: `${DARK}70` }}
            >
              This home is a guest favourite based on ratings, reviews, and reliability
            </p>
          </div>

          {/* Stats row: overall bars | divider | 6 categories */}
          <div
            className="flex flex-col md:flex-row rounded-2xl overflow-hidden"
            style={{ border: "1px solid #e8e0d4", backgroundColor: BG }}
          >
            {/* Overall rating bars */}
            <div className="px-8 py-7 flex flex-col justify-center gap-2 min-w-[200px]">
              <p className="text-sm font-medium mb-2" style={{ color: DARK }}>
                Overall rating
              </p>
              {overallBars.map((row) => (
                <div key={row.star} className="flex items-center gap-2">
                  <span className="text-xs w-2 text-right shrink-0" style={{ color: `${DARK}60` }}>
                    {row.star}
                  </span>
                  <div
                    className="flex-1 h-[3px] rounded-full overflow-hidden"
                    style={{ backgroundColor: "#e8e0d4" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${row.pct}%`, backgroundColor: DARK }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block w-px" style={{ backgroundColor: "#e8e0d4" }} />
            {/* Horizontal divider on mobile */}
            <div className="block md:hidden h-px" style={{ backgroundColor: "#e8e0d4" }} />

            {/* 6 category columns */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {categoryRatings.map((cat, i) => (
                <div
                  key={cat.label}
                  className="flex flex-col gap-1 px-6 py-7"
                  style={{
                    borderLeft: i === 0 ? "none" : "1px solid #e8e0d4",
                    borderTop: i >= 3 ? "1px solid #e8e0d4" : "none",
                  }}
                >
                  {/* Score */}
                  <span className="text-2xl font-semibold" style={{ color: DARK }}>
                    {cat.score.toFixed(1)}
                  </span>
                  {/* Label */}
                  <span className="text-sm font-light" style={{ color: `${DARK}70` }}>
                    {cat.label}
                  </span>
                  {/* Icon */}
                  <cat.Icon
                    size={28}
                    strokeWidth={1.4}
                    className="mt-2"
                    style={{ color: `${DARK}80` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
