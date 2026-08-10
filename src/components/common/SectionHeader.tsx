import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
  as: Heading = "h2",
}: {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {label ? <Badge>{label}</Badge> : null}
      <Heading className="text-3xl leading-tight font-semibold text-balance sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  );
}