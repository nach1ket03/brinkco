import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CommandPalette from '@/components/ui/CommandPalette'
import Cursor from '@/components/ui/Cursor'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nachiket | Developer & Designer — Brink Co',
    template: '%s | Brink Co',
  },
  description:
    'Full-stack web developer and designer based in Pune. I build conversion-focused websites for local businesses and Next.js applications for product ideas.',
  keywords: [
    'web developer',
    'Pune',
    'Next.js',
    'MERN stack',
    'freelance',
    'Brink Co',
    'Nachiket',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://brinkco.vercel.app',
    siteName: 'Brink Co',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  )
}
