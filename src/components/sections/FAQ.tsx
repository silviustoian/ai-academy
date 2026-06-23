"use client";

import { Mail, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useId, useState } from "react";

import { Container } from "@/components/ui/Container";
import { faqContent } from "@/data/faq-content";
import { useLocale } from "@/lib/locale-context";

export function FAQ() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = faqContent[locale];
  const accId = useId();
  const [openKey, setOpenKey] = useState<string | null>(copy.questions[0].key);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#f5f1ea] py-16 text-[#0c0c10] sm:py-20 lg:py-24"
      aria-labelledby="faq-title"
    >
      {/* Fade FROM dark above only — bottom flows hard cut into next dark section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/35 to-transparent"
      />

      {/* Soft iris tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(155,84,223,0.10)_0%,transparent_45%),radial-gradient(circle_at_90%_80%,rgba(46,98,250,0.08)_0%,transparent_50%)]"
      />

      {/* Spiral 3D — bottom left corner */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-6 -z-[1] hidden w-[200px] opacity-45 lg:block lg:left-[-3%] lg:bottom-10 lg:w-[280px]"
        initial={{ opacity: 0, rotate: reduceMotion ? 0 : -15 }}
        whileInView={{ opacity: 0.5, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/branding/3d/spiral.png"
          alt=""
          width={300}
          height={300}
          className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(155,84,223,0.3)]"
        />
      </motion.div>

      {/* Brandmark watermark — top right (behind ghost number) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-12 -z-[2] hidden h-[420px] w-[420px] opacity-15 sm:block lg:opacity-20"
      >
        <Image
          src="/branding/brandmark-gradient.png"
          alt=""
          width={420}
          height={420}
          className="h-full w-full object-contain"
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
            id="faq-title"
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

        <motion.ul
          key={locale}
          className="mt-10 flex flex-col gap-2 sm:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.04 },
            },
          }}
        >
          {copy.questions.map((q) => {
            const isOpen = openKey === q.key;
            const panelId = `${accId}-panel-${q.key}`;
            const buttonId = `${accId}-btn-${q.key}`;
            return (
              <motion.li
                key={q.key}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                layout
                className={`group relative overflow-hidden rounded-2xl border transition duration-300 ${
                  isOpen
                    ? "border-black/20 bg-white shadow-[0_18px_45px_-24px_rgba(0,0,0,0.2)]"
                    : "border-black/10 bg-white/70 hover:border-black/20 hover:bg-white"
                }`}
              >
                {isOpen ? (
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[2px] iris-gradient"
                  />
                ) : null}

                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenKey(isOpen ? null : q.key)}
                  className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:gap-5 sm:p-6"
                >
                  <h3 className="flex-1 text-[15px] font-semibold leading-6 text-black sm:text-[16px] sm:leading-7">
                    {q.q}
                  </h3>
                  <span
                    aria-hidden
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full border transition ${
                      isOpen
                        ? "border-transparent bg-black text-white rotate-45"
                        : "border-black/15 bg-black/[0.03] text-black/75"
                    }`}
                  >
                    <Plus className="size-3.5" strokeWidth={2.5} />
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
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-pretty text-[14px] leading-7 text-black/70 sm:px-6 sm:pb-7 sm:text-[15px] sm:leading-8">
                        {q.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.25)] sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/55">
              {copy.helpCta.label}
            </p>
            <p className="mt-1 font-display text-[18px] font-black uppercase tracking-[-0.01em] sm:text-[20px]">
              {copy.helpCta.text}
            </p>
          </div>
          <a
            href={copy.helpCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-[#0c0c10] px-5 py-3 text-[12px] font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_-16px_rgba(155,84,223,0.55)] transition hover:shadow-[0_24px_60px_-16px_rgba(155,84,223,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <Mail className="size-4" strokeWidth={2} aria-hidden />
            {copy.helpCta.button}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
