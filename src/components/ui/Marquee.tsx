"use client";

type MarqueeProps = {
  items: string[];
  speed?: "slow" | "normal";
};

export function Marquee({ items, speed = "normal" }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden border-y border-border bg-surface py-4">
      <div
        className={`marquee-track flex w-max items-center gap-10 ${
          speed === "slow" ? "marquee-slow" : "marquee-normal"
        }`}
      >
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.25em] text-foreground/70"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
