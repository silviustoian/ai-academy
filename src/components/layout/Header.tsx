"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

import { Container } from "@/components/ui/Container";
import {
  headerCtaContent,
  headerCtaHref,
  headerNavContent,
} from "@/data/hero-content";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale-context";
import type { LocaleCode } from "@/types/content";

type NavKind = "route" | "anchor";
type NavMeta = {
  label: string;
  href: string;
  kind: NavKind;
  routePath?: string;
  anchorId?: string;
};

function parseNav(items: { label: string; href: string }[]): NavMeta[] {
  return items.map((item) => {
    const href = item.href;
    // Anchor on home (e.g. "/#faq") or bare hash (e.g. "#faq")
    if (href.startsWith("#") || href.includes("/#")) {
      const anchorId = href.split("#")[1] ?? "";
      return { ...item, kind: "anchor", anchorId };
    }
    return { ...item, kind: "route", routePath: href };
  });
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<string>("");
  const menuId = useId();
  const { locale, setLocale } = useLocale();
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const rawNav = headerNavContent[locale];
  const nav = useMemo(() => parseNav(rawNav), [rawNav]);
  const ctaLabel = headerCtaContent[locale];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

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

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Scroll-spy only on home for anchor nav items
  useEffect(() => {
    if (!isHome) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveAnchor("");
      return;
    }
    const ids = nav
      .filter((n) => n.kind === "anchor" && n.anchorId)
      .map((n) => n.anchorId as string);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) {
          setActiveAnchor(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [isHome, nav]);

  function isActive(item: NavMeta) {
    if (item.kind === "route") {
      return pathname === item.routePath;
    }
    return isHome && item.anchorId === activeAnchor;
  }

  function renderLink(item: NavMeta) {
    if (item.kind === "route") {
      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isActive(item) ? "page" : undefined}
          className="group relative inline-flex items-center px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus xl:text-[13px]"
        >
          <span className={cn(isActive(item) && "text-white")}>
            {item.label}
          </span>
          {isActive(item) ? (
            <motion.span
              layoutId="header-nav-active"
              aria-hidden
              className="absolute inset-x-2 -bottom-[2px] h-[2px] iris-gradient"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          ) : (
            <span
              aria-hidden
              className="absolute inset-x-2 -bottom-[2px] h-[2px] origin-left scale-x-0 bg-white/40 transition-transform duration-300 group-hover:scale-x-100"
            />
          )}
        </Link>
      );
    }
    return (
      <a
        key={item.href}
        href={item.href}
        aria-current={isActive(item) ? "true" : undefined}
        className="group relative inline-flex items-center px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus xl:text-[13px]"
      >
        <span className={cn(isActive(item) && "text-white")}>{item.label}</span>
        {isActive(item) ? (
          <motion.span
            layoutId="header-nav-active"
            aria-hidden
            className="absolute inset-x-2 -bottom-[2px] h-[2px] iris-gradient"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        ) : (
          <span
            aria-hidden
            className="absolute inset-x-2 -bottom-[2px] h-[2px] origin-left scale-x-0 bg-white/40 transition-transform duration-300 group-hover:scale-x-100"
          />
        )}
      </a>
    );
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,min-height] duration-300",
        isScrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/40 to-transparent",
      )}
    >
      <motion.div
        aria-hidden
        className="iris-gradient absolute inset-x-0 top-0 h-[2px] origin-left"
        style={{ scaleX: reduceMotion ? 0 : progress }}
      />

      <Container
        className={cn(
          "flex items-center justify-between gap-4 transition-[min-height] duration-300 sm:gap-6",
          isScrolled ? "min-h-14 sm:min-h-16" : "min-h-16 sm:min-h-20",
        )}
      >
        <Link
          className="inline-flex items-center gap-3 rounded-control focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          href="/"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={siteConfig.assets.logo}
            alt={`${siteConfig.name} logo`}
            width={176}
            height={64}
            priority
            className={cn(
              "w-auto transition-[height] duration-300",
              isScrolled ? "h-7 sm:h-8" : "h-8 sm:h-10",
            )}
          />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map(renderLink)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleToggle locale={locale} onChange={setLocale} />
          <Link
            href={headerCtaHref}
            className="group relative inline-flex min-h-10 items-center gap-2 overflow-hidden rounded-full bg-white px-5 text-[12px] font-black uppercase tracking-[0.18em] text-black shadow-[0_10px_30px_-12px_rgba(214,179,255,0.6)] transition hover:shadow-[0_18px_45px_-12px_rgba(214,179,255,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 -left-10 w-10 -skew-x-12 bg-white/70 opacity-0 transition duration-700 group-hover:translate-x-[300%] group-hover:opacity-100"
            />
            <span className="relative">{ctaLabel}</span>
            <ArrowRight
              aria-hidden
              className="relative size-3.5 transition group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </Link>
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
          "fixed inset-x-3 top-[4.25rem] z-40 origin-top rounded-2xl border border-white/12 bg-black/95 px-5 pb-6 pt-4 shadow-panel backdrop-blur-xl md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile primary">
          {nav.map((item) => {
            const active = isActive(item);
            const className = cn(
              "flex items-center justify-between border-b border-white/8 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
              active ? "text-white" : "text-white/75 hover:text-white",
            );
            const indicator = active ? (
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-[linear-gradient(135deg,#f23fa0,#9b54df)]"
              />
            ) : null;
            const content = (
              <>
                <span>{item.label}</span>
                {indicator}
              </>
            );
            if (item.kind === "route") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={className}
                  onClick={() => setIsOpen(false)}
                >
                  {content}
                </Link>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={className}
                onClick={() => setIsOpen(false)}
              >
                {content}
              </a>
            );
          })}
          <Link
            href={headerCtaHref}
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[12px] font-black uppercase tracking-[0.18em] text-black shadow-[0_10px_30px_-12px_rgba(214,179,255,0.6)] transition hover:shadow-[0_18px_45px_-12px_rgba(214,179,255,0.8)]"
            onClick={() => setIsOpen(false)}
          >
            {ctaLabel}
            <ArrowRight aria-hidden className="size-3.5" strokeWidth={2.5} />
          </Link>
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
              active ? "bg-white text-black" : "text-white/55 hover:text-white",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
