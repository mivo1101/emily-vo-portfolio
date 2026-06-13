"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function SkillCard({
  name,
  proficiency,
  description,
  icon: Icon,
}: (typeof skillCategories)[number]["skills"][number]) {
  return (
    <article className="rounded-2xl bg-[#F2F2F7] px-5 py-5 sm:px-6 sm:py-6">
      <div className="flex items-center gap-2.5">
        <Icon className="h-5 w-5 shrink-0 text-[#0F172A]" strokeWidth={1.75} />
        <h3 className="font-display text-base font-bold text-[#0F172A] sm:text-[1.0625rem]">
          {name}
        </h3>
      </div>
      <p className="mt-2 text-sm italic text-[#64748B]">{proficiency}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#64748B] sm:text-[0.9375rem]">
        {description}
      </p>
    </article>
  );
}

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? "programming");
  const activeCategory =
    skillCategories.find((category) => category.id === activeId) ?? skillCategories[0];

  return (
    <section id="skills" className="bg-[#FAFAFA] px-6 pt-8 pb-8 sm:pt-10 sm:pb-10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-[#64748B]">
              Skills
            </p>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-tight tracking-tight text-[#0F172A] sm:text-[2.5rem] lg:text-[2.75rem]">
              My Multidisciplinary{" "}
              <span className="text-gradient">Toolkit</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3">
            {skillCategories.map((category) => {
              const isActive = category.id === activeId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
                    isActive
                      ? "bg-[#0F172A] text-white"
                      : "border-gradient bg-white text-[#0F172A]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {activeCategory.skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 40}>
              <SkillCard {...skill} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
