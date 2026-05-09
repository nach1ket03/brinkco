'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'

const currentStack = [
  'Next.js / React',
  'Node.js + Express',
  'MongoDB + Mongoose',
  'Tailwind CSS',
  'Framer Motion',
  'REST APIs',
  'Git + GitHub',
]

const learning = [
  'TypeScript (deepening)',
  'Python + AI/ML',
  'LangChain',
  'PostgreSQL',
  'Docker basics',
  'OpenAI / Anthropic APIs',
]

const identityBadges = ['MERN Stack', 'Next.js', 'AI Integration', 'Full-Stack']

function StackItem({ item, delay }: { item: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut', delay }}
      className="flex items-center gap-4 py-3 border-b border-[--border] last:border-0"
    >
      <span className="block w-8 h-px bg-[--lime] shrink-0" aria-hidden="true" />
      <span className="font-mono text-[0.9rem] text-[--text-1]">{item}</span>
    </motion.div>
  )
}

export default function Stack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stack" className="py-32 md:py-40 bg-[--bg-0]" aria-label="Technical stack">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-16"
        >
          <SectionLabel className="mb-4">Technical Stack</SectionLabel>
          <h2
            className="font-display font-extrabold text-[--text-1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
          >
            Tools I build with.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Column 1 */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[--text-3] mb-6">
              Currently Building With
            </p>
            <div>
              {currentStack.map((item, i) => (
                <StackItem key={item} item={item} delay={i * 0.05} />
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[--text-3] mb-6">
              Currently Learning
            </p>
            <div>
              {learning.map((item, i) => (
                <StackItem key={item} item={item} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </div>

        {/* Identity badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {identityBadges.map((badge) => (
            <Badge key={badge} variant="large">
              {badge}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
