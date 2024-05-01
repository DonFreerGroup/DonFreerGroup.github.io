import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(), tailwind()],
    site: `http://www.kognitivemindshift.com`,
    output: 'static',
    outDir: './docs',
    build: {
      assets: 'astro'
    }
});