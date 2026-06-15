export type WorkLink = {
  label: string;
  href: string;
};

export type WorkProject = {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  links: WorkLink[];
  coverSlug: string;
  coverImage?: string;
};

export type WorkCategory = {
  id: string;
  label: string;
  projects: WorkProject[];
};

export const workCategories: WorkCategory[] = [
  {
    id: "business",
    label: "Business & Strategy",
    projects: [
      {
        id: "uprace",
        title: "Enhancing User Engagement for the UpRace Application",
        year: "2023",
        description:
          "Developed a user engagement strategy through market research and user analysis. Awarded 9.5/10 in the final thesis defence.",
        tags: ["Business Strategy", "Market Research", "Consumer Insights"],
        coverSlug: "uprace",
        coverImage: "/images/projects/uprace-cover.png",
        links: [
          { label: "Report", href: "/documents/uprace-report.pdf" },
          { label: "Presentation", href: "/documents/uprace-presentation.pdf" },
        ],
      },
    ],
  },
  {
    id: "digital-product",
    label: "Digital Product Development",
    projects: [
      {
        id: "careio",
        title: "Careio",
        year: "2026",
        description:
          "Designed a medication management solution for older adults, focusing on accessibility, usability, and user-centred experiences.",
        tags: ["UX/UI Design", "Figma", "Healthcare", "User Research"],
        coverSlug: "careio",
        coverImage: "/images/projects/careio-cover.png",
        links: [
          {
            label: "Landing Page",
            href: "https://www.figma.com/proto/W869SPdjRsYC7ExbTVZr8s/Careio?node-id=1-2&t=2oMjfgT1ff9sV3mq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
          },
          {
            label: "High-fi Prototype",
            href: "https://www.figma.com/proto/W869SPdjRsYC7ExbTVZr8s/Careio?node-id=68-33&p=f&t=fkQFPLlQQqJD8COO-1&scaling=scale-down&content-scaling=fixed&page-id=20%3A32&starting-point-node-id=68%3A33&show-proto-sidebar=1",
          },
        ],
      },
      {
        id: "alive",
        title: "Alive",
        year: "2025",
        description:
          "Designed and developed responsive web interfaces, translating user requirements into functional and engaging digital experiences.",
        tags: ["Design Lead", "Responsive Design", "Front-End", "User Experience"],
        coverSlug: "alive",
        coverImage: "/images/projects/alive-cover.png",
        links: [
          { label: "GitHub", href: "https://github.com/sleepTrackerApp/sleepTrackerApp" },
          {
            label: "Website",
            href: "https://sleep-tracker-app-rho.vercel.app/",
          },
        ],
      },
      {
        id: "govietnam",
        title: "GoVietnam",
        year: "2024",
        description:
          "Developed a tourism-focused web platform featuring responsive layouts, navigation systems, and user-friendly travel experiences.",
        tags: ["Web Development", "HTML/CSS", "Front-End", "Tourism"],
        coverSlug: "govietnam",
        coverImage: "/images/projects/govietnam-cover.png",
        links: [
          { label: "GitHub", href: "https://github.com/mivo1101/GoVietnam" },
          {
            label: "Website",
            href: "https://govietnam.vercel.app/home",
          },
        ],
      },
      {
        id: "myflower",
        title: "MyFlower",
        year: "2024",
        description:
          "Applied object-oriented programming principles in C# to develop an interactive game with structured logic and modular design.",
        tags: ["C#", "OOP", "Game Development"],
        coverSlug: "myflower",
        links: [],
      },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity & Digital Forensics",
    projects: [
      {
        id: "iot-cyberattack",
        title: "IoT Cyberattack Analysis",
        year: "2025",
        description:
          "Investigated IoT cyberattacks through network traffic analysis, identifying attack patterns and malicious communication behaviours using packet-level evidence.",
        tags: ["Wireshark", "Network Security", "IoT Security", "Traffic Analysis"],
        coverSlug: "iot-cyberattack",
        coverImage: "/images/projects/iot-cyberattack-cover.png",
        links: [
          {
            label: "Presentation",
            href: "https://canva.link/5wgc9psbmrbf8p0",
          },
        ],
      },
      {
        id: "cyber-risk-assessment",
        title: "Cyber Security Risk Assessment",
        year: "2025",
        description:
          "Collaborated on a risk assessment, evaluating threats, vulnerabilities, and impact across an organisational scenario to recommend security controls and mitigation priorities.",
        tags: [
          "Risk Assessment",
          "Cybersecurity Management",
          "Threat Analysis",
          "Mitigation Planning",
        ],
        coverSlug: "cyber-risk-assessment",
        coverImage: "/images/projects/cyber-risk-assessment-cover.png",
        links: [
          {
            label: "Presentation",
            href: "https://canva.link/bu3z0p1e996lvjz",
          },
        ],
      },
      {
        id: "memory-forensics",
        title: "Memory and Volatile Data Forensics",
        year: "2026",
        description:
          "Analysed volatile memory artefacts to recover evidence of system activity and investigate simulated security incidents.",
        tags: ["Digital Forensics", "Memory Analysis", "Linux", "Investigation"],
        coverSlug: "memory-forensics",
        coverImage: "/images/projects/memory-forensics-cover.png",
        links: [
          {
            label: "Presentation",
            href: "https://canva.link/9dwuq01l33k19td",
          },
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing Insights",
    projects: [
      {
        id: "tgm-ramadan",
        title: "TGM Global Ramadan Insights 2024",
        year: "2024",
        description:
          "Led the content strategy and development of a global insights campaign, transforming large-scale research findings into accessible business insights for international audiences.",
        tags: [
          "Content Strategy",
          "Consumer Insights",
          "Project Leadership",
          "Data Storytelling",
        ],
        coverSlug: "tgm-ramadan",
        links: [
          {
            label: "Publication",
            href: "https://tgmresearch.com/ramadan-insights-2024-global-study.html",
          },
        ],
      },
      {
        id: "water-wise",
        title: "Water Wise: Shaping Sustainable Cities",
        year: "2024",
        description:
          "Collaborated on developing content and research-driven insights exploring sustainability challenges and public attitudes towards urban water management.",
        tags: [
          "Research Insights",
          "Sustainability",
          "Data Storytelling",
          "Content Development",
          "Consumer Research",
        ],
        coverSlug: "water-wise",
        links: [
          {
            label: "Publication",
            href: "https://tgmresearch.com/tgm-expert-perspective-water-wise.html",
          },
        ],
      },
    ],
  },
];
