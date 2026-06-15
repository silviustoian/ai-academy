"use client";

import {
  ArrowUpRight,
  GraduationCap,
  Info,
  LineChart,
  Plus,
  RefreshCcw,
  Rocket,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState, type ComponentType, type SVGProps } from "react";

import { Container } from "@/components/ui/Container";
import { audienceContent } from "@/data/audience-content";
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

export function Audience() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = audienceContent[locale];
  const accId = useId();
  const [openKey, setOpenKey] = useState<
    typeof copy.profiles[number]["key"] | null
  >(copy.profiles[0].key);

  const outcomeLabel = locale === "ro" ? "Ce obții" : "What you get";

  return (
    <section
      id="audience"
      className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-32 lg:py-40"
      aria-labelledby="audience-title"
    >
      {/* Top blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black to-transparent"
      />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_30%,rgba(242,63,160,0.16)_0%,transparent_45%),radial-gradient(circle_at_92%_70%,rgba(46,98,250,0.16)_0%,transparent_50%)]"
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
            id="audience-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance text-white"
            style={{ fontSize: "clamp(2.4rem, 6.2vw, 4.75rem)" }}
          >
            {copy.title}{" "}
            <span className="iris-text">{copy.titleAccent}</span>
          </h2>
        </motion.div>

        <motion.ul
          key={locale}
          className="mt-12 flex flex-col gap-3 sm:mt-16 sm:gap-4 lg:mt-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
            },
          }}
        >
          {copy.profiles.map((profile) => {
            const Icon = profileIcons[profile.key];
            const isOpen = openKey === profile.key;
            const panelId = `${accId}-panel-${profile.key}`;
            const buttonId = `${accId}-btn-${profile.key}`;
            return (
              <motion.li
                key={profile.key}
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
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
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
                  onClick={() => setOpenKey(isOpen ? null : profile.key)}
                  className="flex w-full items-center gap-5 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:gap-7 sm:p-7"
                >
                  <span
                    className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border transition ${
                      isOpen
                        ? "border-white/30 bg-white text-black"
                        : "border-white/15 bg-black/40 text-white"
                    }`}
                    aria-hidden
                  >
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>

                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45 sm:text-[11px]">
                      {profile.tag}
                    </p>
                    <h3 className="font-display mt-1 text-[20px] font-bold uppercase tracking-[-0.01em] text-white sm:text-[26px]">
                      {profile.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-6 text-white/65 sm:text-[15px]">
                      {profile.pitch}
                    </p>
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
                      <div className="grid gap-6 px-6 pb-7 sm:grid-cols-[1.1fr_0.9fr] sm:gap-10 sm:px-7 sm:pb-8 lg:pl-[6.25rem]">
                        <p className="text-pretty text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                          {profile.body}
                        </p>
                        <div className="relative rounded-2xl border border-white/12 bg-black/30 p-5">
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
        </motion.ul>

        <motion.aside
          className="mt-16 max-w-3xl rounded-3xl border border-white/12 bg-white/[0.02] p-7 backdrop-blur-sm sm:mt-20 sm:p-8 lg:mt-24"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-label={copy.notForTitle}
        >
          <div className="flex items-center gap-3">
            <span
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white"
              aria-hidden
            >
              <Info className="size-4" strokeWidth={2} />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
              {copy.notForLabel}
            </p>
          </div>
          <h3 className="font-display mt-4 text-[20px] font-bold uppercase tracking-[-0.01em] text-white sm:text-[24px]">
            {copy.notForTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {copy.notForItems.map((item) => (
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
        </motion.aside>
      </Container>
    </section>
  );
}
