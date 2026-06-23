"use client";

import { Quote, UserRound } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { mentorsContent } from "@/data/mentors-content";
import { useLocale } from "@/lib/locale-context";

export function Mentors() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = mentorsContent[locale];

  return (
    <section
      id="mentors"
      className="relative isolate overflow-hidden bg-[#f5f1ea] py-16 text-[#0c0c10] sm:py-20 lg:py-24"
      aria-labelledby="mentors-title"
    >
      {/* Top fade from black */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/35 to-transparent"
      />
      {/* Bottom fade back to black */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black/35 to-transparent"
      />

      {/* Soft iris glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(242,63,160,0.10)_0%,transparent_50%),radial-gradient(circle_at_10%_80%,rgba(46,98,250,0.08)_0%,transparent_55%)]"
      />

      {/* Decorative brandmark watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 -z-[1] h-[360px] w-[360px] opacity-40 sm:right-[-4%] sm:top-[-3%] sm:h-[460px] sm:w-[460px] sm:opacity-55"
      >
        <Image
          src="/branding/brandmark-gradient.png"
          alt=""
          width={460}
          height={460}
          className="h-full w-full object-contain"
          priority={false}
        />
      </div>

      {/* Decorative wave bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-10 -z-[1] hidden h-[320px] w-[320px] opacity-50 sm:block sm:left-[-4%]"
      >
        <Image
          src="/branding/3d/wave.png"
          alt=""
          width={320}
          height={320}
          className="h-full w-full object-contain"
          priority={false}
        />
      </div>

      <Container className="relative">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/branding/logo-black.png"
              alt="NEXINARI"
              width={120}
              height={28}
              className="h-6 w-auto"
            />
            <span className="h-px w-10 bg-black/20" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/55">
              {copy.eyebrow}
            </p>
          </div>
          <h2
            id="mentors-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance"
            style={{ fontSize: "clamp(2.4rem, 6.2vw, 4.75rem)" }}
          >
            {copy.title}{" "}
            <span className="iris-text-dark">{copy.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-black/80 sm:text-base sm:leading-8">
            {copy.paragraph}
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 sm:text-base sm:leading-8">
            <span className="font-bold text-black">
              {copy.paragraphAccent}
            </span>
          </p>
        </motion.div>

        {/* Partners strip */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-black/10 py-4 sm:mt-12"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45 sm:text-[11px]">
            {copy.partnersLabel}
          </p>
          {copy.partners.map((p) => (
            <span
              key={p}
              className="font-display text-[14px] font-black uppercase tracking-[0.06em] text-black/80 sm:text-[15px]"
            >
              {p}
            </span>
          ))}
        </motion.div>

        <motion.ul
          key={locale}
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
            },
          }}
        >
          {copy.mentors.map((m) => (
            <motion.li
              key={m.key}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="group relative w-[85vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_24px_60px_-30px_rgba(0,0,0,0.25)] transition duration-300 hover:border-black/20 hover:shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_30px_70px_-30px_rgba(0,0,0,0.35)] sm:w-auto sm:max-w-none sm:shrink sm:snap-none sm:p-7"
            >
              {/* Iris accent bar */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] iris-gradient opacity-80"
              />

              <div className="flex items-start gap-5">
                <div
                  className="relative size-20 shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-[linear-gradient(135deg,#1a1a22,#3a2756)]"
                  aria-hidden
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 iris-gradient opacity-40 mix-blend-overlay"
                  />
                  <UserRound
                    className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-white/90"
                    strokeWidth={1.4}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
                    {m.role}
                  </p>
                  <h3 className="font-display mt-1 truncate text-[20px] font-black uppercase tracking-[-0.01em] sm:text-[22px]">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-black/65 sm:text-[14px]">
                    @ {m.company}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/70">
                    {copy.cardYearsLabel} · {m.years}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
                    {copy.cardTeachesLabel}
                  </p>
                  <p className="mt-1.5 text-[14px] font-medium leading-6 sm:text-[15px]">
                    {m.teaches}
                  </p>
                </div>

                <div className="relative rounded-2xl border border-black/10 bg-black/[0.025] p-4 sm:p-5">
                  <Quote
                    aria-hidden
                    className="absolute right-3 top-3 size-4 text-black/25"
                    strokeWidth={2}
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/45">
                    {copy.cardQuoteLabel}
                  </p>
                  <p className="mt-2 text-pretty text-[14px] leading-6 text-black/80 sm:text-[15px]">
                    &ldquo;{m.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10 flex flex-col items-start gap-2 rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-sm sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <p className="font-display text-[18px] font-black uppercase tracking-[-0.01em] sm:text-[20px]">
              <span className="iris-text-dark">+</span> {copy.moreLabel}
            </p>
            <p className="mt-1 text-[13px] leading-6 text-black/65 sm:text-[14px]">
              {copy.moreNote}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
