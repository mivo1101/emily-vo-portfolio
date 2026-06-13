import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Box,
  Braces,
  Code2,
  Database,
  FileText,
  Globe,
  Mic,
  Monitor,
  Network,
  Presentation,
  Radar,
  Route,
  ScanSearch,
  Server,
  Shield,
  Terminal,
  TrendingUp,
} from "lucide-react";

export type SkillEntry = {
  name: string;
  proficiency: string;
  description: string;
  icon: LucideIcon;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: SkillEntry[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming Languages",
    skills: [
      {
        name: "HTML/CSS",
        proficiency: "Foundational",
        description:
          "Built responsive interfaces and user flows for the GoVietnam tourism website and Alive well-being platform.",
        icon: Globe,
      },
      {
        name: "C#",
        proficiency: "Foundational",
        description:
          "Developed the MyFlower game, applying OOP concepts such as classes, encapsulation, and modular game logic.",
        icon: Code2,
      },
      {
        name: "SQL",
        proficiency: "Foundational",
        description:
          "Query and manage relational databases, including data retrieval, filtering, and aggregation.",
        icon: Database,
      },
      {
        name: "Python",
        proficiency: "Foundational",
        description:
          "Develop and evaluate machine learning models, alongside automation and data analysis in cybersecurity projects.",
        icon: Braces,
      },
    ],
  },
  {
    id: "systems",
    label: "System & Virtualisation",
    skills: [
      {
        name: "VMware",
        proficiency: "Foundational",
        description:
          "Configured and managed multi-VM lab environments for networking, cybersecurity, and digital forensics projects.",
        icon: Server,
      },
      {
        name: "VirtualBox",
        proficiency: "Foundational",
        description:
          "Deployed virtual machines and isolated test environments for operating system, networking, and security exercises.",
        icon: Box,
      },
      {
        name: "Kali Linux",
        proficiency: "Foundational",
        description:
          "Performed security testing, network analysis, and forensic investigations using command-line and security assessment tools.",
        icon: Terminal,
      },
      {
        name: "Ubuntu",
        proficiency: "Foundational",
        description:
          "Managed Linux environments for development, networking, and system administration tasks within virtual lab setups.",
        icon: Monitor,
      },
    ],
  },
  {
    id: "security",
    label: "Security & Networking",
    skills: [
      {
        name: "Wireshark",
        proficiency: "Foundational",
        description:
          "Captured and analysed network traffic to investigate communication patterns, protocols, and potential security threats.",
        icon: Network,
      },
      {
        name: "Nmap",
        proficiency: "Foundational",
        description:
          "Conducted host discovery, service enumeration, and vulnerability assessments within controlled lab environments.",
        icon: Radar,
      },
      {
        name: "Metasploit",
        proficiency: "Foundational",
        description:
          "Explored penetration testing methodologies through vulnerability validation and exploitation exercises.",
        icon: Shield,
      },
      {
        name: "pfSense",
        proficiency: "Foundational",
        description:
          "Configured and evaluated firewall rules, network segmentation, and traffic control policies in virtual environments.",
        icon: Server,
      },
      {
        name: "Firewalk",
        proficiency: "Foundational",
        description:
          "Analysed firewall filtering behaviour and permitted network paths using traceroute-based techniques.",
        icon: Route,
      },
      {
        name: "Traffic Analysis",
        proficiency: "Foundational",
        description:
          "Investigated packet-level network activity to identify communication behaviours and indicators of compromise.",
        icon: TrendingUp,
      },
      {
        name: "Vulnerability Assessment",
        proficiency: "Foundational",
        description:
          "Evaluated systems and services for potential security weaknesses through scanning and enumeration techniques.",
        icon: ScanSearch,
      },
    ],
  },
  {
    id: "content",
    label: "Content & Presenting",
    skills: [
      {
        name: "Presentation Design",
        proficiency: "Proficient",
        description:
          "Created visual presentations that communicate technical concepts, project outcomes, and research findings to diverse audiences.",
        icon: Presentation,
      },
      {
        name: "Public Speaking",
        proficiency: "Proficient",
        description:
          "Delivered project presentations, technical demonstrations, and thesis defences to academic and professional audiences.",
        icon: Mic,
      },
      {
        name: "Technical Writing",
        proficiency: "Proficient",
        description:
          "Produced reports, case studies, and research-based content that translate complex information into clear insights.",
        icon: FileText,
      },
      {
        name: "Data Storytelling",
        proficiency: "Proficient",
        description:
          "Transformed research findings and analytical results into engaging narratives for decision-making and communication.",
        icon: BarChart3,
      },
    ],
  },
];
