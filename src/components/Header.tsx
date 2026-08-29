"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { href: "/#work", label: "Projects", sectionId: "work" },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#skills", label: "Skills", sectionId: "skills" },
  { href: "/#experience", label: "Journey", sectionId: "experience" },
  { href: "/#contact", label: "Contact", sectionId: "contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.sectionId);

    const updateActiveSection = () => {
      const offset = 110;
      const position = window.scrollY + offset;
      let current: string | null = null;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= position) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if ((sectionIds as readonly string[]).includes(hash)) {
        setActiveSection(hash);
      }
    };

    updateActiveSection();
    syncFromHash();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  return (
    <header
      suppressHydrationWarning
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#E4E4EA] bg-white/95 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 py-3.5">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-lg font-bold text-foreground transition-opacity hover:opacity-80"
          >
            Emily Vo
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              const isHovered = hoveredSection === link.sectionId;
              const isHighlighted = isActive || isHovered;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.sectionId)}
                  onMouseEnter={() => setHoveredSection(link.sectionId)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="grid px-1 py-2 text-base"
                >
                  <span
                    className="invisible col-start-1 row-start-1 font-bold"
                    aria-hidden="true"
                  >
                    {link.label}
                  </span>
                  <span
                    className={`col-start-1 row-start-1 ${
                      isHighlighted
                        ? "text-gradient font-bold"
                        : "font-normal text-[#0F172A]"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.contact.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:px-5 sm:py-2.5 sm:text-base"
            >
              My CV
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EA] bg-white text-[#0F172A] transition-colors hover:bg-[#F2F2F7] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#E4E4EA] bg-white px-6 pb-5 pt-3 md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.sectionId);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-xl px-4 py-3 font-display text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[#F2F2F7] text-[#FE27C1]"
                      : "text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
