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
      "I joined as a crew member at InnoFest 2025 with the Deakin SIT Innovation team, supporting event operations and student project showcases.",
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
    description: "I hand-painted the baubles and really enjoyed doing it!",
    tileClass: "beyond-tile-bauble",
  },
  {
    id: "vlog-mirror",
    image: "/images/beyond/vlog-mirror.png",
    alt: "Vlogging in a mirror selfie",
    description:
      'I enjoy vlogging, editing, and filling my phone with footage I\'ll edit "someday", haha!',
    tileClass: "beyond-tile-vlog",
  },
  {
    id: "basketball",
    image: "/images/beyond/basketball.png",
    alt: "High school basketball game",
    description: "I was a key player on my high school's basketball team.",
    tileClass: "beyond-tile-basketball",
  },
  {
    id: "cooking",
    image: "/images/beyond/cooking.png",
    alt: "Homemade sushi rolls",
    description: "I love cooking (but not cleaning up the mess I make) :)",
    tileClass: "beyond-tile-cooking",
  },
  {
    id: "paper-crane",
    image: "/images/beyond/paper-crane.png",
    alt: "Origami paper crane",
    description: "I make paper cranes in my free time for visiting children :)",
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
      "I enjoy travelling with loved ones and taking photos of every moment!",
    tileClass: "beyond-tile-travel",
  },
];
