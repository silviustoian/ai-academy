"use client";

import {
  BadgeCheck,
  FolderCheck,
  Infinity as InfinityIcon,
  Layers,
  UserCheck,
  Sparkles,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { outcomesContent } from "@/data/outcomes-content";
import { useLocale } from "@/lib/locale-context";

const iconMap: Record<
  "badge" | "folder" | "stack" | "linkedin" | "users" | "team" | "infinity",
  LucideIcon
> = {
  badge: BadgeCheck,
  folder: FolderCheck,
  stack: Layers,
  linkedin: UserCheck,
  users: Users,
  team: UsersRound,
  infinity: InfinityIcon,
};

export function Outcomes() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = outcomesContent[locale];

  return (
    <section
      id="outcomes"
      className="relative isolate overflow-hidden bg-[#f5f1ea] py-16 text-[#0c0c10] sm:py-20 lg:py-24"
      aria-labelledby="outcomes-title"
    >
      {/* Top fade from dark How section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/35 to-transparent"
      />
      {/* Bottom fade to next dark section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-black/35 to-transparent"
      />

      {/* Soft iris glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(46,98,250,0.08)_0%,transparent_55%),radial-gradient(circle_at_85%_75%,rgba(242,63,160,0.10)_0%,transparent_50%)]"
      />

      {/* Knot 3D decoration (top-right) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-12 top-8 -z-[1] w-[200px] opacity-80 sm:right-[2%] sm:top-12 sm:w-[280px] lg:right-[4%] lg:top-16 lg:w-[340px]"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16, rotate: -8 }}
        whileInView={{ opacity: 0.85, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/branding/3d/knot.png"
            alt=""
            width={500}
            height={500}
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 280px, 200px"
            className="h-auto w-full drop-shadow-[0_20px_60px_rgba(155,84,223,0.35)]"
          />
        </motion.div>
      </motion.div>

      {/* Brandmark watermark bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-[-10%] -z-[1] hidden h-[420px] w-[420px] opacity-20 sm:block sm:left-[-6%]"
      >
        <Image
          src="/branding/brandmark-gradient.png"
          alt=""
          width={420}
          height={420}
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
            <span aria-hidden className="h-px w-10 bg-black/20" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/55">
              {copy.eyebrow}
            </p>
          </div>
          <h2
            id="outcomes-title"
            className="font-display mt-5 font-black uppercase leading-[0.95] tracking-[-0.02em] text-balance"
            style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.25rem)" }}
          >
            {copy.title}{" "}
            <span className="iris-text-dark">{copy.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-black/75 sm:text-base sm:leading-8">
            {copy.intro}
          </p>
        </motion.div>

        <motion.ul
          key={locale}
          className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.07 },
            },
          }}
        >
          {copy.outcomes.map((o, idx) => {
            const Icon = iconMap[o.icon];
            const num = String(idx + 1).padStart(2, "0");
            return (
              <motion.li
                key={o.key}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-4 transition duration-300 sm:p-5 ${
                  o.highlight
                    ? "border-transparent bg-[#0c0c10] text-white shadow-[0_18px_45px_-20px_rgba(155,84,223,0.55)] lg:col-span-1"
                    : "border-black/10 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_16px_40px_-24px_rgba(0,0,0,0.16)] hover:border-black/20"
                }`}
              >
                {/* Highlight: iris top accent */}
                {o.highlight ? (
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] iris-gradient"
                  />
                ) : null}

                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`relative inline-flex size-9 shrink-0 items-center justify-center rounded-xl border ${
                      o.highlight
                        ? "border-white/15 bg-black"
                        : "border-black/10 bg-black/[0.03]"
                    }`}
                  >
                    {o.highlight ? (
                      <div
                        aria-hidden
                        className="absolute inset-0 iris-gradient opacity-30 mix-blend-overlay"
                      />
                    ) : null}
                    <Icon
                      className={`relative size-4 ${
                        o.highlight ? "text-white" : "text-black"
                      }`}
                      strokeWidth={1.8}
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-display text-[11px] font-black tracking-[0.22em] ${
                          o.highlight ? "text-white/55" : "text-black/45"
                        }`}
                        aria-hidden
                      >
                        {num}
                      </span>
                      {o.highlight ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90">
                          <Sparkles
                            className="size-2.5"
                            strokeWidth={2}
                            aria-hidden
                          />
                          {locale === "ro" ? "Avantaj real" : "Real edge"}
                        </span>
                      ) : null}
                    </div>
                    <h3
                      className={`font-display mt-0.5 text-[15px] font-black uppercase leading-[1.15] tracking-[-0.01em] sm:text-[16px] ${
                        o.highlight ? "text-white" : ""
                      }`}
                    >
                      {o.title}
                    </h3>
                  </div>
                </div>

                <p
                  className={`mt-2.5 flex-1 text-pretty text-[13px] leading-5 sm:text-[13.5px] sm:leading-[1.5] ${
                    o.highlight ? "text-white/80" : "text-black/65"
                  }`}
                >
                  {o.body}
                </p>

                <div
                  className={`mt-3 inline-flex w-fit items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                    o.highlight
                      ? "border-white/20 bg-white/5 text-white/85"
                      : "border-black/10 bg-black/[0.03] text-black/65"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`size-1.5 rounded-full ${
                      o.highlight
                        ? "bg-[linear-gradient(135deg,#f23fa0,#9b54df)]"
                        : "bg-[linear-gradient(135deg,#9b54df,#2e62fa)]"
                    }`}
                  />
                  {o.proof}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.p
          className="mt-8 max-w-2xl text-[12px] leading-5 text-black/55 sm:text-[13px]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {copy.footnote}
        </motion.p>
      </Container>
    </section>
  );
}
