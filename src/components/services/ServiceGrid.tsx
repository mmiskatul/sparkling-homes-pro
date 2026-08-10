import { Reveal } from "@/components/common/Reveal";
import type { Service } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({
  items,
  detailed = false,
}: {
  items: Service[];
  detailed?: boolean;
}) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => (
        <Reveal as="li" key={service.slug} delay={(i % 3) * 80} className="h-full">
          <ServiceCard service={service} detailed={detailed} />
        </Reveal>
      ))}
    </ul>
  );
}