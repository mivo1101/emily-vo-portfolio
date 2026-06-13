import Image from "next/image";
import { site } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function AboutCard() {
  const { card } = site.about;

  return (
    <div className="relative mx-auto h-[23.5rem] w-[19.25rem] sm:h-[25rem] sm:w-[20.5rem]">
      <div
        aria-hidden
        className="absolute inset-0 rounded-[1.35rem] bg-[#F59E0B]"
        style={{ transform: "rotate(-7deg) translate(-10px, 18px)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-[1.35rem] bg-[#FE27C1]"
        style={{ transform: "rotate(5deg) translate(8px, 10px)" }}
      />
      <div className="relative overflow-hidden rounded-[1.35rem] bg-white shadow-[0_24px_48px_rgba(0,0,0,0.22)]">
        <div className="relative h-[12.5rem] w-full sm:h-[13.25rem]">
          <Image
            src="/images/emily-about.jpg"
            alt="Emily Vo"
            fill
            sizes="(max-width: 768px) 308px, 328px"
            className="object-cover object-top"
          />
        </div>
        <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
          <p className="font-display text-[1.35rem] font-bold leading-tight text-[#0F172A]">
            {card.name}
          </p>
          <p className="mt-1 text-sm text-[#94A3B8]">{card.fullLine}</p>
          <div className="mt-4 border-t border-[#E2E8F0] pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#94A3B8]">Bachelor</p>
                <p className="mt-1 text-sm font-bold leading-snug text-[#0F172A]">
                  {card.bachelor}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#94A3B8]">Master</p>
                <p className="mt-1 text-sm font-bold leading-snug text-[#0F172A]">
                  {card.master}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-[#0F172A] px-6 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 xl:gap-20">
        <div>
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-wide text-white">
              <span className="text-white/50">|</span> {site.about.label}
            </p>
            <h2 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-[2.75rem] lg:text-[3rem]">
              <span className="text-gradient">Why</span>{" "}
              <span className="text-white">Tech?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-6 space-y-5 text-base leading-[1.75] text-white/90 sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.8]">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={120}>
          <AboutCard />
        </ScrollReveal>
      </div>
    </section>
  );
}
