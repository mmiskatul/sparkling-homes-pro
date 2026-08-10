import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function ImageSection({
  image,
  imageAlt,
  reverse = false,
  children,
  className,
}: {
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn(reverse && "lg:order-2")}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                width={1008}
                height={1104}
                className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={80} className={cn("flex flex-col gap-6", reverse && "lg:order-1")}>
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}