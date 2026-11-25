# Nioboro

Website for **Nioboro**, a lodging and design space in Yogyakarta, Indonesia. The site presents the rooms, services, story, and contact details in Indonesian, with a focus on calm, editorial layouts and smooth motion.

Built with [React Router](https://reactrouter.com/) in framework mode, React 19, TypeScript, Tailwind CSS v4, and Bun.

## Tech stack

| Layer     | Choice                                                      |
| --------- | ----------------------------------------------------------- |
| Framework | React Router 8 (SSR, file-based routes via `flatRoutes`)    |
| UI        | React 19, Tailwind CSS v4, Base UI, shadcn-style components |
| Motion    | Motion (Framer Motion API) and Lenis smooth scrolling       |
| Images    | `@unpic/react` with local WebP assets                       |
| Icons     | Lucide React                                                |
| Fonts     | Inter and Manrope, self-hosted via Fontsource               |
| Tooling   | Bun, TypeScript, Prettier, GitHub Actions                   |

## Requirements

- [Bun](https://bun.sh/) 1.4 or newer (recommended)
- Node.js 20+ if you prefer `npm`/`pnpm` instead of Bun

## Getting started

```bash
git clone git@github.com:I-Kail-I/nioboro.git
cd nioboro
bun install
cp .env.example .env
bun run dev
```

The app runs at <http://localhost:3000> by default. Change `PORT` in `.env` to use another port.

## Scripts

| Command                | Description                            |
| ---------------------- | -------------------------------------- |
| `bun run dev`          | Start the dev server with HMR          |
| `bun run build`        | Create a production build in `build/`  |
| `bun run start`        | Serve the production build             |
| `bun run typecheck`    | Generate route types and run `tsc`     |
| `bun run format`       | Format the repository with Prettier    |
| `bun run format:check` | Check formatting without writing files |

There is no separate lint or test script yet; CI runs `typecheck` and `format:check`.

## Environment variables

| Variable        | Default               | Purpose                                                                   |
| --------------- | --------------------- | ------------------------------------------------------------------------- |
| `PORT`          | `3000`                | Dev server port, read in `vite.config.ts`                                 |
| `VITE_SITE_URL` | `https://nioboro.com` | Absolute site URL used for canonical links, Open Graph, and `sitemap.xml` |

`VITE_SITE_URL` must not end with a slash. Vite inlines `VITE_*` variables at build time, so changing it requires a new build (and it cannot be set as a runtime environment variable). When you deploy to a different domain, also update the `Sitemap:` line in `public/robots.txt`.

## Routes

| Path           | File                           | Description                                      |
| -------------- | ------------------------------ | ------------------------------------------------ |
| `/`            | `app/routes/_index/route.tsx`  | Landing page: hero, about, rooms, offers, quotes |
| `/about`       | `app/routes/about/route.tsx`   | Story, principles, and journey                   |
| `/rooms`       | `app/routes/rooms/route.tsx`   | Room and space collection                        |
| `/ruangan`     | `app/routes/ruangan.tsx`       | Redirects to `/rooms`                            |
| `/layanan`     | `app/routes/layanan/route.tsx` | Architectural, interior, and furniture services  |
| `/kontak`      | `app/routes/kontak/route.tsx`  | Contact topics and email                         |
| `/404`         | `app/routes/404.tsx`           | Not-found page (excluded from search indexes)    |
| `/sitemap.xml` | `app/routes/sitemap[.]xml.ts`  | Generated XML sitemap                            |
| `/robots.txt`  | `public/robots.txt`            | Crawler rules                                    |

## Project structure

```text
app/
├── components/
│   ├── layouts/          # Site header and footer
│   ├── ui/               # Shared UI primitives
│   └── not-found-page.tsx
├── lib/
│   ├── seo.ts            # Meta, Open Graph, canonical, JSON-LD helpers
│   └── utils.ts
├── routes/
│   ├── _index/           # Home page and sections
│   ├── about/
│   ├── rooms/
│   ├── layanan/
│   ├── kontak/
│   ├── 404.tsx
│   ├── ruangan.tsx
│   └── sitemap[.]xml.ts
├── app.css               # Tailwind theme and global styles
├── root.tsx              # Document shell, shared metadata, JSON-LD
└── routes.ts             # File-based route config
public/
├── assets/               # Page imagery and `og-image.jpg`
├── favicon.ico
├── robots.txt
└── site.webmanifest
```

## SEO

SEO metadata lives in `app/lib/seo.ts` and is applied per route through the `meta` export:

- Indonesian page titles and descriptions
- Canonical URL for every indexable page
- Open Graph and Twitter Card tags, using `public/assets/og-image.jpg`
- `noindex, nofollow` on the 404 page
- Site-wide `WebSite` and `LodgingBusiness` JSON-LD in `app/root.tsx`
- Generated `sitemap.xml` for all public pages
- `robots.txt` that allows the site and points to the sitemap
- One `<h1>` per page, with section headings using `<h2>`/`<h3>`

If the business gains a phone number, social profiles, or a precise street address, add them to the JSON-LD and footer so search engines can show richer results.

## CI

`.github/workflows/ci.yml` runs on every push and pull request:

1. Install dependencies with `bun ci`
2. Typecheck with `bun run typecheck`
3. Verify formatting with `bun run format:check`

## Deployment

The project is a standard React Router SSR app and can be deployed anywhere that runs Node or Bun.

```bash
bun run build
bun run start
```

### Docker

```bash
docker build -t nioboro .
docker run -p 3000:3000 nioboro
```

Pass `VITE_SITE_URL` at build time so canonical URLs, Open Graph tags, and `sitemap.xml` use your domain:

```bash
docker build --build-arg VITE_SITE_URL=https://example.com -t nioboro .
```

## License

Private project. All rights reserved.
