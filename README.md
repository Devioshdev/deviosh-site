# Deviosh Site

Next.js marketing site for [Deviosh](https://www.deviosh.com), a founder-led app studio.

**Live:** [https://www.deviosh.com](https://www.deviosh.com)

This repo is the public web surface for the studio: brand homepage plus a portfolio showcase for shipped work. Vercel deploys production from `main`.

## Showcase

[PFRA Tracker](https://www.deviosh.com/apps/pfra-tracker) is the first App Store product page, at `/apps/pfra-tracker`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The PFRA showcase is at [http://localhost:3000/apps/pfra-tracker](http://localhost:3000/apps/pfra-tracker).

## Verify

```bash
npm run verify
```

Runs lint and a production build. GitHub Actions runs the same command on pull requests and on pushes to `main`.

## Deploy

Vercel deploys automatically from `main`. Merge a reviewed PR and the live site updates.

Optional founder shortcut after a local change on `main`:

```bash
npm run verify
git add .
git commit -m "Update Deviosh site"
npm run redeploy
```

`npm run redeploy` runs verify, then pushes `main`.

## Where things live

| Area | Path |
| --- | --- |
| Homepage | `app/page.tsx` |
| SEO / metadata | `app/layout.tsx` |
| Global styles | `app/globals.css` |
| PFRA Tracker showcase | `app/apps/pfra-tracker/` |

## Engineering

This site is built with AI-assisted engineering. The founder owns product direction, reviews every change, and is accountable for what ships.

## License

MIT. See [LICENSE](./LICENSE).
