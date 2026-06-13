"use client";

import {
  Activity,
  Droplets,
  Flower2,
  Globe2,
  HeartPulse,
  Moon,
  Network,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const coverConfig: Record<
  string,
  { gradient: string; Icon: LucideIcon; pattern: string }
> = {
  uprace: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    Icon: Activity,
    pattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.22) 0%, transparent 42%)",
  },
  careio: {
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    Icon: HeartPulse,
    pattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 45%)",
  },
  alive: {
    gradient: "from-indigo-600 via-violet-600 to-fuchsia-500",
    Icon: Moon,
    pattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.25) 0%, transparent 45%)",
  },
  govietnam: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    Icon: Globe2,
    pattern: "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.2) 0%, transparent 40%)",
  },
  myflower: {
    gradient: "from-orange-400 via-rose-400 to-pink-500",
    Icon: Flower2,
    pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 50%)",
  },
  "iot-cyberattack": {
    gradient: "from-cyan-600 via-blue-600 to-indigo-700",
    Icon: Network,
    pattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
  },
  "cyber-risk-assessment": {
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    Icon: ShieldCheck,
    pattern: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 45%)",
  },
  "memory-forensics": {
    gradient: "from-violet-700 via-purple-700 to-indigo-800",
    Icon: ShieldCheck,
    pattern: "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.14) 0%, transparent 42%)",
  },
  "tgm-ramadan": {
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    Icon: Sparkles,
    pattern: "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.2) 0%, transparent 48%)",
  },
  "water-wise": {
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    Icon: Droplets,
    pattern: "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.2) 0%, transparent 45%)",
  },
  "iot-traffic-analysis": {
    gradient: "from-cyan-600 via-blue-600 to-indigo-700",
    Icon: Network,
    pattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
  },
  "uprace-nft": {
    gradient: "from-rose-500 via-orange-500 to-amber-400",
    Icon: Activity,
    pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
  },
};

type ProjectCoverProps = {
  slug: string;
  title: string;
  className?: string;
  showCaption?: boolean;
};

export function ProjectCover({
  slug,
  title,
  className = "",
  showCaption = true,
}: ProjectCoverProps) {
  const config = coverConfig[slug] ?? coverConfig.alive;
  const { gradient, Icon, pattern } = config;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      style={{ backgroundImage: pattern }}
    >
      <div className="noise-overlay absolute inset-0 opacity-30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.35),transparent_60%)]" />
      <Icon
        className="absolute -right-4 -top-4 h-32 w-32 text-white/15 sm:h-40 sm:w-40"
        strokeWidth={1}
        aria-hidden
      />
      {showCaption && (
        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <p className="font-sans text-xs font-medium text-white/80">
            Project preview
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {title}
          </p>
        </div>
      )}
    </div>
  );
}
