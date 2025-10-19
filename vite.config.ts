import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    plugins: [vue(), tailwindcss()],
    build: {
        outDir: 'dist'
    },
    server: {
    proxy: {
      '/api': {
        target: 'https://dev.iamshitting.com',
        changeOrigin: true,
        secure: false, 
      }
    }
  }
})

