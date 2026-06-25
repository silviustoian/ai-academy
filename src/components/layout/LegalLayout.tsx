"use client";

import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type { LegalSection } from "@/data/legal-content";
import { useLocale } from "@/lib/locale-context";

export function LegalLayout({
  eyebrow,
  title,
  titleAccent,
  intro,
  lastUpdated,
  sections,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  return (
    <main className="relative isolate overflow-hidden bg-black pt-32 pb-20 text-white sm:pt-40 lg:pt-44 lg:pb-28">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(155,84,223,0.14)_0%,transparent_45%),radial-gradient(circle_at_85%_85%,rgba(46,98,250,0.12)_0%,transparent_50%)]"
      />

      {/* Brandmark watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 -z-[1] hidden h-[460px] w-[460px] opacity-25 sm:block"
      >
        <Image
          src="/branding/brandmark-gradient.png"
          alt=""
          width={460}
          height={460}
          className="h-full w-full object-contain"
        />
      </div>

      <Container className="relative">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 transition hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2.5} aria-hidden />
            {locale === "ro" ? "Înapoi pe Home" : "Back to Home"}
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="mt-8 max-w-3xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            {eyebrow}
          </p>
          <h1
            className="font-display mt-5 font-black uppercase leading-[0.92] tracking-[-0.02em] text-balance"
            style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.25rem)" }}
          >
            {title}{" "}
            <span className="iris-text">{titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
            {intro}
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-white/45">
            {lastUpdated}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          {/* TOC sticky on desktop */}
          <nav
            aria-label={locale === "ro" ? "Cuprins" : "Table of contents"}
            className="hidden lg:sticky lg:top-28 lg:block lg:self-start"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
              {locale === "ro" ? "Cuprins" : "Contents"}
            </p>
            <ol className="mt-4 space-y-2.5">
              {sections.map((s, idx) => (
                <li key={s.heading}>
                  <a
                    href={`#section-${idx + 1}`}
                    className="block text-[12px] leading-5 text-white/55 transition hover:text-white"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections content */}
          <article className="max-w-3xl">
            {sections.map((s, idx) => (
              <motion.section
                key={s.heading}
                id={`section-${idx + 1}`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="scroll-mt-28 border-t border-white/10 py-8 first:border-t-0 first:pt-0 sm:py-10"
              >
                <h2 className="font-display text-[20px] font-black uppercase tracking-[-0.01em] sm:text-[24px]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, pi) => (
                    <p
                      key={pi}
                      className="text-pretty text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </article>
        </div>
      </Container>
    </main>
  );
}
