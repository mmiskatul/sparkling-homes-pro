import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          width={900}
          height={700}
          className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        {detailed ? (
          <ul className="flex flex-col gap-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          to={detailed ? "/contact" : "/services"}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
        >
          {detailed ? "Get a Free Quote" : "Learn More"}
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
          <span className="sr-only"> about {service.title}</span>
        </Link>
      </div>
    </article>
  );
}