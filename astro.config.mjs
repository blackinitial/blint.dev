import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), react()],
  vite: {
    ssr: {
      noExternal: ["@radix-ui/*"]
    }
  },
  output: "server",
  adapter: vercel({
    analytics: true
  })
});