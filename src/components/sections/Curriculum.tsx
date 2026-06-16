"use client";

import { CheckCircle2, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useId, useState } from "react";

import { Container } from "@/components/ui/Container";
import { curriculumContent } from "@/data/curriculum-content";
import { useLocale } from "@/lib/locale-context";

export function Curriculum() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = curriculumContent[locale];
  const accId = useId();
  const [openKey, setOpenKey] = useState<
    typeof copy.phases[number]["key"] | null
  >(copy.phases[0].key);

  return (
    <section
      id="curriculum"
      className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-32 lg:py-40"
      aria-labelledby="curriculum-title"
    >
      {/* Top blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black to-transparent"
      />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(155,84,223,0.18)_0%,transparent_45%),radial-gradient(circle_at_10%_85%,rgba(6,240,255,0.12)_0%,transparent_50%)]"
      />

      {/* Decorative spiral */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 -z-[1] h-[420px] w-[420px] opacity-50 blur-[2px] sm:right-[-6%] sm:top-16 sm:h-[520px] sm:w-[520px] sm:opacity-60 sm:blur-0"
      >
        <Image
          src="/branding/3d/spiral.png"
          alt=""
          width={520}
          height={520}
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
            {copy.eyebrow}
          </p>
          <h2
            id="curriculum-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.4rem, 6.2vw, 4.75rem)" }}
          >
            {copy.title}{" "}
            <span className="iris-text">{copy.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
            {copy.intro}
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-[11px]">
            {copy.phasesLabel}
          </p>

          <motion.ol
            key={locale}
            className="relative flex flex-col gap-3 sm:gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
              },
            }}
          >
            {/* Vertical timeline line */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[26px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block"
            />

            {copy.phases.map((phase, idx) => {
              const isOpen = openKey === phase.key;
              const panelId = `${accId}-panel-${phase.key}`;
              const buttonId = `${accId}-btn-${phase.key}`;
              const stepNum = String(idx + 1).padStart(2, "0");
              return (
                <motion.li
                  key={phase.key}
                  variants={{
                    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
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
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-50"
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
                    onClick={() => setOpenKey(isOpen ? null : phase.key)}
                    className="flex w-full items-center gap-5 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:gap-7 sm:p-7"
                  >
                    <span
                      className={`relative inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border font-display text-[13px] font-bold tracking-[-0.01em] transition ${
                        isOpen
                          ? "border-transparent bg-white text-black"
                          : "border-white/15 bg-black/40 text-white/75"
                      }`}
                      aria-hidden
                    >
                      {stepNum}
                    </span>

                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-[11px]">
                        {phase.weeks}
                      </p>
                      <h3 className="font-display mt-1 text-[20px] font-bold uppercase tracking-[-0.01em] text-white sm:text-[26px]">
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
                      className={`hidden size-10 shrink-0 items-center justify-center rounded-full border transition sm:inline-flex ${
                        isOpen
                          ? "border-white bg-white text-black rotate-45"
                          : "border-white/30 bg-black/40 text-white"
                      }`}
                      aria-hidden
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
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 px-6 pb-7 sm:grid-cols-2 sm:gap-8 sm:px-7 sm:pb-8 lg:pl-[6.25rem]">
                          {/* Mobile certs/covers fallback */}
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
                            <p className="mt-2 text-pretty text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                              {phase.doing}
                            </p>
                          </div>

                          {phase.handsOn ? (
                            <div className="relative rounded-2xl border border-white/12 bg-black/30 p-5">
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
          </motion.ol>
        </div>

        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-[11px]">
            {copy.statsLabel}
          </p>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {copy.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/12 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6"
              >
                <dt className="font-display text-[28px] font-black tracking-[-0.02em] sm:text-[36px]">
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
