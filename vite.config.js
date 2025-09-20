import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   assetsInclude: ['**/*.jpeg'],
  plugins: [tailwindcss(), react()],
  server: {
    host: true, // Enables network access
  },
})


