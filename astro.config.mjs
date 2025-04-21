// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      domains: [],
      sizes: [320, 640, 1280],
      formats: ["image/avif", "image/webp"],
    },
  })
});