'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import ScrambleText from '@/components/ui/ScrambleText'
import MagneticElement from '@/components/ui/MagneticElement'

const terminalLines: { p: string; t: string; out?: boolean; lime?: boolean }[] = [
  { p: '$', t: 'whoami' },
  { p: '>', t: 'MCA Student · Pune', out: true },
  { p: '$', t: 'status' },
  { p: '>', t: '[●] Available for work', out: true, lime: true },
  { p: '>', t: '[●] Freelance open', out: true, lime: true },
  { p: '$', t: 'stack --top' },
  { p: '>', t: 'Next.js · MERN · AI', out: true },
]

// Clip-path wipe reveal: slides up from behind an invisible floor
const revealVariant = {
  hidden: { y: '115%' },
  visible: (delay: number) => ({
    y: '0%',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
}

export default function Hero() {
  const scrollToWork = () =>
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16" aria-label="Hero">
      <div className="max-w-content mx-auto px-8 w-full py-16 md:py-24">

        {/* ── Top bar ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center justify-between mb-8 pb-6 border-b border-[--border]"
        >
          <SectionLabel>Nachiket Deshpande</SectionLabel>
          <span className="hidden md:flex items-center gap-2 font-mono text-[0.65rem] text-[--text-2] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[--lime] animate-pulse-dot" aria-hidden="true" />
            Currently Available
          </span>
        </motion.div>

        {/* ── Giant headline ──────────────────────────────── */}
        <div className="mb-10 md:mb-14 flex flex-col" style={{ gap: '0.05em' }}>

          {/* Line 1 — filled, left */}
          <div className="overflow-hidden">
            <motion.h1
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={revealVariant}
              className="font-display font-extrabold text-[--text-1] leading-[0.88]"
              style={{ fontSize: 'clamp(4.5rem, 13vw, 10.5rem)' }}
            >
              <ScrambleText text="Design." delay={0.5} />
            </motion.h1>
          </div>

          {/* Line 2 — outline only, indented */}
          <div className="overflow-hidden pl-0 md:pl-[12vw]">
            <motion.h1
              custom={0.28}
              initial="hidden"
              animate="visible"
              variants={revealVariant}
              className="font-display font-extrabold leading-[0.88]"
              style={{
                fontSize: 'clamp(4.5rem, 13vw, 10.5rem)',
                color: 'transparent',
                WebkitTextStroke: '2px var(--text-3)',
              }}
            >
              <ScrambleText text="Develop." delay={0.65} />
            </motion.h1>
          </div>

          {/* Line 3 — lime filled, left */}
          <div className="overflow-hidden">
            <motion.h1
              custom={0.41}
              initial="hidden"
              animate="visible"
              variants={revealVariant}
              className="font-display font-extrabold text-[--lime] leading-[0.88]"
              style={{ fontSize: 'clamp(4.5rem, 13vw, 10.5rem)' }}
            >
              <ScrambleText text="Deploy." delay={0.8} />
            </motion.h1>
          </div>
        </div>

        {/* ── Bottom area ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.95 }}
          className="border-t border-[--border] pt-8 grid md:grid-cols-[1fr_auto] gap-10 items-start"
        >
          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="font-body text-[--text-2] leading-relaxed max-w-[44ch]">
              I build conversion-focused websites for local businesses and
              full-stack web applications for the things I care about. Based
              in Pune. Currently available.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-5">
              {['3 Client Projects', 'Pune Based', 'MERN + AI'].map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full bg-[--lime]" aria-hidden="true" />
                  )}
                  <span className="font-mono text-[0.72rem] text-[--text-2] uppercase tracking-wide">
                    {item}
                  </span>
                </span>
              ))}
            </div>

            {/* CTAs with magnetic pull */}
            <div className="flex flex-wrap items-center gap-4">
              <MagneticElement>
                <Button variant="primary" onClick={scrollToWork}>
                  See My Work →
                </Button>
              </MagneticElement>
              <MagneticElement>
                <Button
                  variant="ghost"
                  href="https://wa.me/919999999999" // TODO: replace with real WhatsApp number
                >
                  Get a Free Demo
                </Button>
              </MagneticElement>
            </div>
          </div>

          {/* Right — compact terminal */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-[--bg-2] border border-[--border] rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[--border] bg-[--bg-3]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c940]" aria-hidden="true" />
                <span className="font-mono text-[0.6rem] text-[--text-3] ml-auto">
                  nachiket@brinkco
                </span>
              </div>
              <div className="p-4 font-mono text-[0.75rem] space-y-1.5">
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className={line.out ? 'text-[--text-3]' : 'text-[--lime]'}>
                      {line.p}
                    </span>
                    <span
                      className={
                        line.lime
                          ? 'text-[--lime]'
                          : line.out
                          ? 'text-[--text-2]'
                          : 'text-[--text-1]'
                      }
                    >
                      {line.t}
                    </span>
                  </div>
                ))}
                <div className="flex gap-3 pt-1">
                  <span className="text-[--lime]">$</span>
                  <span className="text-[--text-1] terminal-cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
