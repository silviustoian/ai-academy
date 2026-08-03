"use client";

import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { thankYouContent } from "@/data/thank-you-content";
import { useCookieConsent } from "@/lib/cookie-consent";
import { useLocale } from "@/lib/locale-context";
import { generateEventId } from "@/lib/meta-pixel";

const FIRED_KEY = "nexinari.completeRegistrationFired";

export default function ThankYouPage() {
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const { status } = useCookieConsent();
  const copy = thankYouContent[locale];

  useEffect(() => {
    if (status !== "granted") return;
    if (typeof window === "undefined" || !window.fbq) return;
    if (sessionStorage.getItem(FIRED_KEY) === "1") return;

    window.fbq(
      "track",
      "CompleteRegistration",
      {
        content_name: "NEXINARI apply",
        content_category: "application",
        status: true,
      },
      { eventID: generateEventId() },
    );
    sessionStorage.setItem(FIRED_KEY, "1");
  }, [status]);

  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="relative isolate flex flex-1 items-center overflow-hidden py-24 text-white sm:py-32 lg:py-40">
        {/* Ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(242,63,160,0.18)_0%,transparent_50%),radial-gradient(circle_at_50%_75%,rgba(46,98,250,0.18)_0%,transparent_55%)]"
        />
        {/* Brandmark watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 -z-[1] hidden h-[420px] w-[420px] -translate-y-1/2 opacity-25 lg:block lg:right-[-4%]"
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
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f23fa0,#9b54df,#2e62fa)] shadow-[0_24px_60px_-20px_rgba(155,84,223,0.7)]"
              initial={{ scale: reduceMotion ? 1 : 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                delay: 0.1,
              }}
            >
              <CheckCircle2
                className="size-8 text-white"
                strokeWidth={2.2}
                aria-hidden
              />
            </motion.div>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">
              {copy.eyebrow}
            </p>

            <h1
              className="font-display mt-5 font-black uppercase leading-[0.92] tracking-[-0.02em] text-balance text-white"
              style={{ fontSize: "clamp(2.4rem, 6.4vw, 5rem)" }}
            >
              {copy.title}{" "}
              <span className="iris-text">{copy.titleAccent}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
              {copy.body}
            </p>

            <Link
              href="/"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <ArrowLeft
                className="size-3.5 transition group-hover:-translate-x-0.5"
                strokeWidth={2.5}
                aria-hidden
              />
              {copy.homeLabel}
            </Link>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
