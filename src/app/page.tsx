import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site-config";

const typeSamples = [
  {
    label: "Display",
    className: "text-4xl font-semibold leading-tight sm:text-6xl",
    text: "AI, Cloud, Microsoft.",
  },
  {
    label: "Section",
    className: "text-3xl font-semibold leading-tight sm:text-4xl",
    text: "Premium foundation for future sections.",
  },
  {
    label: "Body",
    className: "text-base leading-7 text-muted sm:text-lg",
    text: "Reusable primitives, typed navigation, responsive spacing and accessible interaction states.",
  },
  {
    label: "Metadata",
    className: "text-sm font-medium leading-6 text-muted",
    text: "Bilingual-ready structure: RO default, EN prepared.",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <section className="surface-gradient py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge>Foundation preview</Badge>
                <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
                  {siteConfig.name}
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted">
                  Temporary internal preview for the technical and visual base:
                  tokens, typography, buttons, navigation and surfaces.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.primaryCta.href} size="lg">
                    {siteConfig.primaryCta.label}
                  </Button>
                  <Button href="#foundation" size="lg" variant="secondary">
                    View foundation
                  </Button>
                </div>
              </div>

              <div className="rounded-surface border border-border bg-surface/80 p-6 shadow-panel">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-surface border border-border bg-ink">
                    <Image
                      src={siteConfig.assets.brandmark}
                      alt=""
                      aria-hidden
                      width={40}
                      height={40}
                      className="size-9"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Brand system
                    </p>
                    <p className="text-sm text-muted">
                      Confirmed red/blue gradient, dark surfaces, restrained
                      purple accent.
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-5 gap-2" aria-hidden>
                  <span className="h-16 rounded-control bg-accent" />
                  <span className="h-16 rounded-control bg-brand-blue" />
                  <span className="h-16 rounded-control bg-ink ring-1 ring-border" />
                  <span className="h-16 rounded-control bg-white" />
                  <span className="h-16 rounded-control bg-brand-purple" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="foundation" className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              eyebrow="Temporary"
              title="Reusable foundations for the next milestones."
              description="This page intentionally demonstrates primitives only. Final landing sections, mentor cards, curriculum and FAQ remain for future implementation."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="rounded-surface border border-border bg-surface p-6 shadow-panel">
                <div className="flex flex-wrap gap-3">
                  <Button href={siteConfig.primaryCta.href}>
                    {siteConfig.primaryCta.label}
                  </Button>
                  <Button href="#top" variant="secondary">
                    Secondary action
                  </Button>
                  <Badge tone="neutral">40 locuri / editie</Badge>
                </div>

                <div className="mt-8 space-y-6">
                  {typeSamples.map((sample) => (
                    <div key={sample.label}>
                      <p className="mb-2 text-xs font-semibold text-accent">
                        {sample.label}
                      </p>
                      <p className={sample.className}>{sample.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-surface border border-border bg-surface p-6 shadow-panel">
                <p className="text-sm font-semibold text-foreground">
                  Sample surface
                </p>
                <p className="mt-3 text-base leading-7 text-muted">
                  Designed for dense future content such as program details,
                  outcomes, mentor summaries and application guidance without
                  locking the product into a full UI framework.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {["AI", "Cloud", "Security"].map((item) => (
                    <div
                      key={item}
                      className="rounded-control border border-border bg-surface-elevated p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
