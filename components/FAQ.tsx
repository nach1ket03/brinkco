"use client";

import { faqItems } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
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
          <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-2xl leading-tight">
            I know you have questions.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg border border-white/5 p-8 rounded-2xl hover:border-lime/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-display font-bold mb-4 flex items-start gap-3">
                <ArrowRight className="text-lime w-6 h-6 shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base pl-9">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
