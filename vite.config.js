import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // 输出目录，与WordPress主题/插件的资源目录对齐
    outDir: 'build',
    // 清除输出目录
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // 定义确定性的、无哈希值的文件名，方便PHP脚本引用
        entryFileNames: `static/js/[name].js`,
        chunkFileNames: `static/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'static/css/[name].[ext]';
          }
          return 'static/assets/[name].[ext]';
        },
      },
    },
  },
})