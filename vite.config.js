import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Set custom chunk size limit to 1000 kB
  },
  
  plugins: [react()],
  
})

