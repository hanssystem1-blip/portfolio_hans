import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  eyebrow: string;
  title: string;
}

export function Section({ id, eyebrow, title, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-12 md:py-16", className)} {...props}>
      <div className="mb-6 md:mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
        <h2 className="mt-1.5 text-xl md:text-2xl font-semibold text-ink">{title}</h2>
      </div>
      {children}
    </section>
  );
}
