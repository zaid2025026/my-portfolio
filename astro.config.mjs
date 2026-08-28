import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://zaid2025026.github.io',
  base: '/my-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});