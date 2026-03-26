"use client";

import { whyCards } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Zap, PiggyBank } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  CheckCircle,
  MessageCircle,
  Zap,
  PiggyBank,
};

export default function WhyMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="why-me" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Me</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-2xl leading-tight">
            Stop losing customers to bad web design.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {whyCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="bg-bg3 border-l-2 border-lime p-8 rounded-r-2xl hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,241,53,0.05)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-lime/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-lime w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{card.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
