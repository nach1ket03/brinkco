import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyCTA from "@/components/StickyCTA";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Get More Customers From Your Website | Nachiket — Brink Co",
  description: "Pune-based web designer helping local businesses get 10-20 new enquiries every week. Free demo first. Delivered in 3-7 days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} font-body antialiased relative selection:bg-lime selection:text-bg`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <StickyCTA />
      </body>
    </html>
  );
}
