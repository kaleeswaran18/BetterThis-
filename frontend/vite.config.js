import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",             // relative paths for GitHub Pages
  build: {
    outDir: 'docs',       // directly build into docs folder
    assetsDir: 'assets',  // default, can keep as 'assets'
  }
})
