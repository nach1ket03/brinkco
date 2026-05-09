import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[--bg-1] border-t border-[--lime-border] py-6">
      <div className="max-w-content mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.8rem]">
        {/* Left */}
        <div className="flex items-center gap-2 font-display font-extrabold text-[--text-1]">
          <span className="text-[--lime]">·</span>
          Brink Co
          <span className="font-body font-normal text-[--text-3] ml-2">© 2026 Nachiket</span>
        </div>

        {/* Center */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          <Link
            href="#work"
            className="font-body text-[--text-3] hover:text-[--text-2] transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="font-body text-[--text-3] hover:text-[--text-2] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="https://github.com/nach1ket03"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[--text-3] hover:text-[--text-2] transition-colors duration-200"
          >
            GitHub
          </Link>
        </nav>

        {/* Right */}
        <p className="font-mono text-[--text-3] text-[0.7rem]">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
