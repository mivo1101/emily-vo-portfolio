export type HeroImage = {
  src: string;
  alt: string;
  flex: number;
  height: number;
};

export const heroImages: HeroImage[] = [
  {
    src: "/images/hero/vng-games.png",
    alt: "Emily at a VNG Games event",
    flex: 1.35,
    height: 118,
  },
  {
    src: "/images/hero/graduation.png",
    alt: "Emily on graduation day",
    flex: 0.88,
    height: 148,
  },
  {
    src: "/images/hero/portrait.png",
    alt: "Emily Vo portrait",
    flex: 1.55,
    height: 200,
  },
  {
    src: "/images/hero/team.png",
    alt: "Emily with colleagues",
    flex: 1.42,
    height: 132,
  },
  {
    src: "/images/hero/coffee.png",
    alt: "Emily with a colleague over coffee",
    flex: 1.05,
    height: 114,
  },
];
