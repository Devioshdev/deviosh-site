# Deviosh Site

Landing page for Deviosh, a founder-led mobile app development studio.

## Local Preview

Install dependencies once:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Open http://localhost:3000.

## Make a Change

Most homepage edits live in:

```bash
app/page.tsx
```

SEO and browser preview text live in:

```bash
app/layout.tsx
```

Global styling lives in:

```bash
app/globals.css
```

## Redeploy

Vercel redeploys automatically after changes are pushed to GitHub.

Use this flow:

```bash
npm run verify
git add .
git commit -m "Update Deviosh site"
npm run redeploy
```

`npm run redeploy` runs lint, builds the site, then pushes `main` to GitHub.

If GitHub says permission is denied, sign in with the GitHub account that has
write access to `Devioshdev/deviosh-site`, then run:

```bash
npm run redeploy
```
