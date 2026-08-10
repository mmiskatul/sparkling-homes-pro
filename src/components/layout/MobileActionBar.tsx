import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={site.phoneHref}
          className="flex min-h-11 flex-col items-center justify-center rounded-xl bg-muted text-xs font-semibold text-foreground"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call Us
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 flex-col items-center justify-center rounded-xl bg-muted text-xs font-semibold text-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex min-h-11 flex-col items-center justify-center rounded-xl bg-primary text-xs font-semibold text-primary-foreground"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}