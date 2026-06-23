import type { LocaleCode } from "@/types/content";

export const siteConfig = {
  name: "NEXINARI AI Academy",
  shortName: "NEXINARI",
  description:
    "Program intensiv de 8 saptamani pentru AI, Cloud si ecosistemul Microsoft.",
  defaultLocale: "ro" satisfies LocaleCode,
  locales: [
    { code: "ro", label: "RO" },
    { code: "en", label: "EN" },
  ] satisfies Array<{ code: LocaleCode; label: string }>,
  primaryCta: {
    label: "Apply for Access",
    href: "#apply",
  },
  assets: {
    logo: "/branding/nexinari-primary-gradient-white.svg",
    brandmark: "/branding/nexinari-brandmark-gradient.svg",
  },
} as const;
