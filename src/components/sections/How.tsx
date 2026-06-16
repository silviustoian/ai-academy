"use client";

import { ArrowRight, FileEdit, Mail, Rocket } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, type ComponentType, type SVGProps } from "react";

import { Container } from "@/components/ui/Container";
import { howContent } from "@/data/how-content";
import { useLocale } from "@/lib/locale-context";

const stepIcons: Record<
  "apply" | "confirm" | "start",
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  apply: FileEdit,
  confirm: Mail,
  start: Rocket,
};

export function How() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = howContent[locale];
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 40%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.3,
  });
  const lineScale = useTransform(lineProgress, [0, 1], [0, 1]);

  return (
    <section
      id="how"
      className="relative isolate overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="how-title"
    >
      {/* Top fade from cream Mentors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#f5f1ea]/15 to-transparent"
      />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(242,63,160,0.14)_0%,transparent_45%),radial-gradient(circle_at_82%_78%,rgba(46,98,250,0.16)_0%,transparent_50%)]"
      />

      {/* Decorative orb top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-12 -z-[1] hidden h-[340px] w-[340px] opacity-50 sm:block"
      >
        <Image
          src="/branding/3d/orb.png"
          alt=""
          width={340}
          height={340}
          className="h-full w-full object-contain"
          priority={false}
        />
      </div>

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            {copy.eyebrow}
          </p>
          <h2
            id="how-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.25rem)" }}
          >
            {copy.title}{" "}
            <span className="iris-text">{copy.titleAccent}</span>
          </h2>
        </motion.div>

        <div
          ref={trackRef}
          className="relative mt-14 sm:mt-20"
          key={locale}
        >
          {/* Horizontal connecting line (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12%] right-[12%] top-[44px] hidden h-px sm:block"
          >
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              className="absolute inset-0 iris-gradient origin-left"
              style={{ scaleX: reduceMotion ? 1 : lineScale }}
            />
          </div>

          {/* Vertical connecting line (mobile) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[27px] top-6 bottom-6 w-px sm:hidden"
          >
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              className="absolute inset-0 iris-gradient origin-top"
              style={{ scaleY: reduceMotion ? 1 : lineScale }}
            />
          </div>

          <ol className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
            {copy.steps.map((step, idx) => {
              const Icon = stepIcons[step.key];
              const num = String(idx + 1).padStart(2, "0");
              return (
                <motion.li
                  key={step.key}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: reduceMotion ? 0 : 0.15 + idx * 0.15,
                  }}
                  className="relative flex gap-5 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
                >
                  {/* Node circle */}
                  <div className="relative shrink-0">
                    <div
                      aria-hidden
                      className="absolute inset-0 -m-2 rounded-full bg-[radial-gradient(circle,rgba(214,179,255,0.35)_0%,transparent_70%)] blur-md"
                    />
                    <div
                      className="relative inline-flex size-14 items-center justify-center rounded-full border border-white/20 bg-black text-white shadow-[0_8px_28px_-8px_rgba(155,84,223,0.55)]"
                    >
                      <Icon className="size-5" strokeWidth={1.8} aria-hidden />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 sm:mt-7">
                    <div className="flex items-center gap-3 sm:justify-center">
                      <span
                        className="font-display text-[42px] font-black leading-none tracking-[-0.04em] iris-text sm:text-[56px]"
                        aria-hidden
                      >
                        {num}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55 sm:text-[11px]">
                        {step.label} · {step.meta}
                      </span>
                    </div>

                    <h3 className="font-display mt-2 text-[22px] font-black uppercase tracking-[-0.01em] sm:mt-3 sm:text-[24px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-pretty text-[14px] leading-6 text-white/70 sm:mx-auto sm:text-[15px] sm:leading-7">
                      {step.body}
                    </p>
                  </div>

                  {/* Arrow between steps (desktop only) */}
                  {idx < copy.steps.length - 1 ? (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-3 top-[38px] hidden size-5 text-white/40 sm:block"
                      strokeWidth={2}
                    />
                  ) : null}
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center gap-3 sm:mt-20"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a
            href="#apply"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 font-display text-[13px] font-black uppercase tracking-[0.12em] text-black shadow-[0_18px_45px_-12px_rgba(214,179,255,0.55)] transition hover:shadow-[0_24px_60px_-12px_rgba(214,179,255,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:text-[14px]"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 -left-12 w-12 -skew-x-12 bg-white/60 opacity-0 transition duration-700 group-hover:translate-x-[260%] group-hover:opacity-100"
            />
            <span className="relative">{copy.cta}</span>
            <ArrowRight
              className="relative size-4 transition group-hover:translate-x-1"
              strokeWidth={2.5}
              aria-hidden
            />
          </a>
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/50">
            {copy.ctaNote}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
