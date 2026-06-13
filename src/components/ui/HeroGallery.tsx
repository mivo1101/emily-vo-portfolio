"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroImages } from "@/data/hero-images";

const LOOP_MS = 2600;
const ACTIVE_SCALE = 1.1;
const ACTIVE_LIFT = -10;
const TOP_HEADROOM = 16;
const SHADOW_ROOM = 32;

export function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pausedRef = useRef(false);

  const focusIndex = hoveredIndex ?? activeIndex;

  const advance = useCallback(() => {
    if (pausedRef.current) return;
    setActiveIndex((current) => (current + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(advance, LOOP_MS);
    return () => window.clearInterval(timer);
  }, [advance]);

  return (
    <div className="w-full overflow-visible pt-2 pb-8">
      <div className="flex w-full items-end justify-between gap-2 overflow-visible sm:gap-3 lg:gap-4">
        {heroImages.map((image, index) => {
          const isActive = index === focusIndex;
          const lift = isActive ? ACTIVE_LIFT : 0;

          return (
            <button
              key={image.src}
              type="button"
              aria-label={image.alt}
              aria-pressed={isActive}
              className="relative min-w-0 cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
              style={{
                flex: image.flex,
                paddingTop: TOP_HEADROOM,
                paddingBottom: SHADOW_ROOM,
              }}
              onMouseEnter={() => {
                pausedRef.current = true;
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
                setHoveredIndex(null);
                setActiveIndex(index);
              }}
              onFocus={() => {
                pausedRef.current = true;
                setHoveredIndex(index);
              }}
              onBlur={() => {
                pausedRef.current = false;
                setHoveredIndex(null);
              }}
            >
              <div
                className="relative mx-auto w-full"
                style={{ height: image.height, maxWidth: "100%" }}
              >
                <div
                  className="hero-gallery-motion absolute inset-0 overflow-hidden rounded-2xl transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                  style={{
                    transform: `translateY(${lift}px) scale(${isActive ? ACTIVE_SCALE : 1})`,
                    transformOrigin: "center bottom",
                    boxShadow: isActive
                      ? "0 24px 48px rgba(15, 23, 42, 0.18), 0 10px 20px rgba(15, 23, 42, 0.08)"
                      : "none",
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 20vw, 220px"
                    className="object-cover"
                    priority={index === 2}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
