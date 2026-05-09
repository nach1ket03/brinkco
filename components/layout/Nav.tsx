'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Services', href: '#services' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Trap focus in mobile menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[--bg-0]/90 backdrop-blur-xl border-b border-[--lime-border]'
            : 'bg-transparent border-b border-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-content mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-extrabold text-[1.1rem] text-[--text-1] flex items-center gap-0.5 hover:text-[--lime] transition-colors duration-200"
            aria-label="Brink Co — home"
          >
            <span className="text-[--lime] mr-0.5">·</span>
            Brink Co
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-body text-[0.9rem] text-[--text-2] hover:text-[--text-1] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[--lime] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* ⌘K hint */}
            <span className="font-mono text-[0.65rem] text-[--text-3] border border-[--border] px-1.5 py-0.5 rounded-sm select-none">
              ⌘K
            </span>
          </div>

          {/* Right: CTA + availability */}
          <div className="hidden md:flex items-center gap-4">
            {/* Availability badge */}
            <span className="flex items-center gap-2 font-mono text-[0.65rem] text-[--text-2] uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[--lime] animate-pulse-dot" aria-hidden="true" />
              Available
            </span>

            <button
              onClick={() => scrollTo('#contact')}
              className="font-display font-bold text-sm border border-[--border] text-[--text-1] px-5 py-2 rounded-sm hover:border-[--lime-border] hover:text-[--lime] transition-all duration-200"
              aria-label="Contact — Let's Talk"
            >
              Let&apos;s Talk →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[--text-1] p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9997] bg-[--bg-0] flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              className="absolute top-5 right-6 text-[--text-2] p-2 hover:text-[--text-1]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-display font-extrabold text-[2.5rem] text-[--text-1] hover:text-[--lime] transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                onClick={() => scrollTo('#contact')}
                className="mt-4 font-display font-bold text-[1.2rem] text-[--lime] border border-[--lime-border] px-8 py-3 rounded-sm hover:bg-[--lime-soft] transition-all duration-200"
              >
                Let&apos;s Talk →
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
