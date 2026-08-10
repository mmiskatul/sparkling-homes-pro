import residential from "@/assets/service-residential.jpg";
import deepClean from "@/assets/service-deep.jpg";
import move from "@/assets/service-move.jpg";

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    description:
      "Regular house cleaning that keeps every room fresh, tidy and ready to enjoy.",
    image: residential,
    imageAlt: "Freshly made bed in a bright, clean bedroom",
    features: ["Kitchen & bathrooms", "Dusting & surfaces", "Floors vacuumed and mopped"],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom clean for the spots everyday tidying tends to miss.",
    image: deepClean,
    imageAlt: "Spotless white bathroom with a glass shower",
    features: ["Baseboards & door frames", "Inside appliances on request", "Grout & tile detail"],
  },
  {
    slug: "move-in-cleaning",
    title: "Move-In Cleaning",
    description:
      "Start life in your new home with sanitised surfaces and a spotless finish.",
    image: move,
    imageAlt: "Empty room with neatly stacked moving boxes",
    features: ["Cabinets inside and out", "Full bathroom sanitising", "Floors and fixtures"],
  },
  {
    slug: "move-out-cleaning",
    title: "Move-Out Cleaning",
    description:
      "Leave the property in excellent condition for the next owner or inspection.",
    image: move,
    imageAlt: "Clean empty apartment prepared for handover",
    features: ["Full property clean", "Appliance wipe-down", "Final walkthrough check"],
  },
  {
    slug: "recurring-cleaning",
    title: "Recurring Cleaning",
    description:
      "Weekly, bi-weekly or monthly visits on a schedule that fits your household.",
    image: residential,
    imageAlt: "Tidy living space maintained by a recurring cleaning plan",
    features: ["Consistent cleaning team", "Flexible frequency", "Priority scheduling"],
  },
  {
    slug: "apartment-cleaning",
    title: "Apartment Cleaning",
    description:
      "Efficient cleaning designed for apartments, condos and smaller living spaces.",
    image: deepClean,
    imageAlt: "Bright, clean apartment bathroom",
    features: ["Compact-space focus", "Building-friendly scheduling", "Quick turnarounds"],
  },
];

export const includedAreas = [
  "Kitchen",
  "Bathrooms",
  "Bedrooms",
  "Living Areas",
  "Floors",
  "Dusting",
  "Vacuuming",
  "Surfaces",
];

export const howItWorks = [
  { step: "01", title: "Request a Quote", description: "Tell us about your home and what you need cleaned." },
  { step: "02", title: "Choose Your Service", description: "We recommend the right clean and confirm the details." },
  { step: "03", title: "Schedule Your Cleaning", description: "Pick a date and time that works around your week." },
  { step: "04", title: "Enjoy Your Clean Home", description: "Come back to a fresh home and more free time." },
];