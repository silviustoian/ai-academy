"use client";

import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";

import { Container } from "@/components/ui/Container";
import { footerContent } from "@/data/footer-content";
import { siteConfig } from "@/data/site-config";
import { useLocale } from "@/lib/locale-context";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12c0 1.9.2 3.8.5 5.7a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.3-1.9.5-3.8.5-5.7 0-1.9-.2-3.8-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.26.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23a3.74 3.74 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.26.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.74 3.74 0 0 1-1.38-.9 3.74 3.74 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33 0 7.05.07 5.78.13 4.9.33 4.14.63a5.94 5.94 0 0 0-2.15 1.4A5.94 5.94 0 0 0 .59 4.18c-.3.76-.5 1.64-.56 2.91C-.04 8.37 0 8.78 0 12s0 3.63.07 4.91c.06 1.27.26 2.15.56 2.91.31.79.74 1.46 1.4 2.15.69.66 1.36 1.09 2.15 1.4.76.3 1.64.5 2.91.56C8.37 23.96 8.78 24 12 24s3.63-.04 4.91-.07c1.27-.06 2.15-.26 2.91-.56a5.94 5.94 0 0 0 2.15-1.4 5.94 5.94 0 0 0 1.4-2.15c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.91s0-3.63-.07-4.91c-.06-1.27-.26-2.15-.56-2.91a5.94 5.94 0 0 0-1.4-2.15A5.94 5.94 0 0 0 19.82.59c-.76-.3-1.64-.5-2.91-.56C15.63.04 15.22 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.4-10.41a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
    </svg>
  );
}

const socialIcons = {
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
};

export function Footer() {
  const { locale } = useLocale();
  const copy = footerContent[locale];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px iris-gradient opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_0%,rgba(155,84,223,0.10)_0%,transparent_50%),radial-gradient(circle_at_85%_100%,rgba(46,98,250,0.10)_0%,transparent_55%)]"
      />

      {/* Brandmark watermark — right side, very subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 -z-[1] hidden h-[420px] w-[420px] -translate-y-1/2 opacity-15 lg:block lg:right-[-6%] lg:opacity-20"
      >
        <Image
          src="/branding/brandmark-gradient.png"
          alt=""
          width={420}
          height={420}
          className="h-full w-full object-contain"
          aria-hidden
        />
      </div>

      {/* Orb 3D — left bottom small */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-4 -z-[1] hidden w-[140px] opacity-40 lg:block lg:left-[-2%] lg:w-[180px]"
      >
        <Image
          src="/branding/3d/orb.png"
          alt=""
          width={180}
          height={180}
          className="h-full w-full object-contain"
        />
      </div>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <Image
              src={siteConfig.assets.logo}
              alt={`${siteConfig.name} logo`}
              width={176}
              height={64}
              className="h-10 w-auto sm:h-12"
            />
            <p className="mt-5 max-w-md text-pretty text-[14px] leading-7 text-white/65 sm:text-[15px]">
              {copy.tagline}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-[linear-gradient(135deg,#f23fa0,#9b54df)]"
              />
              {copy.poweredBy}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
              {copy.navLabel}
            </p>
            <ul className="mt-5 space-y-3">
              {copy.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14px] font-medium text-white/80 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:text-[15px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
              {copy.contactLabel}
            </p>
            <ul className="mt-5 space-y-3 text-[14px] sm:text-[15px]">
              <li>
                <a
                  href={`mailto:${copy.email}`}
                  className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
                >
                  <Mail className="size-4" strokeWidth={1.8} aria-hidden />
                  {copy.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-white/70">
                <MapPin className="size-4" strokeWidth={1.8} aria-hidden />
                {copy.address}
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {copy.social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-white/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                    >
                      <Icon className="size-4" strokeWidth={1.8} aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-6 text-[12px] text-white/45 sm:mt-14 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {siteConfig.shortName}. {copy.legal}
          </p>
          <p className="text-[10px] uppercase tracking-[0.32em]">
            NEXINARI AI Academy · {locale === "ro" ? "Ediția" : "Program"} 2027
          </p>
        </div>
      </Container>
    </footer>
  );
}
