import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 4200,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: '3.144.175.234',
      port: 4200,
    },
  },
})