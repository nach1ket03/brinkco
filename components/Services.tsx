"use client";

import { services } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">Services & Packages</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-2xl leading-tight">
            Everything you need. Nothing you don&apos;t.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group block h-full flex items-stretch"
            >
              {/* Number Background */}
              <div className="absolute -top-10 -right-4 text-8xl md:text-9xl font-display font-black text-white/[0.03] select-none pointer-events-none group-hover:text-lime/5 transition-colors duration-500 z-0">
                {service.num}
              </div>

              <div className="bg-bg3 border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between w-full h-full z-10">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4">{service.name}</h3>
                  <p className="text-white/60 text-lg mb-8 max-w-sm">{service.desc}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4">
                  <span className="text-lime font-bold text-xl">{service.price}</span>
                  <a
                    href={`https://wa.me/919561084600?text=Hi%20Nachiket!%20I'm%20interested%20in%20the%20${encodeURIComponent(service.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-lime group-hover:border-lime transition-all duration-300"
                  >
                    <span className="transform -rotate-45 group-hover:text-bg transition-colors duration-300 font-bold block">→</span>
                  </a>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-lime transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
