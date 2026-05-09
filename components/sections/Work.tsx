'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import { projects, type Project } from '@/lib/projects'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

function ProjectRow({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.07 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block border-t border-[--border] transition-colors duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated lime left rail */}
        <motion.span
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-[--lime] origin-top"
          animate={{ scaleY: hovered ? 1 : 0 }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-hidden="true"
        />

        {/* Row content */}
        <div className="pl-6 pr-4 md:pr-8 py-7 flex items-center gap-6 md:gap-8">
          {/* Index number */}
          <span className="font-mono text-[0.65rem] text-[--text-3] w-6 shrink-0 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Project info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2">
              <h3
                className="font-display font-bold text-[1.35rem] md:text-[1.5rem] text-[--text-1] leading-tight transition-colors duration-300 group-hover:text-[--lime]"
              >
                {project.title}
              </h3>
              <span className="font-mono text-[0.62rem] text-[--text-3] uppercase tracking-widest hidden sm:block">
                {project.result}
              </span>
            </div>

            <p className="font-body text-[0.875rem] text-[--text-3] hidden md:block mb-3 max-w-[50ch] leading-relaxed">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
              {project.tags.length > 4 && (
                <span className="font-mono text-[0.62rem] text-[--text-3] self-center">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{
              x: hovered ? 5 : 0,
              y: hovered ? -5 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-[--text-3] group-hover:text-[--lime] transition-colors duration-300"
            aria-hidden="true"
          >
            <ArrowUpRight size={22} />
          </motion.div>
        </div>

        {/* Hover thumbnail — slides in from right, desktop only */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="thumb"
              initial={{ opacity: 0, x: 32, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 16, scale: 0.96 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="absolute right-20 top-1/2 -translate-y-1/2 w-52 h-36 rounded-sm overflow-hidden border border-[--lime-border] shadow-[0_24px_64px_rgba(0,0,0,0.7)] pointer-events-none z-20 hidden lg:block"
              aria-hidden="true"
            >
              {project.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[--bg-3] flex items-center justify-center relative">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-display font-extrabold text-[2.5rem] text-[--lime] relative z-10 select-none">
                    {initials}
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  )
}

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" className="py-32 md:py-40 bg-[--bg-0]" aria-label="Selected work">
      <div className="max-w-content mx-auto px-8">

        {/* Header row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-16 flex items-end justify-between gap-8"
        >
          <div>
            <SectionLabel className="mb-4">Selected Work</SectionLabel>
            <h2
              className="font-display font-extrabold text-[--text-1]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
            >
              Projects that ship.
            </h2>
          </div>

          <Link
            href="https://github.com/nach1ket03"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] text-[--text-3] hover:text-[--lime] transition-colors duration-200 shrink-0 hidden md:block uppercase tracking-widest"
          >
            All on GitHub ↗
          </Link>
        </motion.div>

        {/* List */}
        <div className="border-b border-[--border]">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Mobile github link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 md:hidden"
        >
          <Link
            href="https://github.com/nach1ket03"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] text-[--text-3] hover:text-[--lime] transition-colors duration-200 uppercase tracking-widest"
          >
            View all on GitHub ↗
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
