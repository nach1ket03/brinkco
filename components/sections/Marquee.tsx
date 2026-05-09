const items = [
  'Next.js',
  'React',
  'Node.js',
  'MongoDB',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Conversion Design',
  'REST APIs',
  'Full-Stack',
  'Pune Based',
  'MERN Stack',
  'Open to Work',
]

function Track({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className={`flex whitespace-nowrap ${
          reverse ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 font-mono text-[0.75rem] text-[--text-3] uppercase tracking-widest px-6"
          >
            {item}
            <span className="text-[--lime]" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      className="border-t border-b border-[--lime-border] bg-[--bg-1] py-4 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-3">
        <Track items={items} />
        <Track items={items} reverse />
      </div>
    </div>
  )
}
