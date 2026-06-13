"use client";

import { useState } from "react";
import Image from "next/image";
import { milestones, type Milestone, type MilestoneSection } from "@/data/experience";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Filter = "all" | "study" | "employment";

function accentColor(type: Milestone["type"]) {
  return type === "study" ? "#F59E0B" : "#FE27C1";
}

function MilestoneDetails({
  sections,
  side,
}: {
  sections: MilestoneSection[];
  side: "left" | "right";
}) {
  const isRightAligned = side === "left";

  return (
    <div
      className={`mt-1 flex flex-col gap-1 text-xs leading-relaxed text-[#64748B] sm:text-[0.8125rem] ${
        isRightAligned ? "lg:text-right" : "lg:text-left"
      }`}
    >
      {sections.map((section, sectionIndex) => (
        <div key={`${section.title ?? "section"}-${sectionIndex}`}>
          {section.title && (
            <p className="font-display text-xs font-bold text-[#0F172A] sm:text-sm">
              {section.title}
            </p>
          )}
          {section.subtitle && (
            <p className="mt-0.5 text-xs text-[#64748B] sm:text-[0.8125rem]">{section.subtitle}</p>
          )}
          {section.variant === "plain" ? (
            <div className={`mt-0.5 flex flex-col gap-0.5 ${isRightAligned ? "lg:items-end" : ""}`}>
              {section.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ) : (
            <ul className={`mt-0.5 flex flex-col gap-1 ${isRightAligned ? "lg:items-end" : ""}`}>
              {section.items.map((item) => (
                <li key={item} className={isRightAligned ? "lg:text-right" : ""}>
                  <span className="mr-1 text-[#64748B]">
                    {section.variant === "plus" ? "+" : "•"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function JourneyLegend({
  filter,
  onFilterChange,
}: {
  filter: Filter;
  onFilterChange: (next: Filter) => void;
}) {
  const items: { id: Exclude<Filter, "all">; label: string; color: string }[] = [
    { id: "study", label: "Study", color: "#F59E0B" },
    { id: "employment", label: "Employment", color: "#FE27C1" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {items.map(({ id, label, color }) => {
        const isActive = filter === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => onFilterChange(isActive ? "all" : id)}
            className={`flex items-center gap-1.5 text-xs text-[#64748B] transition-opacity sm:text-[0.8125rem] ${
              filter === "all" || isActive ? "opacity-100" : "opacity-50"
            }`}
            aria-pressed={isActive}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-[2px]"
              style={{ backgroundColor: color }}
              aria-hidden
            />
            {label}
          </button>
        );
      })}
    </div>
  );
}

function JourneyBranch({
  milestone,
  side,
  isExpanded,
  isDimmed,
  onHoverStart,
  onHoverEnd,
  onTogglePin,
}: {
  milestone: Milestone;
  side: "left" | "right";
  isExpanded: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onTogglePin: () => void;
}) {
  const accent = accentColor(milestone.type);
  const align =
    side === "left" ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start";

  return (
    <button
      type="button"
      onClick={onTogglePin}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      aria-expanded={isExpanded}
      className={`group/branch relative flex w-full flex-col text-left transition-all duration-300 ${align} ${
        isDimmed ? "opacity-35 grayscale" : "opacity-100"
      }`}
    >
      <p className="text-xs font-semibold sm:text-[0.8125rem]" style={{ color: accent }}>
        {milestone.period} ({milestone.location})
      </p>

      <p className="mt-1 font-display text-sm font-bold tracking-wide text-[#0F172A] sm:text-[0.9375rem]">
        {milestone.institution}
      </p>

      <p className="mt-0.5 font-display text-sm font-bold text-[#0F172A] sm:text-[0.9375rem]">
        {milestone.headline}
      </p>

      {milestone.subheadline && (
        <p className="mt-0.5 text-xs text-[#64748B] sm:text-[0.8125rem]">{milestone.subheadline}</p>
      )}

      <div
        className={`journey-detail w-full ${isExpanded ? "journey-detail-visible" : "journey-detail-hidden"}`}
      >
        <div>
          <MilestoneDetails sections={milestone.sections} side={side} />
        </div>
      </div>
    </button>
  );
}

function MilestoneLogo({
  milestone,
  isExpanded,
  isDimmed,
}: {
  milestone: Milestone;
  isExpanded: boolean;
  isDimmed: boolean;
}) {
  const scale = milestone.logoScale ?? 1;
  const isSquare = milestone.logoFit === "square";
  const isContain = milestone.logoFit === "contain";

  return (
    <div
      className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white shadow-sm transition-all duration-300 sm:h-11 sm:w-11 ${
        isExpanded && !isDimmed
          ? "scale-110 shadow-md ring-2 ring-[#0F172A]/10"
          : isContain
            ? ""
            : "ring-1 ring-[#E2E8F0]"
      } ${isDimmed ? "opacity-35 grayscale" : ""}`}
    >
      <Image
        src={milestone.logo}
        alt={`${milestone.institution} logo`}
        fill
        unoptimized
        className={
          isContain ? "object-contain object-center" : "object-cover object-center"
        }
        style={!isSquare && !isContain && scale !== 1 ? { transform: `scale(${scale})` } : undefined}
        sizes="44px"
      />
    </div>
  );
}

export function Experience() {
  const [filter, setFilter] = useState<Filter>("all");
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience" className="bg-[#FAFAFA] px-6 pt-8 pb-16 min-h-screen sm:pt-10 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-[#64748B]">
              Experience
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F172A] sm:mt-4 sm:text-[2.125rem] lg:text-[2.25rem]">
              The <span className="text-gradient">Journey</span> So Far
            </h2>
            <div className="mt-5 sm:mt-6">
              <JourneyLegend filter={filter} onFilterChange={setFilter} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="relative mx-auto mt-10 max-w-4xl sm:mt-12 lg:mt-14 lg:max-w-5xl">
            <div
              className="absolute bottom-3 left-[1.25rem] top-3 w-px bg-[#E2E8F0] lg:bottom-0 lg:left-1/2 lg:top-0 lg:-translate-x-1/2"
              aria-hidden
            />

            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {milestones.map((milestone, index) => {
                const side = index % 2 === 0 ? "left" : "right";
                const isDimmed = filter !== "all" && milestone.type !== filter;
                const isExpanded =
                  pinnedId === milestone.id || hoveredId === milestone.id;

                return (
                  <div
                    key={milestone.id}
                    className="relative grid grid-cols-[auto_1fr] items-start gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-6"
                  >
                    <div className="relative z-10 row-start-1 self-start lg:col-start-2 lg:row-start-1 lg:justify-self-center">
                      <MilestoneLogo
                        milestone={milestone}
                        isExpanded={isExpanded}
                        isDimmed={isDimmed}
                      />
                    </div>

                    <div
                      className={`row-start-1 self-start min-w-0 lg:row-start-1 ${
                        side === "left"
                          ? "col-start-2 lg:col-start-1 lg:col-end-2 lg:pr-4"
                          : "col-start-2 lg:col-start-3 lg:col-end-4 lg:pl-4"
                      }`}
                    >
                      <JourneyBranch
                        milestone={milestone}
                        side={side}
                        isExpanded={isExpanded}
                        isDimmed={isDimmed}
                        onHoverStart={() => setHoveredId(milestone.id)}
                        onHoverEnd={() =>
                          setHoveredId((current) =>
                            current === milestone.id ? null : current,
                          )
                        }
                        onTogglePin={() =>
                          setPinnedId((current) =>
                            current === milestone.id ? null : milestone.id,
                          )
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
