"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NextStep, PageHero } from "@/components/layout/PageHero";
import { Mentors } from "@/components/sections/Mentors";
import { mentorsPageContent } from "@/data/subpage-content";
import { useLocale } from "@/lib/locale-context";

export default function MentorsPage() {
  const { locale } = useLocale();
  const copy = mentorsPageContent[locale];

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
          decor="knot"
        />
        <Mentors />
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
