export type BeyondGalleryItem = {
  id: string;
  image: string;
  alt: string;
  title?: string;
  description: string;
  tileClass: string;
};

export const beyondGalleryItems: BeyondGalleryItem[] = [
  {
    id: "innofest",
    image: "/images/beyond/innofest.png",
    alt: "Deakin InnoFest 2025 crew photo",
    title: "Deakin InnoFest 2025",
    description:
      "I joined as a crew member at InnoFes 2025 with Deakin SIT Innovation team, supporting event operations and student project showcases.",
    tileClass: "beyond-tile-innofest",
  },
  {
    id: "artisan-ornaments",
    image: "/images/beyond/artisan-ornaments.png",
    alt: "Working at Artisan Ornaments",
    description: "My favourite Christmas job at Artisan Ornaments",
    tileClass: "beyond-tile-artisan",
  },
  {
    id: "christmas-bauble",
    image: "/images/beyond/christmas-bauble.png",
    alt: "Hand-painted Christmas bauble",
    description: "I hand-pained the baubles. I super enjoy doing this!",
    tileClass: "beyond-tile-bauble",
  },
  {
    id: "vlog-mirror",
    image: "/images/beyond/vlog-mirror.png",
    alt: "Vlogging in a mirror selfie",
    description:
      'I also enjoy vlogging and editing when I have a mood for. Or maybe just filling up my phone storage with footage I\'ll edit "someday" haha!',
    tileClass: "beyond-tile-vlog",
  },
  {
    id: "basketball",
    image: "/images/beyond/basketball.png",
    alt: "High school basketball game",
    description: "I was a key player of my high school's basketball team.",
    tileClass: "beyond-tile-basketball",
  },
  {
    id: "cooking",
    image: "/images/beyond/cooking.png",
    alt: "Homemade sushi rolls",
    description: "I love cooking (but not cleaning the mess I made) :)",
    tileClass: "beyond-tile-cooking",
  },
  {
    id: "paper-crane",
    image: "/images/beyond/paper-crane.png",
    alt: "Origami paper crane",
    description: "Making paper cranes during free time for kids coming :)",
    tileClass: "beyond-tile-crane",
  },
  {
    id: "milk-tea",
    image: "/images/beyond/milk-tea.png",
    alt: "Favourite snack and milk tea",
    description: "My favourite snack and milk tea brand ever :)",
    tileClass: "beyond-tile-milk-tea",
  },
  {
    id: "travel",
    image: "/images/beyond/travel.png",
    alt: "Coastal travel photo",
    description:
      "I enjoyed traveling with beloved ones and taking photos of every moments!",
    tileClass: "beyond-tile-travel",
  },
];
