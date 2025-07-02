import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  test: {
    environment: 'happy-dom', // ✅ Поддержка DOM (window, localStorage, document и т.д.)
    globals: true,            // ✅ Чтобы не писать `import { describe } ...` каждый раз
    setupFiles: ['./tests/setup.js'] // ⬅️ необязательно, но удобно
  },
  base: '/runka/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})