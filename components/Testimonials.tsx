"use client";

import { testimonials } from "@/lib/constants";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-3xl leading-tight">
            Don&apos;t just take my word for it.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
              } else if (swipe > swipeConfidenceThreshold) {
                setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              }
            }}
            className="flex items-center justify-center min-h-[400px]"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={false}
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  x: i === activeIndex ? 0 : i > activeIndex ? 100 : -100,
                  scale: i === activeIndex ? 1 : 0.9,
                  display: i === activeIndex ? "block" : "none",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                <div className="flex gap-1 text-lime mb-8">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-4xl font-display italic text-white/90 mb-10 leading-relaxed max-w-3xl">
                  &quot;{t.quote}&quot;
                </p>
                
                <div className="flex flex-col items-center">
                  <span className="font-bold text-xl text-white mb-1">{t.author}</span>
                  <span className="text-white/50 mb-4">{t.role}</span>
                  <span className="bg-lime/10 text-lime px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-lime/20">
                    {t.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Nav */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-lime scale-125" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
