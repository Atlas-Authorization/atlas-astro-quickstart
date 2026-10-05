import node from '@astrojs/node';
import { atlasAstro } from '@atlasauth/astro';
import { defineConfig } from 'astro/config';

// SSR is required: Atlas verifies the session on the server, in middleware.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [atlasAstro()],
});
