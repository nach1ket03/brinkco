"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
  });
  
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        spring.set(value);
        spring.jump(value);
      } else {
        spring.set(value);
      }
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function TrustBar() {
  return (
    <section className="py-20 border-b border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-x-0 lg:divide-x divide-white/5">
          {/* Stat 1 */}
          <div className="text-center px-4">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-lime mb-2 flex items-center justify-center">
              <AnimatedNumber value={15} />+
            </h3>
            <p className="text-white/50 text-sm uppercase tracking-wider font-medium">Local Launches</p>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center px-4">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-lime mb-2 flex items-center justify-center">
              <AnimatedNumber value={7} />-Day
            </h3>
            <p className="text-white/50 text-sm uppercase tracking-wider font-medium">Delivery</p>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center px-4 pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-lime mb-2">
              Free Demo
            </h3>
            <p className="text-white/50 text-sm uppercase tracking-wider font-medium">First</p>
          </div>
          
          {/* Stat 4 */}
          <div className="text-center px-4 pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-lime mb-2">
              {"< 2h"}
            </h3>
            <p className="text-white/50 text-sm uppercase tracking-wider font-medium">Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
