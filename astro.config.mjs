// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://bharath-n.vercel.app', // Update with your actual domain when deployed
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