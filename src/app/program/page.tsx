"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NextStep, PageHero } from "@/components/layout/PageHero";
import { Learn } from "@/components/sections/Learn";
import { Outcomes } from "@/components/sections/Outcomes";
import { programPageContent } from "@/data/subpage-content";
import { useLocale } from "@/lib/locale-context";

export default function ProgramPage() {
  const { locale } = useLocale();
  const copy = programPageContent[locale];

  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow={copy.eyebrow}
          title={copy.title}
          titleAccent={copy.titleAccent}
          intro={copy.intro}
          backLabel={locale === "ro" ? "Înapoi pe Home" : "Back to Home"}
          backHref="/"
          decor="ribbon"
        />
        <Learn />
        <Outcomes />
        <NextStep
          label={copy.next.label}
          title={copy.next.title}
          href={copy.next.href}
        />
      </main>
      <Footer />
    </div>
  );
}
