"use client";

import Image from "next/image";
import { ChevronDown, Quote } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { problemContent } from "@/data/problem-content";
import { useLocale } from "@/lib/locale-context";

export function Problem() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = problemContent[locale];
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? copy.items : copy.items.slice(0, 2);
  const hiddenCount = copy.items.length - 2;

  const expandLabel = locale === "ro"
    ? `Vezi toate problemele (+${hiddenCount})`
    : `See all problems (+${hiddenCount})`;
  const collapseLabel = locale === "ro" ? "Restrânge" : "Collapse";

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="problema"
      className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-32 lg:py-40"
      aria-labelledby="problem-title"
    >
      {/* Top blend — keeps continuity from hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black to-transparent"
      />

      {/* Side ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(155,84,223,0.18)_0%,transparent_45%),radial-gradient(circle_at_10%_80%,rgba(46,98,250,0.16)_0%,transparent_50%)]"
      />

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />

      <Container>
        <motion.div
          className="max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            {copy.eyebrow}
          </p>
          <h2
            id="problem-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.4rem, 6.2vw, 4.75rem)" }}
          >
            {copy.title}
          </h2>
        </motion.div>

        {/* Iridescent ring accent — far corners, low opacity */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 -z-[1] w-[88px] opacity-55 sm:right-6 sm:top-6 sm:w-[140px] sm:opacity-70 xl:w-[180px]"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.7 }}
          whileInView={{ opacity: 0.7, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/branding/3d/ring.png"
              alt=""
              width={300}
              height={300}
              sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 120px"
              className="h-auto w-full drop-shadow-[0_0_50px_rgba(155,84,223,0.5)]"
            />
          </motion.div>
        </motion.div>

        <motion.ol
          key={locale}
          layout
          className="mt-14 flex flex-col gap-10 sm:mt-16 sm:gap-12 lg:mt-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
            },
          }}
        >
          <AnimatePresence initial={false}>
            {visibleItems.map((item, index) => (
              <motion.li
                key={item.quote}
                layout
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial={
                  index < 2
                    ? undefined
                    : { opacity: 0, y: reduceMotion ? 0 : 18, height: 0 }
                }
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10, height: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex max-w-3xl gap-5 border-l border-white/15 pl-6 sm:gap-6 sm:pl-8"
              >
                <span
                  className="absolute -left-px top-1 h-7 w-px bg-[linear-gradient(180deg,#d6b3ff,#74a8ff)]"
                  aria-hidden
                />
                <span
                  className="hidden text-[11px] font-semibold tracking-[0.32em] text-white/40 sm:block sm:pt-2"
                  aria-hidden
                >
                  0{index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-pretty text-[18px] font-semibold leading-[1.4] text-white sm:text-[22px]">
                    <Quote
                      aria-hidden
                      className="mr-2 inline-block size-4 -translate-y-1 align-middle text-white/40 sm:size-5"
                      strokeWidth={2}
                    />
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-pretty text-[15px] leading-7 text-white/65 sm:text-base sm:leading-7">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ol>

        {hiddenCount > 0 ? (
          <motion.div layout className="mt-10 sm:mt-12">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm transition hover:border-white/50 hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              {expanded ? collapseLabel : expandLabel}
              <ChevronDown
                aria-hidden
                className={`size-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : "rotate-0"
                }`}
                strokeWidth={2.2}
              />
            </button>
          </motion.div>
        ) : null}

        <motion.div
          className="relative mt-16 grid max-w-5xl gap-10 sm:mt-20 lg:mt-24 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-6 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(155,84,223,0.6),transparent)] sm:block"
            />
            <p className="text-pretty text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
              {copy.closing}{" "}
              <span className="iris-text font-semibold">
                {copy.closingAccent}
              </span>
            </p>
          </div>
          <motion.div
            aria-hidden
            className="mx-auto w-[200px] shrink-0 sm:w-[220px] lg:mx-0 lg:w-[180px] xl:w-[220px]"
            animate={
              reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-3, 3, -3] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/branding/3d/knot.png"
              alt=""
              width={500}
              height={500}
              sizes="(min-width: 1024px) 220px, 220px"
              className="h-auto w-full drop-shadow-[0_0_60px_rgba(242,63,160,0.4)]"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
