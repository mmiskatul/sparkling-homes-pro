import { MapPin } from "lucide-react";
import type { Area } from "@/data/areas";

export function AreaCard({ area }: { area: Area }) {
  return (
    <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-accent-foreground">
        <MapPin className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="truncate text-base font-semibold">{area.name}</h3>
        <p className="text-sm text-muted-foreground">{area.note}</p>
      </div>
    </div>
  );
}