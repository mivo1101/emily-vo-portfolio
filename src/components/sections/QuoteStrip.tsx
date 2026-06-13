import { site } from "@/data/site";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export function QuoteStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-6 py-10 sm:py-12">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-5xl space-y-3 text-center sm:space-y-4">
        {site.quotes.map((line) => (
          <p key={line.quote} className="leading-snug">
            <span className="text-xl font-normal text-white/90 sm:text-2xl lg:text-[1.75rem]">
              {line.lead}{" "}
            </span>
            <span className="text-gradient text-2xl font-bold sm:text-3xl lg:text-[2.125rem]">
              &ldquo;{line.quote}&rdquo;
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}
