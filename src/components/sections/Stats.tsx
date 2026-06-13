"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  label: string;
  staticValue?: boolean;
};

function Counter({ value, suffix = "", label, staticValue = false }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || staticValue) return;

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, value, staticValue]);

  return (
    <div ref={ref} className="group text-center">
      <p className="cursor-default font-display text-5xl font-extrabold tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
        <span className="stat-number-value">
          {staticValue ? value : count}
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-sm text-muted">{label}</p>
    </div>
  );
}

const stats = [
  { value: 2, suffix: "", label: "Majors · Business & IT", staticValue: true },
  { value: 5, suffix: "+", label: "High Distinction IT projects" },
  { value: 2, suffix: "", label: "Countries · Vietnam & Australia" },
  { value: 2026, suffix: "", label: "Deakin MIT graduation", staticValue: true },
];

export function Stats() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-[#64748B]">
            Overview
          </p>
          <h2 className="mt-4 font-display text-[2rem] font-bold leading-tight tracking-tight text-[#0F172A] sm:text-[2.5rem] lg:text-[2.75rem]">
            A Quick Read On <span className="text-gradient">My Path</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-10 text-center lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
