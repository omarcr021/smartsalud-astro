import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://smart-salud-3c0f50.netlify.app/",
  integrations: [preact()]
});