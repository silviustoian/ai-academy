"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

type Crumb = {
  label: string;
  href: string;
};

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  intro,
  backLabel = "Home",
  backHref = "/",
  decor = "ribbon",
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  backLabel?: string;
  backHref?: string;
  decor?: "ribbon" | "knot" | "ring";
  crumbs?: Crumb[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-black pt-32 pb-16 text-white sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24"
      aria-labelledby="page-hero-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_30%,rgba(155,84,223,0.16)_0%,transparent_45%),radial-gradient(circle_at_82%_70%,rgba(46,98,250,0.14)_0%,transparent_50%)]"
      />

      {/* Decor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-16 -z-[1] w-[260px] opacity-50 sm:right-[2%] sm:w-[360px] sm:opacity-60 lg:w-[440px]"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={`/branding/3d/${decor}.png`}
            alt=""
            width={500}
            height={500}
            className="h-auto w-full drop-shadow-[0_0_50px_rgba(155,84,223,0.5)]"
            priority
          />
        </motion.div>
      </motion.div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 transition hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2.5} aria-hidden />
            {backLabel}
          </Link>
        </motion.div>

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
            id="page-hero-title"
            className="font-display mt-5 font-black uppercase leading-[0.92] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.4rem, 6.4vw, 5rem)" }}
          >
            {title}{" "}
            <span className="iris-text">{titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
            {intro}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export function NextStep({
  label,
  title,
  href,
}: {
  label: string;
  title: string;
  href: string;
}) {
  return (
    <section className="relative bg-black py-16 text-white sm:py-20">
      <Container>
        <Link
          href={href}
          className="group flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:gap-8 sm:p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
              {label}
            </p>
            <p className="font-display mt-2 text-[24px] font-black uppercase tracking-[-0.01em] sm:text-[28px]">
              {title}
            </p>
          </div>
          <span
            aria-hidden
            className="inline-flex size-12 items-center justify-center rounded-full bg-white text-black shadow-[0_18px_45px_-16px_rgba(214,179,255,0.7)] transition group-hover:translate-x-1 sm:size-14"
          >
            <ArrowRight className="size-5" strokeWidth={2.5} />
          </span>
        </Link>
      </Container>
    </section>
  );
}
