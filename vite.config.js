import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  
  return {
    base: command === "serve" ? "/portfolio/" : "/",
    plugins: [react()],
    server: {
      port: 3000
    }
  }
  
})
