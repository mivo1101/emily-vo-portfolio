import { site } from "@/data/site";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export function QuoteStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-6 py-8 sm:py-10">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-5xl space-y-3 text-center sm:space-y-4">
        {site.quotes.map((line) => (
          <p key={line.quote} className="leading-snug">
            <span className="text-lg font-normal text-white/90 sm:text-xl lg:text-2xl">
              {line.lead}{" "}
            </span>
            <span className="text-gradient text-xl font-bold sm:text-[1.625rem] lg:text-[1.875rem]">
              &ldquo;{line.quote}&rdquo;
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}
