import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['bootstrap'],
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  experimental: {
    assets: true
  }
})