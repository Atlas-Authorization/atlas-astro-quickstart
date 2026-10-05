# atlas-astro-quickstart

A minimal Astro (SSR) app pre-wired with [Atlas](https://atlasauth.net) auth,
using `@atlasauth/astro`.

Astro's Atlas SDK is **server-side**: there is no client component bundle. The
session is verified in middleware and read on each page with `getAuth(Astro)`.

## What it shows

- `src/middleware.ts` — `atlasMiddleware()` verifies the `__session` JWT locally
  and attaches the auth state to `Astro.locals.atlas`.
- `src/pages/index.astro` — a public home page reading `getAuth(Astro)`.
- `src/pages/dashboard.astro` — a protected page that redirects signed-out
  visitors to `/sign-in`.
- `src/pages/sign-in.astro` — redirects to the Atlas-hosted sign-in flow.

## Run it

1. `npm install`
2. `cp .env.example .env`, then set `PUBLIC_ATLAS_PUBLISHABLE_KEY`,
   `PUBLIC_ATLAS_FRONTEND_API`, `ATLAS_JWKS_URL`, and `ATLAS_ISSUER` to the
   values from [atlasauth.net](https://atlasauth.net).
3. `npm run dev`

Open http://localhost:4321. Visit `/dashboard` to see route protection.
