"use client";

import { workItems } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e 
      ? (e as unknown as TouchEvent).touches[0].clientX - rect.left 
      : (e as unknown as MouseEvent).clientX - rect.left;
      
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;

    const startDrag = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      handleDrag(e as unknown as MouseEvent | TouchEvent);
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const doDrag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      handleDrag(e as unknown as MouseEvent | TouchEvent);
    };

    container.addEventListener('mousedown', startDrag);
    container.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('mousemove', doDrag);
    window.addEventListener('touchmove', doDrag, { passive: false });

    return () => {
      container.removeEventListener('mousedown', startDrag);
      container.removeEventListener('touchstart', startDrag);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
      window.removeEventListener('mousemove', doDrag);
      window.removeEventListener('touchmove', doDrag);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full cursor-ew-resize select-none overflow-hidden group">
      {/* After Image (Background) */}
      <div className="absolute inset-0 bg-lime/10">
        <div className="w-full h-full bg-bg3 flex items-center justify-center text-white/20 font-bold text-2xl lg:text-4xl font-display">NEW DESIGN</div>
      </div>
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 bg-red-900/10 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="w-full h-full bg-bg flex items-center justify-center text-white/20 font-bold text-2xl lg:text-4xl font-display">OLD DESIGN</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-lime z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-lime rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(200,241,53,0.5)] cursor-ew-resize pointer-events-auto">
          <div className="w-4 h-4 md:w-5 md:h-5 text-bg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <span className="text-lime font-bold tracking-wider uppercase text-sm mb-4 block">Recent Work</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-3xl leading-tight">
            Websites that actually look like they cost ₹1,00,000.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {workItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-white/10 group-hover:border-lime/50 transition-colors duration-500 bg-bg3">
                {item.isSlider ? (
                  <BeforeAfterSlider />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-lime/10 opacity-0 group-hover:opacity-100 mix-blend-overlay z-10 transition-opacity duration-500" />
                    <div className="w-full h-full flex items-center justify-center text-white/10 font-display text-3xl font-bold bg-bg2 group-hover:scale-105 transition-transform duration-700">IMAGE</div>
                  </>
                )}

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20 pointer-events-none">
                  <span className="bg-bg/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 text-white/80">
                    {item.tag}
                  </span>
                  <span className="bg-lime text-bg px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(200,241,53,0.3)]">
                    {item.result}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-lime transition-colors duration-300">{item.title}</h3>
                <p className="text-white/60 text-lg mb-6 leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.pills.map((pill) => (
                    <span key={pill} className="text-xs font-medium text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
