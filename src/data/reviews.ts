export type Review = {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: number | null;
  placeholder: boolean;
};

/**
 * Placeholder reviews. Replace `quote`, `name`, `location` and `rating`
 * with verified customer reviews and set `placeholder: false`.
 */
export const reviews: Review[] = Array.from({ length: 6 }, (_, i) => ({
  id: `review-${i + 1}`,
  quote: "[Customer testimonial will be provided by the business.]",
  name: "[Customer Name]",
  location: "[City]",
  rating: null,
  placeholder: true,
}));