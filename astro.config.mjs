import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zaid2025026.github.io',
  // base: '/my-portfolio/',

  vite: {
    plugins: [tailwindcss()],
  },
});