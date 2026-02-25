import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/spaceX-app/',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  publicDir: '../public/',
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
})
