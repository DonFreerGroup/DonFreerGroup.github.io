import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
    site: `http://www.kognitivemindshift.com`,
    output: 'static',
    outDir: './docs',
    build: {
      assets: 'astro'
    }
});