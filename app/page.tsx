import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustBar from "@/components/TrustBar";
import WhyMe from "@/components/WhyMe";
import About from "@/components/About";
import Services from "@/components/Services";
import MidCTAStrip from "@/components/MidCTAStrip";
import HowItWorks from "@/components/HowItWorks";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Hero />
      <Marquee />
      <TrustBar />
      <WhyMe />
      <About />
      <Services />
      <MidCTAStrip />
      <HowItWorks />
      <Work />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
