import { Map } from "lucide-react";
import { site } from "@/data/site";

/**
 * Static, dependency-free map placeholder.
 * Swap the inner content for a Mapbox/Google Maps embed when required.
 */
export function MapPlaceholder() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-primary-soft shadow-soft">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <div className="relative flex aspect-16/9 flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
          <Map className="size-6" aria-hidden="true" />
        </span>
        <p className="font-display text-lg font-semibold">Serving {site.primaryCity} & nearby</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Interactive map placeholder — ready to be replaced with a live map embed.
        </p>
      </div>
    </div>
  );
}