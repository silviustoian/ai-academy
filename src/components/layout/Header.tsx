"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { Container } from "@/components/ui/Container";
import { headerCtaContent, headerNavContent } from "@/data/hero-content";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale-context";
import type { LocaleCode } from "@/types/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();
  const { locale, setLocale } = useLocale();

  const nav = headerNavContent[locale];
  const ctaLabel = headerCtaContent[locale];

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex min-h-16 items-center justify-between gap-4 sm:min-h-20 sm:gap-6">
        <a
          className="inline-flex items-center gap-3 rounded-control focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          href="#top"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={siteConfig.assets.logo}
            alt={`${siteConfig.name} logo`}
            width={176}
            height={64}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/72 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleToggle locale={locale} onChange={setLocale} />
          <a
            href={siteConfig.primaryCta.href}
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/30 px-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            {ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur transition hover:border-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:hidden"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
        </button>
      </Container>

      <div
        id={menuId}
        className={cn(
          "fixed inset-x-3 top-[4.25rem] z-40 origin-top rounded-2xl border border-white/12 bg-black/92 px-5 pb-6 pt-4 shadow-panel backdrop-blur-xl md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-white/8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/85 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.primaryCta.href}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            {ctaLabel}
          </a>
          <div className="mt-5">
            <LocaleToggle locale={locale} onChange={setLocale} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function LocaleToggle({
  locale,
  onChange,
}: {
  locale: LocaleCode;
  onChange: (locale: LocaleCode) => void;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/30 p-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur"
      role="group"
      aria-label="Language"
    >
      {siteConfig.locales.map((item) => {
        const active = item.code === locale;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => onChange(item.code)}
            aria-pressed={active}
            className={cn(
              "min-w-9 rounded-full px-2.5 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
              active
                ? "bg-white text-black"
                : "text-white/55 hover:text-white",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
