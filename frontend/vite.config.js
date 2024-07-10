import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/config.scss";
          @import "@/assets/scss/mixin/box-default.scss";
          @import "@/assets/scss/mixin/button-actions.scss";
					@import "@/assets/scss/mixin/view-default.scss";
        `,
      },
    },
  }
})
