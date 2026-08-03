"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { cookieBannerContent } from "@/data/cookie-banner-content";
import { useCookieConsent } from "@/lib/cookie-consent";
import { useLocale } from "@/lib/locale-context";

export function CookieBanner() {
  const { status, grant, deny } = useCookieConsent();
  const { locale } = useLocale();
  const copy = cookieBannerContent[locale];
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {status === "unknown" ? (
        <motion.div
          key="cookie-banner"
          role="dialog"
          aria-live="polite"
          aria-label={copy.title}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/12 bg-black/85 p-5 text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
        >
          <div className="flex-1">
            <p className="font-display text-[13px] font-black uppercase tracking-[0.18em] text-white sm:text-[14px]">
              {copy.title}
            </p>
            <p className="mt-1.5 text-[13px] leading-6 text-white/70 sm:text-[14px]">
              {copy.body}{" "}
              <Link
                href={copy.policyHref}
                className="underline decoration-white/40 underline-offset-2 transition hover:decoration-white hover:text-white"
              >
                {copy.policyLabel}
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
            <button
              type="button"
              onClick={deny}
              className="rounded-full border border-white/25 bg-white/[0.04] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 transition hover:border-white/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:px-5"
            >
              {copy.reject}
            </button>
            <button
              type="button"
              onClick={grant}
              className="rounded-full bg-white px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-black shadow-[0_8px_24px_-8px_rgba(214,179,255,0.55)] transition hover:shadow-[0_12px_36px_-8px_rgba(214,179,255,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:px-5"
            >
              {copy.accept}
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
