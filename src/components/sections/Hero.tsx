import Link from "next/link";
import { ChevronDown, Download } from "lucide-react";
import { site } from "@/data/site";
import { HeroGallery } from "@/components/ui/HeroGallery";
import { GradientAtmosphere } from "@/components/ui/GradientAtmosphere";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-6 pt-5 sm:pt-6">
      <GradientAtmosphere />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full bg-badge px-5 py-2.5 text-base font-semibold uppercase text-foreground">
          {site.hero.badge}
        </div>

        <h1 className="mt-5 w-full font-display">
          <span className="block text-[1.875rem] font-medium leading-tight text-foreground sm:text-[2.125rem] lg:text-[2.375rem]">
            &ldquo;I used to sell ideas.
          </span>
          <span className="text-gradient mt-1 block text-[2.625rem] font-extrabold italic leading-[1.02] sm:text-[3.25rem] lg:text-[3.75rem]">
            Now I build them.&rdquo;
          </span>
        </h1>

        <p className="mt-7 max-w-[50rem] text-base leading-relaxed text-[#5C6678] sm:mt-8">
          {site.hero.subline.split("\n").map((line, index, lines) => (
            <span key={line}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
          <a
            href={site.contact.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" strokeWidth={2} />
            Download CV
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border-gradient bg-surface px-5 py-2.5 text-base font-semibold text-foreground transition-transform hover:scale-[1.02]"
          >
            Contact Me
            <ChevronDown className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-6 w-full max-w-6xl sm:mt-7">
        <HeroGallery />
      </div>
    </section>
  );
}
