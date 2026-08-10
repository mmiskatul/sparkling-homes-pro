# Fresh Spaces Cleaning — Residential Cleaning Website

A marketing website for a local residential cleaning business: home, about,
services, why choose us, service areas, reviews and a quote/contact page.

## Tech stack

- TanStack Start (file-based routing, SSR) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Lucide React icons
- Vite 7

## Project structure

```
src/
  routes/        # one file per page (/, /about, /services, ...)
  components/    # layout, common, services, reviews, areas, contact, faq
  data/          # site.ts, services.ts, reviews.ts, areas.ts, faqs.ts, navigation.ts
  assets/        # optimized imagery
```

## Updating business content

All business details live in `src/data/site.ts` (name, phone, WhatsApp number,
email, address, hours, social links). Services, service areas, FAQs and reviews
each have their own file in `src/data/`. Reviews and team members are
placeholders — replace them with verified customer content before launch.

## Commands

```sh
npm install     # install dependencies
npm run dev     # local development
npm run build   # production build
npm run lint    # lint
```

## Deployment

Publish directly from Lovable, or deploy the production build to any Node/edge
host. No environment variables are required — the quote form submits via a
`mailto:` link and WhatsApp deep links.

---

# Lovable project info

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
