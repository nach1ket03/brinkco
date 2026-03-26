import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-3 h-3 rounded-full bg-lime" />
          <span className="font-display font-bold md:text-xl tracking-tight text-white hover:text-lime transition-colors">
            Brink Co
          </span>
        </Link>
        <div className="flex gap-6 text-sm text-white/50">
          <Link href="#why-me" className="hover:text-lime transition-colors">Why Me</Link>
          <Link href="#services" className="hover:text-lime transition-colors">Services</Link>
          <Link href="#pricing" className="hover:text-lime transition-colors">Pricing</Link>
        </div>
        <div className="text-sm text-white/50">
          © {new Date().getFullYear()} Nachiket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
