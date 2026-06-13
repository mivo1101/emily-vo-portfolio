export type MilestoneType = "study" | "employment";

export type MilestoneSection = {
  title?: string;
  subtitle?: string;
  items: string[];
  variant?: "plain" | "bullet" | "plus";
};

export type Milestone = {
  id: string;
  type: MilestoneType;
  institution: string;
  headline: string;
  subheadline?: string;
  period: string;
  location: string;
  logo: string;
  logoFit: "square" | "cover" | "contain";
  logoScale?: number;
  sections: MilestoneSection[];
};

export const milestones: Milestone[] = [
  {
    id: "deakin",
    type: "study",
    institution: "DEAKIN UNIVERSITY",
    headline: "Master of Information Technology",
    subheadline: "Specialisation: Cybersecurity",
    period: "June 2024 – June 2026",
    location: "Melbourne, Australia",
    logo: "/images/logos/deakin.png",
    logoFit: "contain",
    sections: [
      {
        variant: "plain",
        items: ["GPA (100 scale): 83.857 (Updating)"],
      },
      {
        items: ["Support Deakin InnoFes 2025 as a Crew Member"],
      },
      {
        title: "Achived High HD Grade in Units - HD Projects:",
        items: [
          "Research and Development in Information Technology: 98",
          "Database Fundamentals: 95 (Machine Learning in Data Management)",
          "Computer Networks and Security: 95 (Analysing IoT Cyberattacks Using Network Traffic Data)",
          "Web Technologies and Development: 90 (GoVietnam)",
          "Applied Software Engineering: 90 (Alive)",
        ],
        variant: "plus",
      },
    ],
  },
  {
    id: "tgm",
    type: "employment",
    institution: "TGM RESEARCH",
    headline: "Marketing Assistant",
    period: "May 2023 – May 2024",
    location: "Vietnam",
    logo: "/images/logos/tgm-icon.png",
    logoFit: "square",
    sections: [
      {
        items: [
          "Prepared weekly social content (LinkedIn, Facebook, Instagram, TikTok) and website content (articles, case studies, press releases, and essential company and employee updates).",
          "Updated website content using Joomla and Elfsight, and EDM using Stripo.",
          "Designed assets (infographics, videos, banners) using Canva and Capcut.",
          "Prepared periodical reports (company's LinkedIn performance, campaign performance, industry research, and competitors' performance analysis).",
          "Led TGMstories (employer branding project about TGM's people), Mother's Day 2024 (internal campaign), and Ramadan Insights 2024 (global project across Indonesia, Egypt, the UAE, and Saudi Arabia).",
        ],
      },
    ],
  },
  {
    id: "isb",
    type: "study",
    institution: "UEH - ISB",
    headline: "Bachelor of Business Administration",
    subheadline: "Specialisation: International Business",
    period: "September 2022 – September 2023",
    location: "Vietnam",
    logo: "/images/logos/isb.png",
    logoFit: "square",
    sections: [
      {
        variant: "plain",
        items: [
          "GPA (4 scale): 3.18",
          "Final Business Project - Thesis Defence: 9.5/10",
        ],
      },
      {
        title: "Extra-curricular activities:",
        items: [
          "Completed the ISB Leadership Program, and the Critical Thinking Skill Course of Thinking School.",
          "Supported the ISB Gavel Club for the English Speaking Contest Gala Finals and Team Building.",
          "Achieved the 'Top 6 best-performed team' award in Marketing Competition 2021 - Colorful Minds.",
          "Initiated the idea of the Suntan Lotion Paper Vending Machine in the L'Oréal Brandstorm's competition.",
          "Became an Ambassador of iVolunteer Vietnam 2021.",
        ],
      },
    ],
  },
  {
    id: "vng",
    type: "employment",
    institution: "VNG CORPORATION",
    headline: "Associate Marketing Executive - UpRace Team",
    period: "June 2022 – February 2023",
    location: "Vietnam",
    logo: "/images/logos/vng-stacked.png",
    logoFit: "square",
    sections: [
      {
        items: [
          "Supported Marketing activities for a sports activity tracker application.",
          "In charge of internal updates, including documentation revamp, Marketing plan, application's new version updates.",
          "Planned promotional launches, including video scripts, agency coordination, translation, web content, and assets.",
        ],
      },
      {
        title: "Marketing Fresher - NFT Team",
        subtitle: "VNG Level Up Fresher Program 2022",
        items: [
          "Researched on Blockchain and NFT trends, and initiated a Marketing plan for the NFT Platform.",
        ],
      },
    ],
  },
];

/** @deprecated Use milestones instead */
export const experience = milestones;
