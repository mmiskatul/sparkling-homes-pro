import { Phone, Sparkles } from "lucide-react";
import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function CTASection({
  title = "Ready for a Cleaner Home?",
  description = "Get your free quote today and let our professional team take care of the cleaning.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-secondary/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-secondary/20 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Free, no-obligation quote
            </span>
            <h2 className="text-3xl font-semibold text-balance text-primary-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-primary-foreground/85 text-pretty">
              {description}
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink to="/contact" variant="secondary" size="lg">
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline" size="lg">
                <Phone className="size-4" aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}