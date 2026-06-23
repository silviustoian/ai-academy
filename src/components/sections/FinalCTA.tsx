"use client";

import { ArrowRight, Quote, Users } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { finalCtaContent } from "@/data/final-cta-content";
import { useLocale } from "@/lib/locale-context";

export function FinalCTA() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = finalCtaContent[locale];

  return (
    <section
      id="apply-cta"
      className="relative isolate overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="final-cta-title"
    >
      {/* Background image — brandmark glass */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[10]">
        <Image
          src="/branding/mockups/brandmark-glass.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
          priority={false}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[9] bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.80)_60%,rgba(0,0,0,0.95)_100%)]"
      />

      {/* Iris glow over the image — keeps brand palette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[9] bg-[radial-gradient(circle_at_50%_30%,rgba(242,63,160,0.20)_0%,transparent_45%),radial-gradient(circle_at_50%_80%,rgba(46,98,250,0.18)_0%,transparent_50%)] mix-blend-overlay"
      />

      {/* Ring decoration top-left */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-12 -z-[1] w-[200px] opacity-50 sm:left-[2%] sm:w-[280px] sm:opacity-60 lg:w-[340px]"
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 0.55, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/branding/3d/ring.png"
            alt=""
            width={400}
            height={400}
            className="h-auto w-full drop-shadow-[0_0_60px_rgba(155,84,223,0.55)]"
          />
        </motion.div>
      </motion.div>

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">
            {copy.eyebrow}
          </p>
          <h2
            id="final-cta-title"
            className="font-display mt-5 font-black uppercase leading-[0.92] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.4rem, 6.4vw, 5rem)" }}
          >
            {copy.title}{" "}
            <span className="iris-text">{copy.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            {copy.copy}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-[14px] leading-6 text-white/55 sm:text-[15px] sm:leading-7">
            {copy.copyAccent}
          </p>

          {/* Seats left badge */}
          <motion.div
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <motion.span
              aria-hidden
              className="size-2 rounded-full bg-[linear-gradient(135deg,#f23fa0,#9b54df)]"
              animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <Users className="size-3.5 text-white/70" strokeWidth={2} aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-[12px]">
              {copy.seatsLeft}
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <a
              href="#aplica"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 font-display text-[14px] font-black uppercase tracking-[0.14em] text-black shadow-[0_24px_60px_-16px_rgba(214,179,255,0.7)] transition hover:shadow-[0_32px_80px_-16px_rgba(214,179,255,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:text-[16px]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 -left-16 w-16 -skew-x-12 bg-white/70 opacity-0 transition duration-700 group-hover:translate-x-[300%] group-hover:opacity-100"
              />
              <span className="relative">{copy.ctaLabel}</span>
              <ArrowRight
                className="relative size-5 transition group-hover:translate-x-1"
                strokeWidth={2.5}
                aria-hidden
              />
            </a>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
              {copy.ctaNote}
            </p>
          </motion.div>

          {/* Testimonial */}
          <motion.figure
            className="mx-auto mt-12 max-w-md rounded-2xl border border-white/12 bg-white/[0.03] p-5 backdrop-blur-sm sm:mt-14 sm:p-6"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Quote
              aria-hidden
              className="mx-auto size-4 text-white/40"
              strokeWidth={2}
            />
            <blockquote className="mt-2 font-display text-[18px] font-black uppercase tracking-[-0.01em] text-white sm:text-[20px]">
              &ldquo;{copy.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/55">
              {copy.testimonial.author}
            </figcaption>
          </motion.figure>
        </motion.div>
      </Container>
    </section>
  );
}
