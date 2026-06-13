import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { QuoteStrip } from "@/components/sections/QuoteStrip";
import { Experience } from "@/components/sections/Experience";
import { Beyond } from "@/components/sections/Beyond";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

const marqueeItems = [
  "Figma",
  "Python",
  "Deakin MIT",
  "Melbourne",
  "Software & Web",
  "Marketing → IT",
  "Contentful",
  "Builder",
  "HCMC → AU",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Marquee items={marqueeItems} />
        <Stats />
        <Skills />
        <QuoteStrip />
        <Projects />
        <Experience />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
