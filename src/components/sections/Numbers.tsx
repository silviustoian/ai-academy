"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { numbersContent } from "@/data/numbers-content";
import { useLocale } from "@/lib/locale-context";

function formatNumber(n: number, locale: string) {
  return n.toLocaleString(locale === "ro" ? "ro-RO" : "en-US");
}

function CountUp({
  to,
  inView,
  duration = 1.6,
  locale,
}: {
  to: number;
  inView: boolean;
  duration?: number;
  locale: string;
}) {
  const reduceMotion = useReducedMotion();
  const mv = useMotionValue(reduceMotion ? to : 0);
  const display = useTransform(mv, (latest) =>
    formatNumber(Math.round(latest), locale),
  );

  useEffect(() => {
    if (reduceMotion) {
      mv.set(to);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, mv, to, duration, reduceMotion]);

  return <motion.span>{display}</motion.span>;
}

export function Numbers() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = numbersContent[locale];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="numbers"
      className="relative isolate overflow-hidden bg-[#f5f1ea] py-16 text-[#0c0c10] sm:py-20 lg:py-24"
      aria-labelledby="numbers-title"
    >
      {/* Fades to/from dark surrounding sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/35 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-black/35 to-transparent"
      />

      {/* Soft iris tinted glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(155,84,223,0.10)_0%,transparent_45%),radial-gradient(circle_at_92%_92%,rgba(46,98,250,0.08)_0%,transparent_50%)]"
      />

      {/* Brandmark watermark — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -bottom-16 -z-[1] hidden h-[380px] w-[380px] opacity-20 sm:block sm:left-[-5%] lg:opacity-25"
      >
        <Image
          src="/branding/brandmark-gradient.png"
          alt=""
          width={380}
          height={380}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Wave 3D — top right corner */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-2 top-32 -z-[1] hidden w-[160px] opacity-50 lg:block lg:right-[3%] lg:top-28 lg:w-[220px] lg:opacity-65"
        initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 0.55, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src="/branding/3d/wave.png"
          alt=""
          width={300}
          height={300}
          className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(155,84,223,0.35)]"
        />
      </motion.div>

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
            <span aria-hidden className="h-px w-10 bg-black/20" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/55">
              {copy.eyebrow}
            </p>
          </div>
          <h2
            id="numbers-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance"
            style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.25rem)" }}
          >
            <span className="text-stroke-dark">{copy.title}</span>{" "}
            <span className="iris-text-dark relative inline-block">
              {copy.titleAccent}
              <span
                aria-hidden
                className="iris-gradient absolute -bottom-1 left-0 h-[3px] w-2/3 rounded-full opacity-90 sm:-bottom-2 sm:h-[4px]"
              />
            </span>
          </h2>
          <p className="mt-7 max-w-2xl text-pretty text-[15px] leading-7 text-black/70 sm:mt-8 sm:text-base sm:leading-8">
            {copy.intro}
          </p>
        </motion.div>

        <div
          ref={ref}
          className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {copy.stats.map((s, idx) => {
            const isZero = s.emphasis === "zero";
            const isIris = s.emphasis === "iris";
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: reduceMotion ? 0 : idx * 0.06,
                }}
                className={`relative overflow-hidden rounded-2xl border p-5 transition sm:p-6 ${
                  isZero
                    ? "border-transparent bg-[#0c0c10] text-white shadow-[0_20px_50px_-22px_rgba(155,84,223,0.65)]"
                    : "border-black/10 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_16px_40px_-24px_rgba(0,0,0,0.16)] hover:border-black/20"
                }`}
              >
                {isZero ? (
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] iris-gradient"
                  />
                ) : null}

                <div
                  aria-hidden
                  className="font-display flex items-end gap-1 text-[44px] font-black leading-none tracking-[-0.04em] sm:text-[56px] lg:text-[64px]"
                >
                  {isIris ? (
                    <span className="iris-text-dark">
                      <CountUp to={s.value} inView={inView} locale={locale} />
                    </span>
                  ) : isZero ? (
                    <span className="text-white">
                      <CountUp
                        to={s.value}
                        inView={inView}
                        duration={1.2}
                        locale={locale}
                      />
                    </span>
                  ) : (
                    <span className="text-black">
                      <CountUp to={s.value} inView={inView} locale={locale} />
                    </span>
                  )}
                  {s.suffix ? (
                    <span
                      className={`text-[28px] font-black sm:text-[36px] ${
                        isIris
                          ? "iris-text-dark"
                          : isZero
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {s.suffix}
                    </span>
                  ) : null}
                </div>
                <p
                  className={`mt-3 text-[13px] leading-5 sm:text-[14px] ${
                    isZero ? "text-white/80" : "text-black/65"
                  }`}
                >
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
