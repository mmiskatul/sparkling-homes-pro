import { CalendarClock, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description: "Dependable cleaning services you can count on.",
  },
  {
    icon: Sparkles,
    title: "Experienced Cleaners",
    description: "Professional cleaners who care about every detail.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description: "Cleaning schedules designed around your needs.",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction Guaranteed",
    description: "We're committed to delivering a clean you'll love.",
  },
];

export function Benefits() {
  return (
    <section className="py-14 sm:py-20" aria-label="Why customers trust us">
      <Container>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal as="li" key={benefit.title} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
                  <benefit.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-display text-lg font-semibold">{benefit.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}