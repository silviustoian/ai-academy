"use client";

import {
  Bot,
  Building2,
  Check,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  useEffect,
  useId,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";

import { Container } from "@/components/ui/Container";
import { academyContent } from "@/data/academy-content";
import { curriculumContent } from "@/data/curriculum-content";
import { learnContent } from "@/data/learn-content";
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

type TopTab = "pillars" | "weeks";

export function Learn() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const learn = learnContent[locale];
  const academy = academyContent[locale];
  const curriculum = curriculumContent[locale];

  const tabsId = useId();
  const accId = useId();
  const [topTab, setTopTab] = useState<TopTab>("pillars");
  const [activePillar, setActivePillar] = useState<
    typeof academy.pillars[number]["key"]
  >(academy.pillars[0].key);
  const [openPhase, setOpenPhase] = useState<
    typeof curriculum.phases[number]["key"] | null
  >(curriculum.phases[0].key);

  useEffect(() => {
    if (!academy.pillars.some((p) => p.key === activePillar)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActivePillar(academy.pillars[0].key);
    }
  }, [academy.pillars, activePillar]);

  const pillar =
    academy.pillars.find((p) => p.key === activePillar) ?? academy.pillars[0];
  const PillarIcon = pillarIcons[pillar.key];

  return (
    <section
      id="program"
      className="relative isolate overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="learn-title"
    >
      {/* Top blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black to-transparent"
      />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(46,98,250,0.16)_0%,transparent_45%),radial-gradient(circle_at_82%_78%,rgba(242,63,160,0.14)_0%,transparent_50%)]"
      />

      {/* Fox brandmark bottom right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-2 bottom-4 -z-[1] w-[100px] opacity-35 sm:right-8 sm:bottom-10 sm:w-[160px] sm:opacity-50 lg:right-[6%] lg:w-[200px]"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 0.45, y: 0 }}
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
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 160px, 100px"
            className="h-auto w-full drop-shadow-[0_0_50px_rgba(155,84,223,0.5)]"
          />
        </motion.div>
      </motion.div>

      {/* Spiral top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-12 -z-[1] hidden h-[420px] w-[420px] opacity-35 sm:block sm:right-[-6%] sm:h-[480px] sm:w-[480px]"
      >
        <Image
          src="/branding/3d/spiral.png"
          alt=""
          width={480}
          height={480}
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
            {learn.eyebrow}
          </p>
          <h2
            id="learn-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.25rem)" }}
          >
            {learn.title}{" "}
            <span className="iris-text">{learn.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
            {learn.intro}
          </p>
        </motion.div>

        {/* Top tabs: Pillars / Weeks */}
        <div
          role="tablist"
          aria-label={learn.title}
          className="mt-8 inline-flex flex-wrap gap-2 rounded-full border border-white/12 bg-white/[0.03] p-1 backdrop-blur-sm sm:mt-10"
        >
          {(["pillars", "weeks"] as const).map((key) => {
            const isActive = topTab === key;
            return (
              <button
                key={key}
                role="tab"
                id={`${tabsId}-tab-${key}`}
                aria-selected={isActive}
                aria-controls={`${tabsId}-panel-${key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setTopTab(key)}
                className={`relative rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:px-5 sm:py-2.5 sm:text-[12px] ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {learn.tabs[key]}
              </button>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait" initial={false}>
            {topTab === "pillars" ? (
              <motion.div
                key={`pillars-${locale}`}
                role="tabpanel"
                id={`${tabsId}-panel-pillars`}
                aria-labelledby={`${tabsId}-tab-pillars`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Pillar chips */}
                <div
                  role="tablist"
                  aria-label={academy.pillarsLabel}
                  className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-3"
                >
                  {academy.pillars.map((p, idx) => {
                    const Icon = pillarIcons[p.key];
                    const isActive = p.key === activePillar;
                    return (
                      <button
                        key={p.key}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActivePillar(p.key)}
                        className={`group inline-flex shrink-0 snap-start items-center gap-3 rounded-full border px-4 py-2.5 text-left text-[12px] font-semibold uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:px-5 ${
                          isActive
                            ? "border-white/70 bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.5),0_12px_40px_-12px_rgba(214,179,255,0.7)]"
                            : "border-white/15 bg-white/[0.04] text-white/70 hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`inline-flex size-6 items-center justify-center rounded-full border transition ${
                            isActive
                              ? "border-black/15 bg-black text-white"
                              : "border-white/15 bg-black/40 text-white"
                          }`}
                        >
                          <Icon className="size-3" strokeWidth={2} />
                        </span>
                        <span className="hidden sm:inline">{p.title}</span>
                        <span className="sm:hidden">0{idx + 1}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="relative mt-6 sm:mt-8">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`${locale}-${pillar.key}`}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                      transition={{ duration: 0.32, ease: "easeOut" }}
                      className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
                        style={{
                          background:
                            "radial-gradient(circle at 0% 0%, rgba(242,63,160,0.16), transparent 55%), radial-gradient(circle at 100% 100%, rgba(46,98,250,0.16), transparent 55%)",
                        }}
                      />

                      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
                        <div>
                          <div className="flex items-center gap-3">
                            <span
                              aria-hidden
                              className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-black/50 text-white shadow-[0_0_30px_-8px_rgba(155,84,223,0.7)]"
                            >
                              <PillarIcon className="size-5" strokeWidth={1.8} />
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
                              {locale === "ro" ? "Pilon" : "Pillar"} ·{" "}
                              {academy.pillars.findIndex(
                                (p) => p.key === pillar.key,
                              ) + 1}
                              /4
                            </span>
                          </div>
                          <h3 className="font-display mt-5 text-[24px] font-black uppercase tracking-[-0.01em] text-white sm:text-[32px]">
                            {pillar.title}
                          </h3>
                          <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55">
                            {pillar.stack}
                          </p>
                          <p className="mt-4 text-pretty text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
                            {pillar.body}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">
                            {locale === "ro" ? "Ce înveți" : "What you learn"}
                          </p>
                          <ul className="mt-3 space-y-2.5">
                            {pillar.skills.map((skill) => (
                              <li
                                key={skill}
                                className="flex items-start gap-3 text-[14px] leading-6 text-white/80 sm:text-[15px]"
                              >
                                <span
                                  aria-hidden
                                  className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d6b3ff,#74a8ff)] text-black"
                                >
                                  <Check className="size-3" strokeWidth={3} />
                                </span>
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-5 rounded-2xl border border-white/12 bg-black/30 p-4 sm:p-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
                              {locale === "ro" ? "Rezultat" : "Outcome"}
                            </p>
                            <p className="mt-2 text-[14px] leading-6 text-white/85 sm:text-[15px]">
                              <span className="iris-text font-semibold">
                                {pillar.outcome}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`weeks-${locale}`}
                role="tabpanel"
                id={`${tabsId}-panel-weeks`}
                aria-labelledby={`${tabsId}-tab-weeks`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ol className="relative flex flex-col gap-3 sm:gap-4">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-[26px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block"
                  />

                  {curriculum.phases.map((phase, idx) => {
                    const isOpen = openPhase === phase.key;
                    const stepNum = String(idx + 1).padStart(2, "0");
                    const panelId = `${accId}-panel-${phase.key}`;
                    const buttonId = `${accId}-btn-${phase.key}`;
                    return (
                      <motion.li
                        key={phase.key}
                        layout
                        className={`group relative overflow-hidden rounded-3xl border backdrop-blur-sm transition duration-300 ${
                          isOpen
                            ? "border-white/30 bg-white/[0.05]"
                            : "border-white/12 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div
                          aria-hidden
                          className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl transition duration-500 ${
                            isOpen
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-50"
                          }`}
                          style={{
                            background:
                              "radial-gradient(circle at 0% 50%, rgba(155,84,223,0.18), transparent 55%), radial-gradient(circle at 100% 50%, rgba(46,98,250,0.14), transparent 55%)",
                          }}
                        />
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() =>
                            setOpenPhase(isOpen ? null : phase.key)
                          }
                          className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:gap-6 sm:p-6"
                        >
                          <span
                            aria-hidden
                            className={`inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border font-display text-[12px] font-bold tracking-[-0.01em] transition ${
                              isOpen
                                ? "border-transparent bg-white text-black"
                                : "border-white/15 bg-black/40 text-white/75"
                            }`}
                          >
                            {stepNum}
                          </span>
                          <div className="flex-1">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-[11px]">
                              {phase.weeks}
                            </p>
                            <h3 className="font-display mt-1 text-[18px] font-black uppercase tracking-[-0.01em] text-white sm:text-[22px]">
                              {phase.title}
                            </h3>
                            {phase.certs ? (
                              <ul className="mt-2 hidden flex-wrap gap-2 sm:flex">
                                {phase.certs.map((c) => (
                                  <li
                                    key={c}
                                    className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
                                  >
                                    {c}
                                  </li>
                                ))}
                              </ul>
                            ) : phase.covers ? (
                              <p className="mt-2 hidden text-[13px] text-white/55 sm:block">
                                {phase.covers}
                              </p>
                            ) : null}
                          </div>
                          <span
                            aria-hidden
                            className={`hidden size-9 shrink-0 items-center justify-center rounded-full border transition sm:inline-flex ${
                              isOpen
                                ? "border-white bg-white text-black rotate-45"
                                : "border-white/30 bg-black/40 text-white"
                            }`}
                          >
                            <Plus className="size-4" strokeWidth={2.5} />
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              key="panel"
                              id={panelId}
                              role="region"
                              aria-labelledby={buttonId}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.32, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="grid gap-5 px-5 pb-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:pb-7 lg:pl-[5.5rem]">
                                {phase.certs ? (
                                  <ul className="-mt-2 flex flex-wrap gap-2 sm:hidden">
                                    {phase.certs.map((c) => (
                                      <li
                                        key={c}
                                        className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
                                      >
                                        {c}
                                      </li>
                                    ))}
                                  </ul>
                                ) : phase.covers ? (
                                  <p className="-mt-2 text-[13px] text-white/55 sm:hidden">
                                    {phase.covers}
                                  </p>
                                ) : null}

                                <div>
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
                                    {phase.doingLabel}
                                  </p>
                                  <p className="mt-2 text-pretty text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
                                    {phase.doing}
                                  </p>
                                </div>

                                {phase.handsOn ? (
                                  <div className="relative rounded-2xl border border-white/12 bg-black/30 p-4 sm:p-5">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
                                      {phase.handsOnLabel}
                                    </p>
                                    <p className="mt-2 flex gap-2 text-[14px] leading-6 sm:text-[15px]">
                                      <CheckCircle2
                                        aria-hidden
                                        className="mt-0.5 size-4 shrink-0 text-[color:var(--brand-iris)]"
                                        strokeWidth={2}
                                      />
                                      <span className="text-white/85">
                                        {phase.handsOn}
                                      </span>
                                    </p>
                                  </div>
                                ) : null}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </motion.li>
                    );
                  })}
                </ol>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Persistent stats strip */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-[11px]">
            {curriculum.statsLabel}
          </p>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {curriculum.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 backdrop-blur-sm sm:p-5"
              >
                <dt className="font-display text-[24px] font-black tracking-[-0.02em] sm:text-[32px]">
                  <span className="iris-text">{s.value}</span>
                </dt>
                <dd className="mt-1 text-[12px] leading-5 text-white/60 sm:text-[13px]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </Container>
    </section>
  );
}
