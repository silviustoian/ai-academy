"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
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
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-control px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-elevated hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded-full border border-border bg-surface p-1">
            {siteConfig.locales.map((locale) => (
              <span
                key={locale.code}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-semibold",
                  locale.code === siteConfig.defaultLocale
                    ? "bg-white text-ink"
                    : "text-muted",
                )}
              >
                {locale.label}
              </span>
            ))}
          </div>
          <Button href={siteConfig.primaryCta.href} size="sm">
            {siteConfig.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-control border border-border bg-surface text-foreground transition hover:bg-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:hidden"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </Container>

      <div
        id={menuId}
        className={cn(
          "fixed inset-x-0 top-20 z-40 border-b border-border bg-background/98 px-5 pb-6 pt-3 shadow-panel backdrop-blur-xl md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile primary">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-control px-3 py-3 text-base font-medium text-foreground transition hover:bg-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button
              href={siteConfig.primaryCta.href}
              className="col-span-2"
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.primaryCta.label}
            </Button>
            {siteConfig.locales.map((locale) => (
              <button
                key={locale.code}
                type="button"
                className={cn(
                  "min-h-11 rounded-control border px-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                  locale.code === siteConfig.defaultLocale
                    ? "border-white bg-white text-ink"
                    : "border-border bg-surface text-muted",
                )}
                aria-pressed={locale.code === siteConfig.defaultLocale}
              >
                {locale.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
