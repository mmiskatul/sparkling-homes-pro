import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/common/Button";
import { services } from "@/data/services";
import { site, whatsappLink } from "@/data/site";

type Values = Record<string, string>;

const fieldClass =
  "min-h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none";

export function QuoteForm({ extended = false }: { extended?: boolean }) {
  const [errors, setErrors] = useState<Values>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Values;
    const next: Values = {};

    if (!data.firstName?.trim()) next.firstName = "Please enter your first name.";
    if (!data.lastName?.trim()) next.lastName = "Please enter your last name.";
    if (!/^[\d\s()+-]{7,}$/.test(data.phone ?? "")) next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) next.email = "Please enter a valid email address.";
    if (!data.serviceType) next.serviceType = "Please choose a service.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    const lines = [
      `Name: ${data.firstName} ${data.lastName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.serviceType}`,
      data.propertyType ? `Property: ${data.propertyType}` : "",
      data.preferredDate ? `Preferred date: ${data.preferredDate}` : "",
      data.preferredTime ? `Preferred time: ${data.preferredTime}` : "",
      data.message ? `Message: ${data.message}` : "",
    ].filter(Boolean);

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Free quote request",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First Name" error={errors.firstName} required>
          <input id="firstName" name="firstName" autoComplete="given-name" className={fieldClass} />
        </Field>
        <Field id="lastName" label="Last Name" error={errors.lastName} required>
          <input id="lastName" name="lastName" autoComplete="family-name" className={fieldClass} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone} required>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>
        <Field id="email" label="Email" error={errors.email} required>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
        </Field>
        <Field id="serviceType" label="Service Type" error={errors.serviceType} required>
          <select id="serviceType" name="serviceType" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
        {extended ? (
          <Field id="propertyType" label="Property Type">
            <select id="propertyType" name="propertyType" defaultValue="" className={fieldClass}>
              <option value="">Select property type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Other</option>
            </select>
          </Field>
        ) : null}
        <Field id="preferredDate" label="Preferred Date">
          <input id="preferredDate" name="preferredDate" type="date" className={fieldClass} />
        </Field>
        {extended ? (
          <Field id="preferredTime" label="Preferred Time">
            <input id="preferredTime" name="preferredTime" type="time" className={fieldClass} />
          </Field>
        ) : null}
      </div>

      <Field id="message" label="Message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your home and what you'd like cleaned."
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
      </Field>

      <Button type="submit" size="lg" block>
        <Send className="size-4" aria-hidden="true" />
        Request Free Quote
      </Button>

      <p aria-live="polite" className="text-center text-sm text-muted-foreground">
        {sent
          ? "Thanks! Your email app should now be open with your request."
          : "We reply to every request — usually the same business day."}
      </p>

      <p className="text-center text-sm text-muted-foreground">
        Prefer messaging?{" "}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          WhatsApp Us
        </a>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}