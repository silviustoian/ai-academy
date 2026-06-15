import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <Image
            src={siteConfig.assets.logo}
            alt={`${siteConfig.name} logo`}
            width={164}
            height={60}
            className="h-11 w-auto"
          />
          <p className="max-w-md text-sm leading-6 text-muted">
            Un program intensiv pentru AI, Cloud si ecosistemul Microsoft.
          </p>
        </div>

        <div className="space-y-5 md:text-right">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end"
            aria-label="Footer"
          >
            {footerNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted">
            Copyright &copy; {currentYear} {siteConfig.shortName}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
