"use client";

import {
  ArrowUpRight,
  GraduationCap,
  Info,
  LineChart,
  Plus,
  Quote,
  RefreshCcw,
  Rocket,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useId, useState, type ComponentType, type SVGProps } from "react";

import { Container } from "@/components/ui/Container";
import { audienceContent } from "@/data/audience-content";
import { fitContent } from "@/data/fit-content";
import { problemContent } from "@/data/problem-content";
import { useLocale } from "@/lib/locale-context";

const profileIcons: Record<
  "student" | "career" | "analyst" | "founder",
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  student: GraduationCap,
  career: RefreshCcw,
  analyst: LineChart,
  founder: Rocket,
};

type TabKey = "problem" | "audience";

export function Fit() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const fit = fitContent[locale];
  const problem = problemContent[locale];
  const audience = audienceContent[locale];

  const tabsId = useId();
  const accId = useId();
  const [tab, setTab] = useState<TabKey>("problem");
  const [openKey, setOpenKey] = useState<
    typeof audience.profiles[number]["key"] | null
  >(audience.profiles[0].key);

  const outcomeLabel = locale === "ro" ? "Ce obții" : "What you get";

  return (
    <section
      id="fit"
      className="relative isolate overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="fit-title"
    >
      {/* Top blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black to-transparent"
      />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(155,84,223,0.16)_0%,transparent_45%),radial-gradient(circle_at_8%_85%,rgba(46,98,250,0.14)_0%,transparent_50%)]"
      />

      {/* Iridescent ring (subtle, far corner) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-3 top-6 -z-[1] w-[88px] opacity-50 sm:right-6 sm:w-[140px] sm:opacity-60 xl:w-[170px]"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/branding/3d/ring.png"
            alt=""
            width={300}
            height={300}
            sizes="(min-width: 1280px) 170px, (min-width: 640px) 140px, 90px"
            className="h-auto w-full drop-shadow-[0_0_50px_rgba(155,84,223,0.45)]"
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
            {fit.eyebrow}
          </p>
          <h2
            id="fit-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.25rem)" }}
          >
            {fit.title}{" "}
            <span className="iris-text">{fit.titleAccent}</span>
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label={fit.title}
          className="mt-10 inline-flex flex-wrap gap-2 rounded-full border border-white/12 bg-white/[0.03] p-1 backdrop-blur-sm"
        >
          {(["problem", "audience"] as const).map((key) => {
            const isActive = tab === key;
            return (
              <button
                key={key}
                role="tab"
                id={`${tabsId}-tab-${key}`}
                aria-selected={isActive}
                aria-controls={`${tabsId}-panel-${key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setTab(key)}
                className={`relative rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:px-5 sm:py-2.5 sm:text-[12px] ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {fit.tabs[key]}
              </button>
            );
          })}
        </div>

        {/* Panels */}
        <div className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait" initial={false}>
            {tab === "problem" ? (
              <motion.div
                key={`problem-${locale}`}
                role="tabpanel"
                id={`${tabsId}-panel-problem`}
                aria-labelledby={`${tabsId}-tab-problem`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ol className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                  {problem.items.map((item, idx) => (
                    <motion.li
                      key={item.quote}
                      initial={{
                        opacity: 0,
                        y: reduceMotion ? 0 : 18,
                      }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: reduceMotion ? 0 : idx * 0.06,
                      }}
                      className="relative flex gap-4 border-l border-white/15 pl-5 sm:pl-6"
                    >
                      <span
                        aria-hidden
                        className="absolute -left-px top-1 h-7 w-px bg-[linear-gradient(180deg,#d6b3ff,#74a8ff)]"
                      />
                      <span
                        aria-hidden
                        className="hidden text-[11px] font-semibold tracking-[0.32em] text-white/40 sm:block sm:pt-2"
                      >
                        0{idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-pretty text-[16px] font-semibold leading-[1.4] text-white sm:text-[18px]">
                          <Quote
                            aria-hidden
                            className="mr-2 inline-block size-4 -translate-y-1 align-middle text-white/40"
                            strokeWidth={2}
                          />
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <p className="mt-2 text-pretty text-[14px] leading-6 text-white/65 sm:text-[15px] sm:leading-7">
                          {item.body}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ol>

                <div className="mt-10 max-w-3xl rounded-3xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-7">
                  <p className="text-pretty text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                    {problem.closing}{" "}
                    <span className="iris-text font-semibold">
                      {problem.closingAccent}
                    </span>
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`audience-${locale}`}
                role="tabpanel"
                id={`${tabsId}-panel-audience`}
                aria-labelledby={`${tabsId}-tab-audience`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ul className="flex flex-col gap-3 sm:gap-4">
                  {audience.profiles.map((profile) => {
                    const Icon = profileIcons[profile.key];
                    const isOpen = openKey === profile.key;
                    const panelId = `${accId}-panel-${profile.key}`;
                    const buttonId = `${accId}-btn-${profile.key}`;
                    return (
                      <motion.li
                        key={profile.key}
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
                              : "opacity-0 group-hover:opacity-60"
                          }`}
                          style={{
                            background:
                              "radial-gradient(circle at 0% 0%, rgba(242,63,160,0.16), transparent 55%), radial-gradient(circle at 100% 100%, rgba(46,98,250,0.16), transparent 55%)",
                          }}
                        />
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() =>
                            setOpenKey(isOpen ? null : profile.key)
                          }
                          className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:gap-6 sm:p-6"
                        >
                          <span
                            aria-hidden
                            className={`inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border transition ${
                              isOpen
                                ? "border-white/30 bg-white text-black"
                                : "border-white/15 bg-black/40 text-white"
                            }`}
                          >
                            <Icon className="size-5" strokeWidth={1.8} />
                          </span>
                          <div className="flex-1">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-[11px]">
                              {profile.tag}
                            </p>
                            <h3 className="font-display mt-1 text-[18px] font-black uppercase tracking-[-0.01em] text-white sm:text-[22px]">
                              {profile.title}
                            </h3>
                            <p className="mt-1 text-[13px] leading-6 text-white/65 sm:text-[14px]">
                              {profile.pitch}
                            </p>
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
                              <div className="grid gap-5 px-5 pb-6 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8 sm:px-6 sm:pb-7 lg:pl-[5.5rem]">
                                <p className="text-pretty text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
                                  {profile.body}
                                </p>
                                <div className="relative rounded-2xl border border-white/12 bg-black/30 p-4 sm:p-5">
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
                                    {outcomeLabel}
                                  </p>
                                  <p className="mt-2 text-[14px] leading-6 sm:text-[15px]">
                                    <span className="iris-text font-semibold">
                                      {profile.outcome}
                                    </span>
                                  </p>
                                  <ArrowUpRight
                                    aria-hidden
                                    className="absolute right-4 top-4 size-4 text-white/40"
                                    strokeWidth={2}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </motion.li>
                    );
                  })}
                </ul>

                <aside
                  className="mt-10 max-w-3xl rounded-3xl border border-white/12 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-7"
                  aria-label={audience.notForTitle}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white"
                    >
                      <Info className="size-4" strokeWidth={2} />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
                      {audience.notForLabel}
                    </p>
                  </div>
                  <h3 className="font-display mt-3 text-[18px] font-black uppercase tracking-[-0.01em] text-white sm:text-[22px]">
                    {audience.notForTitle}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {audience.notForItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[14px] leading-7 text-white/70 sm:text-[15px]"
                      >
                        <span
                          aria-hidden
                          className="mt-3 size-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#f23fa0,#9b54df)]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
