# Contentful Events App

A modern events web application built with [Next.js](https://nextjs.org) and powered by [Contentful](https://www.contentful.com/). This app displays events and organizer profiles, using reusable UI components and efficient data fetching from Contentful.

## Features

- Event listing and single event pages
- Organizer profile pages
- Contentful CMS integration for events and organizers
- Reusable UI components: Button, Link, Typography, Image, RichTextRenderer, Skeletons
- TypeScript for type safety
- Modular and scalable project structure

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Set up Contentful

1. Create a Contentful account and space.
2. Add your Contentful API keys and space ID to your environment variables (e.g., `.env.local`).
3. Structure your Contentful content models for events and organizers as expected by the app (see `src/app/types/events.ts`).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `src/app/components/` – Reusable UI components (Button, Link, Typography, Image, RichTextRenderer, Skeletons, EventCard)
- `src/app/event/[slug]/page.tsx` – Single event page
- `src/app/organizer/[organizerId]/page.tsx` – Organizer profile page
- `src/app/queries/` – GraphQL queries for Contentful
- `src/app/lib/` – Contentful API helpers and utility functions
- `src/app/types/` – TypeScript types for events and organizers
- `src/app/providers.tsx` – App-wide providers

## Contentful Integration

- All event and organizer data is fetched from Contentful using GraphQL queries.
- Update your Contentful space to match the expected data structure for seamless integration.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
