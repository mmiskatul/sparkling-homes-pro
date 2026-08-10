import { Reveal } from "@/components/common/Reveal";
import type { Area } from "@/data/areas";
import { AreaCard } from "./AreaCard";

export function ServiceAreaGrid({ items }: { items: Area[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((area, i) => (
        <Reveal as="li" key={area.name} delay={(i % 3) * 70} className="h-full">
          <AreaCard area={area} />
        </Reveal>
      ))}
    </ul>
  );
}