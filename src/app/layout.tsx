import type { Metadata } from "next";

import { CookieBanner } from "@/components/CookieBanner";
import { MetaPixel } from "@/components/MetaPixel";
import { siteConfig } from "@/data/site-config";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.defaultLocale}
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full overflow-x-clip bg-background text-foreground">
        <CookieConsentProvider>
          <LocaleProvider defaultLocale={siteConfig.defaultLocale}>
            {children}
            <MetaPixel />
            <CookieBanner />
          </LocaleProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
