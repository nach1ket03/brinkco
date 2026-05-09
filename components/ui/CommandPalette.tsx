'use client'

import { useEffect, useState, useCallback } from 'react'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'

type CommandItem = {
  label: string
  group: string
  action: () => void
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const navigate = useCallback(
    (href: string) => {
      setOpen(false)
      if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('https://wa')) {
        window.open(href, '_blank', 'noopener,noreferrer')
      } else if (href.startsWith('#')) {
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(href)
      }
    },
    [router]
  )

  const commands: CommandItem[] = [
    { group: 'NAVIGATE', label: 'Go to Work', action: () => navigate('#work') },
    { group: 'NAVIGATE', label: 'Go to About', action: () => navigate('#about') },
    { group: 'NAVIGATE', label: 'Go to Contact', action: () => navigate('#contact') },
    {
      group: 'LINKS',
      label: 'Open GitHub',
      action: () => navigate('https://github.com/nach1ket03'),
    },
    {
      group: 'LINKS',
      label: 'Open Resume',
      action: () => navigate('#'), // TODO: replace with real resume PDF link
    },
    {
      group: 'LINKS',
      label: 'Message on WhatsApp',
      action: () => navigate('https://wa.me/919999999999'), // TODO: replace with real number
    },
    {
      group: 'PROJECTS',
      label: 'View AURA Fitness',
      action: () => navigate('/work/aura-fitness'),
    },
    {
      group: 'PROJECTS',
      label: 'View LUMIÈRE',
      action: () => navigate('/work/lumiere'),
    },
    {
      group: 'PROJECTS',
      label: 'View InternBot',
      action: () => navigate('/work/internbot'),
    },
  ]

  const groups = Array.from(new Set(commands.map((c) => c.group)))

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      <div
        className="relative w-full max-w-xl mx-4"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Command palette"
        aria-modal="true"
      >
        <Command
          className="bg-[--bg-2] border border-[--lime-border] rounded-sm overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          label="Command palette"
        >
          <div className="flex items-center border-b border-[--border] px-4">
            <span className="font-mono text-[--text-3] text-sm mr-3">⌘</span>
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent font-mono text-[--text-1] text-[1rem] py-4 outline-none placeholder:text-[--text-3]"
              autoFocus
            />
          </div>

          <Command.List className="max-h-80 overflow-y-auto py-2">
            <Command.Empty className="font-body text-[--text-3] text-sm px-4 py-8 text-center">
              No results found.
            </Command.Empty>

            {groups.map((group) => (
              <Command.Group
                key={group}
                heading={
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[--text-3] px-4 py-2 block">
                    {group}
                  </span>
                }
              >
                {commands
                  .filter((c) => c.group === group)
                  .map((cmd) => (
                    <Command.Item
                      key={cmd.label}
                      onSelect={cmd.action}
                      className="font-body text-[0.9rem] text-[--text-2] px-4 py-2.5 cursor-pointer
                        data-[selected=true]:bg-[--bg-3] data-[selected=true]:text-[--text-1]
                        data-[selected=true]:border-l-2 data-[selected=true]:border-[--lime]
                        transition-colors duration-100 outline-none"
                    >
                      {cmd.label}
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
