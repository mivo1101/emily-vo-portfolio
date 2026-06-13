import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { site } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-white">
      {children}
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <ContactIcon>
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </ContactIcon>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-[#0F172A] sm:text-[0.9375rem]">{value}</p>
      </div>
    </>
  );

  const className =
    "interactive-card flex items-center gap-3 rounded-full bg-[#F2F2F7] py-2.5 pl-2.5 pr-5 transition-colors hover:bg-[#ECECF1]";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

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
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="interactive-card inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A] text-white transition-opacity hover:opacity-90"
    >
      {children}
    </a>
  );
}

export function Contact() {
  const { contact } = site;

  return (
    <section id="contact" className="bg-white px-6 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-[#64748B]">Contact</p>
            <h2 className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-display text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F172A] sm:text-[2.125rem] lg:text-[2.25rem]">
              Say <span className="text-gradient">Hello</span>
              <span className="contact-wave inline-block text-[1.35rem] sm:text-[1.5rem]" aria-hidden="true">
                👋
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#64748B] sm:text-base">
              Open to IT opportunities. Based in Melbourne, happy to connect from Vietnam too.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="mt-8 rounded-[1.5rem] bg-[#FAFAFA] p-6 sm:mt-10 sm:p-8">
            <a
              href={`mailto:${contact.email}`}
              className="interactive-card flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0F172A] px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:text-base"
            >
              <Mail className="h-5 w-5 shrink-0" strokeWidth={1.75} />
              {contact.email}
            </a>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <ContactDetail
                icon={Phone}
                label="Phone"
                value={contact.phone}
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
              />
              <ContactDetail icon={MapPin} label="Location" value={contact.location} />
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 border-t border-[#E2E8F0] pt-6">
              <SocialButton href={contact.linkedin} label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" />
              </SocialButton>
              <SocialButton href={contact.github} label="GitHub">
                <GitHubIcon className="h-5 w-5" />
              </SocialButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
