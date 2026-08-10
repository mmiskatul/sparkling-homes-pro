import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { howItWorks } from "@/data/services";

export function HowItWorks() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <Container>
        <SectionHeader
          label="How it works"
          title="Booking a clean is simple"
          description="Four straightforward steps from your first message to a spotless home."
        />
        <ol className="relative mt-12 grid gap-8 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute top-6 right-8 left-8 hidden h-px bg-border lg:block"
          />
          {howItWorks.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 90} className="relative flex gap-4 lg:flex-col">
              <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground shadow-soft">
                {item.step}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}