import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Updated build config
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom'
          ],
          'data': [
            './src/data/examPracticeData.js',
            './src/data/quizzesData.js',
            './src/data/assignmentData.js',
            './src/data/pastPaper.js',
            './src/data/midtermReviewsData.js',
            './src/data/finalTermReviewsData.js'
          ],
          'components': [
            './src/components/Header.jsx',
            './src/components/Footer.jsx',
            './src/components/Hero.jsx',
            './src/components/Support.jsx',
            './src/components/Reviews.jsx',
            './src/components/FAQ.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600,
    minify: true
  }
})
