"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { privacyContent } from "@/data/legal-content";
import { useLocale } from "@/lib/locale-context";

export default function PrivacyPage() {
  const { locale } = useLocale();
  const copy = privacyContent[locale];

  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <LegalLayout
        eyebrow={copy.eyebrow}
        title={copy.title}
        titleAccent={copy.titleAccent}
        intro={copy.intro}
        lastUpdated={copy.lastUpdated}
        sections={copy.sections}
      />
      <Footer />
    </div>
  );
}
