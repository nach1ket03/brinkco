'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'

const infoRows = [
  { label: 'Location', value: 'Pune, Maharashtra, IN' },
  { label: 'Studying', value: 'MCA (Data Science) · MIT ADT · 2024–2026' },
  { label: 'Freelancing', value: 'Brink Co — local business web design' },
  { label: 'Building', value: 'AURA Fitness · MERN Stack projects' },
  { label: 'Learning', value: 'AI/ML · LangChain · Docker' },
  { label: 'Available', value: 'Internships · Remote work · Freelance', lime: true },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-32 md:py-40 bg-[--bg-1]" aria-label="About">
      <div className="max-w-content mx-auto px-8">
        <div
          ref={ref}
          className="grid md:grid-cols-[5fr_7fr] gap-16 items-start"
        >
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <SectionLabel>About</SectionLabel>
            <h2
              className="font-display font-extrabold text-[--text-1]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Builder. Designer. Student.
            </h2>

            <div className="flex flex-col gap-4 font-body text-[--text-2] leading-relaxed">
              <p>
                I&apos;m Nachiket, a second-year MCA student at MIT ADT University,
                Pune, studying Data Science. I build websites and web applications
                — for local businesses through Brink Co, and for my own ideas.
              </p>
              <p>
                My stack is MERN. My aesthetic is minimal and intentional. I care
                about things that ship, work, and look good doing it. I&apos;m currently
                pushing deeper into AI integration and TypeScript.
              </p>
              <p className="text-[0.9rem] text-[--text-3]">
                When I&apos;m not coding: gym, guitar, Urdu poetry. I have strong
                opinions about typography.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <Link
                href="https://github.com/nach1ket03"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[0.9rem] text-[--text-2] underline underline-offset-4 decoration-[--border] hover:text-[--lime] hover:decoration-[--lime] transition-all duration-200"
              >
                View my GitHub →
              </Link>
              <Link
                href="#" // TODO: replace with real resume PDF link
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[0.9rem] text-[--text-2] underline underline-offset-4 decoration-[--border] hover:text-[--lime] hover:decoration-[--lime] transition-all duration-200"
              >
                Download Resume →
              </Link>
            </div>
          </motion.div>

          {/* Right: info card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="bg-[--bg-2] border border-[--border] rounded-sm overflow-hidden p-8">
              <div className="flex flex-col divide-y divide-[--border]">
                {infoRows.map((row) => (
                  <div key={row.label} className="py-4 flex items-start gap-4">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[--text-3] w-24 shrink-0 pt-0.5">
                      {row.label}
                    </span>
                    <span
                      className={`font-body text-[0.9rem] leading-relaxed ${
                        row.lime
                          ? 'text-[--lime] flex items-center gap-2'
                          : 'text-[--text-1]'
                      }`}
                    >
                      {row.lime && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[--lime] animate-pulse-dot shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
