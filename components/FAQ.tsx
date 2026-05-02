"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const GREEN = "#5C6B50";
const DARK = "#1F1F1F";

const faqs = [
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in is from 3:00 PM onwards and check-out is by 11:00 AM. Early check-in or late check-out may be arranged upon request, subject to availability. Please message us in advance and we'll do our best to accommodate.",
  },
  {
    q: "Is the property suitable for children?",
    a: "Hilltop Haven warmly welcomes families with children. The property features open outdoor areas and a private pool — please note the pool is unfenced, so supervision of young children is required at all times. Pack n' play and a high chair are available on request.",
  },
  {
    q: "Are pets allowed?",
    a: "We love animals but unfortunately pets are not permitted at Hilltop Haven. This policy helps us maintain the property to the highest standard for all guests.",
  },
  {
    q: "Is there parking available on site?",
    a: "Yes, private off-street parking is available for up to two vehicles at no extra charge. The driveway is easily accessible and well-lit.",
  },
  {
    q: "How far is the property from Sonoma town?",
    a: "Hilltop Haven is approximately 12 minutes by car from Sonoma Plaza — close enough for easy access to world-class restaurants, tasting rooms, and shops, yet secluded enough to feel completely removed from the everyday.",
  },
  {
    q: "Is the pool heated?",
    a: "Yes, the pool is solar-heated and typically maintains a comfortable temperature throughout the spring, summer, and fall seasons. Please note that pool heating is subject to weather conditions.",
  },
  {
    q: "What is the cancellation policy?",
    a: "We offer a flexible cancellation policy — a full refund is available if you cancel at least 5 days before check-in. Cancellations made within 5 days of check-in are non-refundable. Full details are listed on our Airbnb booking page.",
  },
  {
    q: "Is the property accessible via public transport?",
    a: "The property is best reached by car. We recommend renting a vehicle to fully explore the Sonoma Valley wine country at your own pace. Rideshare services are available from nearby towns.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: { q: string; a: string };
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
            <p
              className="pb-6 text-sm font-light leading-relaxed pr-14"
              style={{ color: `${DARK}99` }}>
              {faq.a}
            </p>
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
