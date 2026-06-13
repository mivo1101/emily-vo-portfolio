import Image from "next/image";
import { beyondGalleryItems, type BeyondGalleryItem } from "@/data/beyond-gallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

function BeyondFlipCard({ item }: { item: BeyondGalleryItem }) {
  return (
    <div
      className={`beyond-flip ${item.tileClass}`}
      tabIndex={0}
      aria-label={`${item.title ?? item.alt}: ${item.description}`}
    >
      <div className="beyond-flip-inner h-full w-full">
        <div className="beyond-flip-face beyond-flip-front relative overflow-hidden rounded-2xl ring-2 ring-white">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes={
              item.id === "innofest"
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                : "(max-width: 1024px) 45vw, 180px"
            }
            quality={90}
            className="object-cover object-center"
          />
        </div>

        <div className="beyond-flip-face beyond-flip-back rounded-2xl bg-[#F2F2F7] p-3 ring-2 ring-white sm:p-4">
          <div className="flex h-full flex-col items-center justify-center text-center">
            {item.title && (
              <p className="font-display text-sm font-bold leading-snug text-[#0F172A] sm:text-[0.9375rem]">
                {item.title}
              </p>
            )}
            <p
              className={`text-xs leading-snug text-[#64748B] sm:text-[0.8125rem] ${
                item.title ? "mt-1.5" : ""
              }`}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Beyond() {
  return (
    <section id="beyond" className="relative overflow-hidden bg-[#0F172A] px-6 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex justify-end">
            <h2 className="font-display text-[1.75rem] font-bold leading-tight tracking-tight text-white sm:text-[2.125rem] lg:text-[2.25rem]">
              <span className="text-gradient">Beyond</span> the Screen
            </h2>
          </div>
        </ScrollReveal>

        <div className="beyond-gallery mt-8 sm:mt-10 lg:mt-12">
          {beyondGalleryItems.map((item) => (
            <BeyondFlipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
