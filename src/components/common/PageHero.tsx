import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Container } from "./Container";

export function PageHero({
  label,
  title,
  description,
  children,
}: {
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary-soft blur-3xl"
      />
      <Container className="relative py-14 sm:py-20">
        <div className="flex max-w-2xl flex-col items-start gap-5">
          {label ? <Badge>{label}</Badge> : null}
          <h1 className="text-3xl leading-tight font-semibold text-balance sm:text-5xl">{title}</h1>
          {description ? (
            <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}