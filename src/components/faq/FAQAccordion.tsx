import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Faq } from "@/data/faqs";

export function FAQAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold transition-colors hover:bg-muted/60"
              >
                {faq.question}
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}