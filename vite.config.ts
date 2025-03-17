import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Pastikan ini ada
  build: {
    outDir: 'dist', // Pastikan output ke dist/
  }
})
