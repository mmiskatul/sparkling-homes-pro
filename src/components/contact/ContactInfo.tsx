import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/common/Button";
import { site, whatsappLink } from "@/data/site";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
        <h3 className="text-lg font-semibold">Contact details</h3>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-medium">Phone</p>
              <a href={site.phoneHref} className="text-muted-foreground hover:text-foreground">
                {site.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-medium">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-muted-foreground hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-medium">Service area</p>
              <p className="text-muted-foreground">{site.primaryCity} and surrounding areas</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-medium">Business hours</p>
              <ul className="text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <ButtonLink
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="lg"
        block
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Chat With Us on WhatsApp
      </ButtonLink>
    </div>
  );
}