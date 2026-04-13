# Advay's Professional Portfolio

This is a minimalist, editorial single-page portfolio built with Next.js (App Router) and Tailwind CSS. It's built to scale, and be easy to update.

## Setup

First, fork and clone this repo on your local machine.
Then, run the following commands:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development / Quality Checks

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Lint: `npm run lint`
- Type-check (no emit): `npm run typecheck`
- Format files: `npm run format`
- Check formatting: `npm run format:check`
- Production build check: `npm run build`
- Full local CI gate: `npm run ci`

### Pre-commit hooks

This repo uses Husky + lint-staged for fast pre-commit checks on staged files:

- Prettier runs on staged supported files
- ESLint (with `--fix`) runs on staged JS/TS files

### CI

GitHub Actions validates pull requests and pushes to `main`/`master` by running:

- install (`npm ci`)
- lint
- typecheck
- build

Vercel remains the deployment platform; CI is validation-only.

## Content

All content is separated from the UI for easy editing:

- **`content/site.ts`** — Name, tagline, avatar image path, contact links, availability
- **`content/projects.ts`** — Project cards (title, description, tags, links, highlight)
- **`content/experience.ts`** — Roles, companies, dates, bullet points
- **`content/publications.ts`** — Papers with title, venue, and links

To add a new project, edit `content/projects.ts` and add an object to the array. No UI changes required.

**Profile image:** Add your photo as `public/avatar.jpg` (or `.png`/`.webp`) and set `avatar: "/avatar.jpg"` in `content/site.ts`. Remove the `avatar` field or set it to `undefined` to hide the image.
