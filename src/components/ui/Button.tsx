import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-transparent bg-accent text-white shadow-glow hover:bg-accent-strong",
  secondary:
    "border-border bg-surface text-foreground hover:border-accent/50 hover:bg-surface-elevated",
  ghost:
    "border-transparent bg-transparent text-muted hover:bg-surface-elevated hover:text-foreground",
};

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-control border font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
