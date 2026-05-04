"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const GREEN = "#5C6B50";
const DARK = "#1F1F1F";

const faqs = [
  {
    q: "What makes this property a 'Wellness Retreat'?",
    a: "We’ve designed the home to be a sanctuary for restoration. Your stay includes exclusive access to a private 3-person outdoor infrared sauna, a deep-soak hot tub, and an outdoor shower, all situated on a peaceful deck overlooking the forested hills of Forestville.",
  },
  {
    q: "Is the property suitable for remote work?",
    a: "Absolutely. We provide fast Wi-Fi (60 Mbps), making it an ideal spot for those who need a quiet, focused environment to work while remaining close to nature.",
  },
  {
    q: "How do I check in?",
    a: (
      <>
        <p>
          We use a smartlock system for a seamless self-check-in experience. You
          will receive your unique access code prior to arrival.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>Check-in: 4:00 PM</li>
          <li>Check-out: By 11:00 AM</li>
        </ul>
      </>
    ),
  },
  {
    q: "Where can I park?",
    a: "The property includes two dedicated parking spaces on the premises for your convenience.",
  },
  {
    q: "How many guests can the home accommodate?",
    a: "The home comfortably sleeps up to 4 guests. There are two bedrooms: one with a queen bed and a second 'bunk room' featuring a twin-over-full bunk bed.",
  },
  {
    q: "What is the kitchen like?",
    a: "The kitchen is fully stocked with the essentials you'll need to prepare meals during your stay, allowing you to enjoy a quiet night in after a day of exploring local vineyards.",
  },
  {
    q: "Are there any specific 'Do’s and Don’ts'?",
    a: "To maintain the peaceful atmosphere of our neighborhood, we ask that you respect our maximum occupancy of 4 guests. Additionally, please note that the fire table on the deck is currently not in service and should not be used.",
  },
  {
    q: "What safety features are on-site?",
    a: "For your peace of mind, the property is equipped with exterior security cameras. Please be aware that the hot tub area is not gated or locked.",
  },
  {
    q: "What is there to do nearby?",
    a: (
      <>
        <p>
          You are perfectly positioned to enjoy the best of Sonoma County. Local
          favorites include:
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>
            Nature: Armstrong Redwoods State Natural Reserve and the Russian
            River
          </li>
          <li>Wine: Numerous world-class vineyards within a short drive</li>
          <li>
            Dining: Charming local spots in downtown Forestville and nearby
            Guerneville
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Is the home family-friendly?",
    a: "Yes, the home is well-suited for small families. The bunk room layout is ideal for children, and the peaceful surroundings provide a safe and relaxing environment. However, guests should supervise children around outdoor areas like the deck, hot tub, and sauna.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: { q: string; a: React.ReactNode };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b last:border-b-0"
      style={{ borderColor: "#e8e0d4" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group">
        <span
          className="text-base font-medium leading-snug transition-colors duration-200"
          style={{ color: open ? GREEN : DARK }}>
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: open ? GREEN : "#EDE4D8",
            color: open ? "#fff" : GREEN,
          }}>
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden">
            <div
              className="pb-6 text-sm font-light leading-relaxed pr-14"
              style={{ color: `${DARK}99` }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <section
      className="py-28"
      style={{ backgroundColor: "#FAF8F3" }}
      id="faq"
      ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center uppercase tracking-[0.28em] text-base font-normal text-center mb-4"
          style={{ color: DARK }}>
          FAQ
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl font-normal leading-tight text-center mb-4"
          style={{ color: GREEN }}>
          Questions & Answers
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-sm font-light mb-16 max-w-md mx-auto"
          style={{ color: "#C8A98D" }}>
          Everything you need to know before you arrive. Can&apos;t find your
          answer?{" "}
          <a
            href="#contact"
            className="underline underline-offset-2 transition-colors duration-200"
            style={{ color: GREEN }}>
            Get in touch.
          </a>
        </motion.p>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          {/* Left column */}
          <div
            className="rounded-2xl px-8 py-2"
            style={{ backgroundColor: "#fff", border: "1px solid #e8e0d4" }}>
            {left.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>

          {/* Right column */}
          <div
            className="rounded-2xl px-8 py-2 mt-6 lg:mt-0"
            style={{ backgroundColor: "#FFF", border: "1px solid #e8e0d4" }}>
            {right.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
