import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'http://www.kognitivemindshift.com',
  build: 'directory','file',
  integrations: [tailwind()]
});