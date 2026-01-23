import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://mxbv.github.io',
  base: '/',
  server: {
    host: true,
    port: 4321,
  },
});

