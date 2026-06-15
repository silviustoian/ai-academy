"use client";

import Image from "next/image";
import { Bot, Building2, Check, ShieldCheck, Zap } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useState, type ComponentType, type SVGProps } from "react";

import { Container } from "@/components/ui/Container";
import { academyContent } from "@/data/academy-content";
import { useLocale } from "@/lib/locale-context";

const pillarIcons: Record<
  "ai" | "power" | "dynamics" | "security",
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  ai: Bot,
  power: Zap,
  dynamics: Building2,
  security: ShieldCheck,
};

export function Academy() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = academyContent[locale];
  const tabsId = useId();
  const [activeKey, setActiveKey] = useState<typeof copy.pillars[number]["key"]>(
    copy.pillars[0].key,
  );

  useEffect(() => {
    if (!copy.pillars.some((p) => p.key === activeKey)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveKey(copy.pillars[0].key);
    }
  }, [copy.pillars, activeKey]);

  const activePillar =
    copy.pillars.find((p) => p.key === activeKey) ?? copy.pillars[0];
  const ActiveIcon = pillarIcons[activePillar.key];

  return (
    <section
      id="program"
      className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-32 lg:py-40"
      aria-labelledby="academy-title"
    >
      {/* Top blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black to-transparent"
      />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(46,98,250,0.18)_0%,transparent_45%),radial-gradient(circle_at_82%_78%,rgba(242,63,160,0.16)_0%,transparent_45%)]"
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

      {/* Iridescent fox brandmark accent — bottom right behind content */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-2 bottom-4 -z-[1] w-[110px] opacity-40 sm:right-8 sm:bottom-10 sm:w-[170px] sm:opacity-55 lg:right-[6%] lg:w-[220px]"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/branding/3d/fox.png"
            alt=""
            width={300}
            height={300}
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 170px, 110px"
            className="h-auto w-full drop-shadow-[0_0_50px_rgba(155,84,223,0.5)]"
          />
        </motion.div>
      </motion.div>

      <Container className="relative">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            {copy.eyebrow}
          </p>
          <h2
            id="academy-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.4rem, 6.2vw, 4.75rem)" }}
          >
            {copy.title}{" "}
            <span className="iris-text">{copy.titleAccent}</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 grid max-w-5xl gap-6 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-10"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p className="text-pretty text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {copy.paragraphOne}
          </p>
          <p className="text-pretty text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {copy.paragraphTwo}{" "}
            <span className="iris-text font-semibold">
              {copy.paragraphTwoAccent}
            </span>
          </p>
        </motion.div>

        <div className="mt-16 flex items-center gap-4 sm:mt-20 lg:mt-24">
          <span
            aria-hidden
            className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(214,179,255,0.5),transparent)]"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            {copy.pillarsLabel}
          </span>
          <span
            aria-hidden
            className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(214,179,255,0.5),transparent)]"
          />
        </div>

        <div
          role="tablist"
          aria-label="Pillars"
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-12 lg:gap-3"
        >
          {copy.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.key];
            const isActive = pillar.key === activeKey;
            return (
              <button
                key={pillar.key}
                type="button"
                role="tab"
                id={`${tabsId}-tab-${pillar.key}`}
                aria-selected={isActive}
                aria-controls={`${tabsId}-panel-${pillar.key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveKey(pillar.key)}
                className={`group relative inline-flex shrink-0 snap-start items-center gap-3 rounded-full border px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:px-5 ${
                  isActive
                    ? "border-white/70 bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.5),0_12px_40px_-12px_rgba(214,179,255,0.7)]"
                    : "border-white/15 bg-white/[0.04] text-white/70 hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                <span
                  className={`inline-flex size-7 items-center justify-center rounded-full border transition ${
                    isActive
                      ? "border-black/15 bg-black text-white"
                      : "border-white/15 bg-black/40 text-white"
                  }`}
                  aria-hidden
                >
                  <Icon className="size-3.5" strokeWidth={2} />
                </span>
                <span className="hidden sm:inline">{pillar.title}</span>
                <span className="sm:hidden">
                  0{index + 1}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-6 sm:mt-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${locale}-${activePillar.key}`}
              role="tabpanel"
              id={`${tabsId}-panel-${activePillar.key}`}
              aria-labelledby={`${tabsId}-tab-${activePillar.key}`}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(242,63,160,0.16), transparent 55%), radial-gradient(circle at 100% 100%, rgba(46,98,250,0.16), transparent 55%)",
                }}
              />

              <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
                <div>
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-black/50 text-white shadow-[0_0_30px_-8px_rgba(155,84,223,0.7)]"
                      aria-hidden
                    >
                      <ActiveIcon className="size-5" strokeWidth={1.8} />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
                      {locale === "ro" ? "Pilon" : "Pillar"} ·{" "}
                      {copy.pillars.findIndex((p) => p.key === activePillar.key) +
                        1}
                      /4
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-[28px] font-black uppercase tracking-[-0.01em] text-white sm:text-[36px]">
                    {activePillar.title}
                  </h3>
                  <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55">
                    {activePillar.stack}
                  </p>
                  <p className="mt-5 text-pretty text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                    {activePillar.body}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
                    {locale === "ro" ? "Ce înveți" : "What you learn"}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activePillar.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-3 text-[15px] leading-6 text-white/80"
                      >
                        <span
                          className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d6b3ff,#74a8ff)] text-black"
                          aria-hidden
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-2xl border border-white/12 bg-black/30 p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
                      {locale === "ro" ? "Rezultat" : "Outcome"}
                    </p>
                    <p className="mt-2 text-[14px] leading-6 text-white/85 sm:text-[15px]">
                      <span className="iris-text font-semibold">
                        {activePillar.outcome}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
