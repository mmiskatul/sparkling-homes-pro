/**
 * Single source of truth for business details.
 * Replace the placeholder values below with the real client information.
 */
export const site = {
  name: "Fresh Spaces Cleaning",
  tagline: "Professional Residential Cleaning",
  phoneDisplay: "(555) 010-2030",
  phoneHref: "tel:+15550102030",
  whatsappNumber: "15550102030",
  email: "hello@freshspacescleaning.com",
  primaryCity: "[Primary City]",
  addressLine: "[Street Address], [Primary City], [State] [ZIP]",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export const whatsappLink = (message = "Hi! I'd like a free cleaning quote.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;