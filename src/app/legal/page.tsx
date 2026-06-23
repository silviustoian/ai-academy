"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { legalIndexContent } from "@/data/legal-content";
import { useLocale } from "@/lib/locale-context";

export default function LegalIndexPage() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = legalIndexContent[locale];

  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="relative isolate flex-1 overflow-hidden pt-32 pb-20 text-white sm:pt-40 lg:pt-44 lg:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(155,84,223,0.14)_0%,transparent_45%),radial-gradient(circle_at_85%_85%,rgba(46,98,250,0.12)_0%,transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-20 -z-[1] hidden h-[460px] w-[460px] opacity-25 sm:block"
        >
          <Image
            src="/branding/brandmark-gradient.png"
            alt=""
            width={460}
            height={460}
            className="h-full w-full object-contain"
          />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 transition hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <ArrowLeft className="size-3.5" strokeWidth={2.5} aria-hidden />
              {locale === "ro" ? "Înapoi pe Home" : "Back to Home"}
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 max-w-3xl"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
              {copy.eyebrow}
            </p>
            <h1
              className="font-display mt-5 font-black uppercase leading-[0.92] tracking-[-0.02em] text-balance"
              style={{ fontSize: "clamp(2.2rem, 5.6vw, 4.25rem)" }}
            >
              {copy.title}{" "}
              <span className="iris-text">{copy.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
              {copy.intro}
            </p>
          </motion.div>

          <motion.ul
            key={locale}
            className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
              },
            }}
          >
            {copy.links.map((link) => (
              <motion.li
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus sm:p-7"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] iris-gradient opacity-0 transition group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-display text-[18px] font-black uppercase tracking-[-0.01em] text-white sm:text-[20px]">
                      {link.label}
                    </h2>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-pretty text-[14px] leading-6 text-white/65 sm:text-[15px]">
                    {link.description}
                  </p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
