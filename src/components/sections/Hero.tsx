"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { heroContent } from "@/data/hero-content";
import { useLocale } from "@/lib/locale-context";

const heroVisual = "/images/hero/nexinari-ai-visual-transparent.png";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = heroContent[locale];

  return (
    <section
      className="relative isolate min-h-svh w-full overflow-hidden bg-black text-white"
      aria-labelledby="hero-title"
    >
      {/* Base radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_60%,rgba(125,58,237,0.42)_0%,rgba(46,98,250,0.22)_28%,transparent_58%),radial-gradient(circle_at_78%_30%,rgba(242,63,160,0.28)_0%,rgba(155,84,223,0.18)_30%,transparent_60%)]"
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.78)_100%)]"
      />

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />

      {/* Iridescent 3D ribbon — real brand asset, desktop only */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] top-[6%] z-[1] hidden w-[60vw] max-w-[920px] -rotate-[12deg] lg:block xl:-right-[6%]"
        initial={{ opacity: 0, x: reduceMotion ? 0 : 60, y: reduceMotion ? 0 : -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: reduceMotion ? 0 : [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 1.1, ease: "easeOut" },
          x: { duration: 1.1, ease: "easeOut" },
          y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          className="absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(242,63,160,0.35)_0%,rgba(155,84,223,0.25)_35%,transparent_70%)] blur-3xl"
        />
        <Image
          src="/branding/3d/ribbon.png"
          alt=""
          width={1500}
          height={500}
          priority
          sizes="60vw"
          className="h-auto w-full drop-shadow-[0_0_80px_rgba(155,84,223,0.45)]"
        />
      </motion.div>

      {/* Iridescent ring — small accent top-right, desktop only */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[30%] z-[2] hidden w-[120px] xl:block"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: reduceMotion ? 0 : [0, 360],
        }}
        transition={{
          opacity: { duration: 0.9, delay: 0.4, ease: "easeOut" },
          scale: { duration: 0.9, delay: 0.4, ease: "easeOut" },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
        }}
      >
        <Image
          src="/branding/3d/ring.png"
          alt=""
          width={300}
          height={300}
          sizes="120px"
          className="h-auto w-full drop-shadow-[0_0_40px_rgba(46,98,250,0.5)]"
        />
      </motion.div>

      {/* Robot — desktop only (mobile renders inline below content) */}
      <motion.div
        className={[
          "pointer-events-none absolute z-[2] hidden",
          "sm:block sm:-bottom-[6%] sm:-left-[10%] sm:w-[68vw] sm:max-w-[820px]",
          "lg:-left-[6%] lg:w-[58vw] lg:max-w-[900px]",
          "xl:-left-[3%] xl:w-[52vw] xl:max-w-[960px]",
        ].join(" ")}
        initial={{
          opacity: 0,
          x: reduceMotion ? 0 : -28,
          y: reduceMotion ? 0 : 12,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: reduceMotion ? 0 : [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.9, ease: "easeOut" },
          x: { duration: 0.9, ease: "easeOut" },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          aria-hidden
          className="absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(155,84,223,0.5)_0%,rgba(46,98,250,0.26)_38%,transparent_70%)] blur-3xl"
        />
        <Image
          src={heroVisual}
          alt="Futuristic humanoid AI figure in NEXINARI purple and blue lighting"
          width={1254}
          height={1254}
          priority
          sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 58vw, (min-width: 640px) 68vw, 88vw"
          className="h-auto w-full drop-shadow-[0_0_60px_rgba(155,84,223,0.45)]"
        />
      </motion.div>

      {/* Scrim for legibility (desktop only — mobile has no overlap) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] hidden sm:block sm:bg-[linear-gradient(110deg,transparent_0%,transparent_38%,rgba(0,0,0,0.45)_62%,rgba(0,0,0,0.75)_100%)]"
      />

      <Container className="relative z-10 flex min-h-svh flex-col pt-24 pb-10 sm:flex-row sm:items-center sm:pt-28 sm:pb-16">
        <div className="relative z-20 w-full text-left sm:ml-auto sm:max-w-[36rem] lg:max-w-[42rem] lg:pl-8 xl:pl-16">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {copy.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white sm:leading-[0.92]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            style={{ fontSize: "clamp(2.4rem, 6.2vw, 4.75rem)" }}
          >
            {copy.headlineLead}{" "}
            <span className="iris-text">{copy.headlineAccent}</span>{" "}
            {copy.headlineTail}
            <ArrowDown
              aria-hidden
              className="ml-2 inline-block size-6 -translate-y-1 align-middle text-white/80 sm:size-8"
              strokeWidth={2.2}
            />
          </motion.h1>

          <motion.p
            className="mt-6 text-pretty text-[15px] leading-7 text-white/75 sm:mt-7 sm:text-lg sm:leading-8"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            {copy.subheadline}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="#aplica"
              className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 text-[12px] font-bold uppercase tracking-[0.22em] text-black shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_18px_45px_-12px_rgba(214,179,255,0.85),0_0_60px_-8px_rgba(155,84,223,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.8),0_22px_55px_-12px_rgba(214,179,255,1),0_0_70px_-6px_rgba(155,84,223,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(155,84,223,0.4),transparent)] transition duration-700 group-hover:translate-x-full"
              />
              <span className="relative">{copy.primaryCta}</span>
              <ArrowRight
                aria-hidden
                className="relative size-4 transition group-hover:translate-x-0.5"
              />
            </a>
            <Link
              href="/program"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/[0.04] px-7 text-[12px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              {copy.secondaryCta}
            </Link>
          </motion.div>

          <motion.p
            className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            {copy.note}
          </motion.p>
        </div>

        {/* Mobile-only inline robot — centered, sits below content */}
        <motion.div
          className="pointer-events-none relative z-[1] mx-auto mt-6 w-[82vw] max-w-[420px] sm:hidden"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{
            opacity: 1,
            y: reduceMotion ? 0 : [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut", delay: 0.25 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          aria-hidden
        >
          <div className="absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(155,84,223,0.5)_0%,rgba(46,98,250,0.28)_40%,transparent_72%)] blur-3xl" />
          <Image
            src={heroVisual}
            alt=""
            width={1254}
            height={1254}
            sizes="110vw"
            className="h-auto w-full drop-shadow-[0_0_60px_rgba(155,84,223,0.45)]"
          />
        </motion.div>
      </Container>

      {/* Vertical decorative text (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] xl:block"
      >
        <span className="rotate-180 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/40">
          {copy.vertical}
        </span>
      </div>

      {/* Indicator dots */}
      <div
        className="absolute bottom-8 left-6 z-10 hidden flex-col gap-3 lg:flex"
        aria-hidden
      >
        <span className="size-1.5 rounded-full bg-white/90" />
        <span className="size-1.5 rounded-full bg-white/45" />
        <span className="size-1.5 rounded-full bg-white/25" />
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45 md:flex"
      >
        <span>{copy.scroll}</span>
        <span className="block h-px w-10 bg-white/30" />
      </div>
    </section>
  );
}
