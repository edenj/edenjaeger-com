import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://edenjaeger.com',
  integrations: [
    // Keep /ff out of the sitemap so it stays quiet
    sitemap({ filter: (page) => !page.includes('/ff') }),
  ],
});
