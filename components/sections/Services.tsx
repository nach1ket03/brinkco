'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

type ServiceCard = {
  number: string
  title: string
  description: string
  price: string
  tags: string[]
}

const services: ServiceCard[] = [
  {
    number: '01',
    title: 'Starter Site',
    description:
      'Landing pages for local businesses. Fast, mobile-first, WhatsApp-optimized. Delivered in under a week.',
    price: 'From ₹5,000',
    tags: ['Landing Page', '1 Week', 'WhatsApp Ready'],
  },
  {
    number: '02',
    title: 'Full Website',
    description:
      'Multi-page websites with CMS, SEO setup, and Google Analytics. For growing businesses that need more.',
    price: 'From ₹10,000',
    tags: ['Up to 5 Pages', 'SEO', 'CMS'],
  },
  {
    number: '03',
    title: 'Custom Web App',
    description:
      'React/Next.js applications with backend integration. API connections, payment gateways, custom features.',
    price: 'From ₹20,000',
    tags: ['Full-Stack', 'Custom Features', 'API Integration'],
  },
]

function ServiceCardComponent({ service, delay }: { service: ServiceCard; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className="group relative bg-[--bg-2] border border-[--border] rounded-sm p-8 overflow-hidden
        hover:bg-[--bg-3] transition-colors duration-300"
    >
      {/* Number watermark */}
      <span
        className="absolute top-4 right-6 font-display font-extrabold text-[3.5rem] text-[--lime] leading-none select-none pointer-events-none"
        style={{ opacity: 0.12 }}
        aria-hidden="true"
      >
        {service.number}
      </span>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[--lime] group-hover:w-full transition-all duration-400 ease-out" />

      <div className="flex flex-col gap-5 relative z-10">
        <h3 className="font-display font-bold text-[1.25rem] text-[--text-1]">
          {service.title}
        </h3>
        <p className="font-body text-[0.9rem] text-[--text-2] leading-relaxed">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <p className="font-display font-bold text-[--lime] text-[1.1rem] mt-2">
          {service.price}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-32 md:py-40 bg-[--bg-1]" aria-label="Services">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-16"
        >
          <SectionLabel className="mb-4">Services</SectionLabel>
          <h2
            className="font-display font-extrabold text-[--text-1]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
          >
            What I build for clients.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <ServiceCardComponent key={service.number} service={service} delay={0.1 + i * 0.1} />
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
          className="border-t border-[--lime-border] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="font-body text-[--text-2] text-[0.95rem]">
            Not sure what you need? Let&apos;s chat first.
          </p>
          <Button
            variant="primary"
            href="https://wa.me/919999999999" // TODO: replace with real WhatsApp number
          >
            Start on WhatsApp →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
