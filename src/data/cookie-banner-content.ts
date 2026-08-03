import type { LocaleCode } from "@/types/content";

type CookieBannerCopy = {
  title: string;
  body: string;
  policyLabel: string;
  policyHref: string;
  accept: string;
  reject: string;
};

export const cookieBannerContent: Record<LocaleCode, CookieBannerCopy> = {
  ro: {
    title: "Cookies pentru analiză",
    body: "Folosim cookies necesare pentru funcționarea site-ului și, cu acordul tău, cookies pentru analiză și marketing (Meta Pixel) ca să înțelegem cum funcționează campaniile noastre.",
    policyLabel: "Vezi politica de cookies",
    policyHref: "/legal/cookies",
    accept: "Accept toate",
    reject: "Doar necesare",
  },
  en: {
    title: "Analytics cookies",
    body: "We use strictly necessary cookies for the site to work and, with your consent, analytics and marketing cookies (Meta Pixel) so we can understand how our campaigns perform.",
    policyLabel: "See cookies policy",
    policyHref: "/legal/cookies",
    accept: "Accept all",
    reject: "Necessary only",
  },
};
