import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "accent" | "neutral";
};

const tones = {
  accent:
    "border-accent/35 bg-accent/10 text-accent-foreground shadow-[0_0_28px_rgba(242,63,72,0.12)]",
  neutral: "border-border bg-surface-elevated text-muted",
};

export function Badge({ className, tone = "accent", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-semibold leading-none",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
