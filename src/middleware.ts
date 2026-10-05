import { atlasMiddleware } from '@atlasauth/astro/server';

/**
 * Atlas SSR middleware. It verifies the `__session` JWT locally (no call back to
 * Atlas on a warm server) and decorates every request's `Astro.locals.atlas`
 * with the resolved auth state. It never throws and never blocks a request —
 * page protection is an explicit `getAuth()` / `locals.atlas` check per page.
 *
 * `jwksUrl` / `issuer` fall back to ATLAS_JWKS_URL / ATLAS_ISSUER in the env.
 */
export const onRequest = atlasMiddleware();
