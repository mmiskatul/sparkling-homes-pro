import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { site } from "@/data/site";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center gap-2.5 rounded-full"
      aria-label={`${site.name} — home`}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <Sparkles className="size-4.5" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={
            inverted
              ? "truncate font-display text-base font-semibold text-primary-foreground"
              : "truncate font-display text-base font-semibold text-foreground"
          }
        >
          {site.name}
        </span>
        <span
          className={
            inverted
              ? "truncate text-[11px] text-primary-foreground/70"
              : "truncate text-[11px] text-muted-foreground"
          }
        >
          Residential Cleaning
        </span>
      </span>
    </Link>
  );
}