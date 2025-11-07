// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-nbb1sbdmo-bharaths-projects-f385be84.vercel.app/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }), 
    react()
  ],
  
  build: {
    inlineStylesheets: 'auto',
  },
  
  compressHTML: true,
});