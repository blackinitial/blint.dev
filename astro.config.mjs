import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://blint.dev",
  integrations: [tailwind(), image(), react(), prefetch(), sitemap(), compress()],
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