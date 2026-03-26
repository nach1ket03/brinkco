"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-32 bg-bg2 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto lg:mx-0 w-full"
          >
            {/* Offset Border */}
            <div className="absolute inset-0 border-2 border-lime translate-x-4 translate-y-4 rounded-2xl md:translate-x-6 md:translate-y-6" />
            
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-white/10">
              <div className="absolute inset-0 bg-lime/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <div className="w-full h-full bg-bg3 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white/20 select-none">
                <span className="font-display text-4xl font-bold">IMAGE</span>
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-bg/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="text-sm font-medium text-white tracking-wide">Pune, India</span>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              I don&apos;t just build websites. I build <span className="text-lime">business assets.</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg">
              <p>
                Most local businesses have websites that look like digital brochures from 2012. They look okay, but they don&apos;t do the one thing they&apos;re supposed to do: <strong>get customers to contact you.</strong>
              </p>
              <p>
                I&apos;m Nachiket, a web designer based in Pune. I focus entirely on conversion-driven design. This means every button, every headline, and every image is strategically placed to turn a casual visitor into a WhatsApp enquiry.
              </p>
              <p>
                When you work with me, you&apos;re not getting a generic template. You&apos;re getting a custom, high-end digital storefront designed to dominate your local market.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['UI/UX Design', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'].map(skill => (
                <span key={skill} className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/80 bg-white/5">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="https://wa.me/919561084600?text=Hi%20Nachiket!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lime font-bold hover:text-white transition-colors group"
              >
                Let&apos;s discuss your project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
