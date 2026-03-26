"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Star } from "lucide-react";

export default function Hero() {
  const h1Words = [
    { text: "Get", type: "outline" },
    { text: "10–20", type: "outline" },
    { text: "New", type: "outline" },
    { text: "Enquiries", type: "lime" },
    { text: "Every", type: "lime" },
    { text: "Week", type: "lime" },
    { text: "From", type: "white" },
    { text: "Your", type: "white" },
    { text: "Website.", type: "white" },
  ];

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Giant Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <div aria-hidden="true" className="text-[15vw] font-display font-black text-stroke-opacity leading-none whitespace-nowrap">
          NACHIKET
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12 md:mt-0">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-wider text-white/80 text-nowrap">
            Taking 2–3 new projects this week
          </span>
        </motion.div>

        {/* H1 Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 max-w-5xl flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2">
          {h1Words.map((word, i) => {
            let className = "";
            if (word.type === "outline") className = "text-stroke";
            else if (word.type === "lime") className = "text-lime";
            else className = "text-white";

            return (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className={className}
              >
                {word.text}
              </motion.span>
            );
          })}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-12"
        >
          I design and build high-end, conversion-focused websites for local
          businesses. Free demo first. Delivered in just 3–7 days.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <Link
            href="https://wa.me/919561084600?text=Hi%20Nachiket!%20I%20want%20a%20free%20demo%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-lime text-bg font-bold rounded-full text-lg hover:bg-white transition-colors"
          >
            Get My Free Demo →
          </Link>
          <Link
            href="#work"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors"
          >
            See My Work
          </Link>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-white/50"
        >
          <div className="flex items-center gap-2">
            <Star className="text-lime w-4 h-4" />
            <span>15+ projects</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-lime w-4 h-4" />
            <span>100% on-time</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-lime w-4 h-4" />
            <span>Pune locations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
