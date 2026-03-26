"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MidCTAStrip() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-lime/5 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-bg2 border border-lime/20 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center shadow-[0_0_50px_rgba(200,241,53,0.05)]"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 pt-2">
            Not sure what you need?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10">
            Send me a message on WhatsApp. We&apos;ll have a quick 5-minute chat, and I&apos;ll tell you exactly what would work best for your business. No pressure, no sales pitch.
          </p>
          <Link
            href="https://wa.me/919561084600?text=Hi%20Nachiket!%20I%27m%20not%20sure%20which%20package%20I%20need."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-lime text-bg font-bold rounded-full text-lg hover:bg-white transition-all hover:scale-105 duration-300 shadow-xl"
          >
            Message Me Now →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
