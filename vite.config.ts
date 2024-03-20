import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), 
    
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.vue']
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hmr: {
      host: 'localhost' // 确保 HMR 可以在 Electron 中工作
    }
  },
  build: {
    rollupOptions: {
      input: 'src/main.ts' // Vue 应用的入口文件
    }
  }
})
