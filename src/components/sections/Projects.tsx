"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AppWindow,
  FileText,
  Globe,
  Newspaper,
  Presentation,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { workCategories, type WorkLink, type WorkProject } from "@/data/portfolio-work";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GitHubIcon } from "@/components/ui/SocialIcons";

function resolveLinkIcon(label: string, href: string): LucideIcon | "github" {
  const name = label.toLowerCase();
  const url = href.toLowerCase();

  if (name.includes("github") || url.includes("github.com")) return "github";
  if (name.includes("report") || url.endsWith(".pdf")) return FileText;
  if (name.includes("presentation") || url.includes("canva.")) return Presentation;
  if (name.includes("landing")) return AppWindow;
  if (name.includes("prototype")) return Smartphone;
  if (name.includes("website")) return Globe;
  if (url.includes("figma.com")) return AppWindow;
  if (name.includes("publication")) return Newspaper;

  return Globe;
}

function WorkLinkButton({ label, href }: WorkLink) {
  const icon = resolveLinkIcon(label, href);
  const Icon = icon === "github" ? null : icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A] text-white transition-opacity hover:opacity-90"
    >
      {icon === "github" ? (
        <GitHubIcon className="h-5 w-5" />
      ) : (
        Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />
      )}
    </a>
  );
}

function WorkCard({ project }: { project: WorkProject }) {
  return (
    <article className="interactive-card relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#F2F2F7] hover:z-10 hover:shadow-[0_20px_44px_-24px_rgba(15,23,42,0.28)]">
      {project.coverImage ? (
        <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-48">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center"
          />
        </div>
      ) : (
        <ProjectCover
          slug={project.coverSlug}
          title={project.title}
          showCaption={false}
          className="h-44 w-full shrink-0 sm:h-48"
        />
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm font-semibold text-[#F59E0B]">{project.year}</p>

        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-[#0F172A] sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748B] sm:text-[0.9375rem]">
          {project.description}
        </p>

        {project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <WorkLinkButton key={`${link.label}-${link.href}`} {...link} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [activeId, setActiveId] = useState(workCategories[0]?.id ?? "business");
  const activeCategory =
    workCategories.find((category) => category.id === activeId) ??
    workCategories[0];

  return (
    <section id="work" className="bg-white px-6 pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pb-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-[#64748B]">
              Selected work
            </p>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-tight tracking-tight text-[#0F172A] sm:text-[2.5rem] lg:text-[2.75rem]">
              Work that <span className="text-gradient">Speaks</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3">
            {workCategories.map((category) => {
              const isActive = category.id === activeId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
                    isActive
                      ? "bg-[#0F172A] text-white"
                      : "border-gradient bg-[#FAFAFA] text-[#0F172A]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
          {activeCategory.projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 50}
              className={activeCategory.projects.length === 1 ? "sm:max-w-md" : ""}
            >
              <WorkCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
