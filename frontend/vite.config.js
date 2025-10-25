import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",       // relative paths to index.html
  build: {
    outDir: 'docs', // directly build into docs folder
    assetsDir: 'assets'
  }
})
