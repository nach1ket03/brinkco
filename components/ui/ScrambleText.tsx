'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&?!'

type Props = {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function ScrambleText({ text, className, delay = 0, speed = 35 }: Props) {
  const [display, setDisplay] = useState<string>(() => text.replace(/[^ ]/g, CHARSET[0]))
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const resolved = useRef(false)

  useEffect(() => {
    if (!inView || resolved.current) return
    resolved.current = true

    const startTimeout = setTimeout(() => {
      let frame = 0
      const totalFrames = text.length * 5

      const tick = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (i < Math.floor(frame / 5)) return text[i]
              return CHARSET[Math.floor(Math.random() * CHARSET.length)]
            })
            .join('')
        )
        frame++
        if (frame > totalFrames) {
          clearInterval(tick)
          setDisplay(text)
        }
      }, speed)

      return () => clearInterval(tick)
    }, delay * 1000)

    return () => clearTimeout(startTimeout)
  }, [inView, text, delay, speed])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  )
}
