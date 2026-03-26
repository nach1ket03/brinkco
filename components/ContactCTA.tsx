"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-32 overflow-hidden border-t border-white/5">
      {/* Background Giant Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h1 className="text-[25vw] font-display font-black text-stroke-opacity leading-none">
          READY?
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-12 max-w-5xl leading-tight"
        >
          Ready to Get More <span className="text-lime">Customers?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bg3 border border-white/10 p-8 md:p-12 rounded-3xl max-w-2xl w-full mb-16 text-left"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-lime mb-6 block">What happens after you click</span>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="text-white/30 font-display font-bold text-xl">1</span>
              <p className="text-white/80">You message me on WhatsApp.</p>
            </div>
            <div className="w-full h-px bg-white/5" />
            <div className="flex gap-4">
              <span className="text-white/30 font-display font-bold text-xl">2</span>
              <p className="text-white/80">We chat for 5 mins to see if we&apos;re a good fit.</p>
            </div>
            <div className="w-full h-px bg-white/5" />
            <div className="flex gap-4">
              <span className="text-white/30 font-display font-bold text-xl">3</span>
              <p className="text-white/80">I build you a free mini-demo. If you love it, we proceed.</p>
            </div>
            <div className="w-full h-px bg-white/5" />
            <div className="flex gap-4">
              <span className="text-lime font-display font-bold text-xl">4</span>
              <p className="text-white font-medium">Your new site goes live in 3-7 days.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="https://wa.me/919561084600?text=Hi%20Nachiket!%20I%20want%20to%20get%20more%20customers%20from%20my%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-lime text-bg font-bold rounded-full text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(200,241,53,0.3)]"
          >
            Start on WhatsApp →
          </Link>
          <Link
            href="#pricing"
            className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold rounded-full text-xl hover:bg-white/10 transition-colors"
          >
            Review Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
