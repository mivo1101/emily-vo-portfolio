import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      title={label}
      className="interactive-card inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A] text-white transition-opacity hover:opacity-90"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#FAFAFA]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">
            <span className="text-gradient">Emily Vo</span>
          </p>
          <p className="mt-1 text-sm text-[#64748B]">{site.fullName}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <SocialButton href={`mailto:${site.contact.email}`} label="Email">
            <Mail className="h-4 w-4" />
          </SocialButton>
          <SocialButton href={site.contact.linkedin} label="LinkedIn">
            <LinkedInIcon className="h-4 w-4" />
          </SocialButton>
          <SocialButton href={site.contact.github} label="GitHub">
            <GitHubIcon className="h-4 w-4" />
          </SocialButton>
          <Link
            href="/#work"
            className="ml-2 text-sm text-[#64748B] transition-colors hover:text-[#0F172A]"
          >
            Work
          </Link>
          <a
            href={site.contact.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#64748B] transition-colors hover:text-[#0F172A]"
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
