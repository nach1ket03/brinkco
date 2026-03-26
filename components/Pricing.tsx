"use client";

import { pricingTiers } from "@/lib/constants";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-bg2 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-2xl leading-tight mb-6">
            Simple, honest pricing.
          </h2>
          <p className="text-white/60 text-lg max-w-xl">
            No hidden fees. No ongoing agency retainers unless you want them. Just high-quality work that gets results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-bg p-8 md:p-10 rounded-3xl border relative flex flex-col h-full ${
                tier.hot 
                  ? "border-lime shadow-[0_0_50px_rgba(200,241,53,0.1)] lg:-translate-y-4" 
                  : "border-white/10"
              }`}
            >
              {tier.hot && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-bg text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full z-10">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium text-white/80 mb-2">{tier.name}</h3>
                <div className="text-5xl font-display font-bold text-lime mb-4">{tier.price}</div>
                <p className="text-white/50 text-sm">{tier.note}</p>
              </div>

              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="text-lime w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm md:text-base leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/919561084600?text=Hi%20Nachiket!%20I'm%20interested%20in%20the%20${tier.name}%20Package%20(${tier.price}).`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl text-center font-bold text-lg transition-all duration-300 ${
                  tier.hot
                    ? "bg-lime text-bg hover:bg-white hover:scale-105"
                    : "bg-white/5 text-white hover:bg-lime hover:text-bg"
                }`}
              >
                Choose {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
