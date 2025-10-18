import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'react-intersection-observer': ['react-intersection-observer'],
          // Icons will be bundled with components now
          // Component chunks
          'components': [
            './src/components/About.jsx',
            './src/components/Contact.jsx',
            './src/components/Footer.jsx',
            './src/components/Sidebar.jsx',
            './src/components/Hero.jsx',
            './src/components/Projects.jsx',
            './src/components/Skills.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
