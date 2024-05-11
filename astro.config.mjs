import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
    site: `https://www.kognitivemindshift.com`,
    output: 'static',
    outDir: './dist',
    build: {
      assets: 'astro'
    }
});