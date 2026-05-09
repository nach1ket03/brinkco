'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { MessageCircle } from 'lucide-react'

const contactItems = [
  { label: 'EMAIL', value: 'nachiket@brinkco.in', href: 'mailto:nachiket@brinkco.in' }, // TODO: confirm real email
  { label: 'GITHUB', value: 'github.com/nach1ket03', href: 'https://github.com/nach1ket03' },
  { label: 'LOCATION', value: 'Pune, IN · Open to Remote', href: null },
]

function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <a
      href="https://wa.me/919999999999" // TODO: replace with real WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float md:hidden"
      aria-label="Message on WhatsApp"
    >
      <MessageCircle size={22} color="white" fill="white" />
    </a>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <section
        id="contact"
        className="relative py-32 md:py-40 bg-[--bg-0] overflow-hidden text-center"
        aria-label="Contact"
      >
        {/* Background "HELLO" text */}
        <span
          className="absolute inset-0 flex items-center justify-center font-display font-extrabold select-none pointer-events-none"
          style={{
            fontSize: '18vw',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(200,241,53,0.05)',
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          HELLO
        </span>

        <div className="relative z-10 max-w-content mx-auto px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center gap-8"
          >
            <SectionLabel>Get in Touch</SectionLabel>

            <h2
              className="font-display font-extrabold leading-tight"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              <span className="text-[--text-1]">Let&apos;s build</span>
              <br />
              <span className="text-[--lime]">something real.</span>
            </h2>

            <p className="font-body text-[--text-2] leading-relaxed max-w-[50ch]">
              Whether you&apos;re a local business looking for a website, a startup
              that needs a developer, or an internship program looking for someone
              who ships — I&apos;m available.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                href="https://wa.me/919999999999" // TODO: replace with real WhatsApp number
              >
                Message on WhatsApp →
              </Button>
              <Button
                variant="ghost"
                href="mailto:nachiket@brinkco.in" // TODO: confirm real email
              >
                Email Me →
              </Button>
            </div>

            {/* Contact row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8 pt-8 border-t border-[--border] w-full flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              {contactItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[--text-3]">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-body text-[0.9rem] text-[--text-2] hover:text-[--lime] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-[0.9rem] text-[--text-2]">{item.value}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
