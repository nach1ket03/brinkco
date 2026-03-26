"use client";

import { processSteps } from "@/lib/constants";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="py-32 bg-bg2 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-2xl leading-tight">
            How we get it done fast.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg p-8 rounded-2xl border border-white/5 relative group hover:border-lime/30 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="text-6xl font-display font-black text-lime/20 mb-6 group-hover:text-lime transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {step.desc}
              </p>
              
              {/* Connector line for desktop */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-[1px] bg-white/10" />
              )}
              
              {/* Animated Bottom Hover Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-lime transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
