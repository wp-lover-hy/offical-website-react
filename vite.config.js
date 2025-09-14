import react from '@vitejs/plugin-react';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import path from 'path';
import imagemin from 'unplugin-imagemin/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';
  const plugins = isDev ? [
    codeInspectorPlugin({
      bundler: 'vite'
    }),
    imagemin(),
    react()
  ]
    :
    [react(), imagemin()];

  return {
    plugins,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // 使用现代编译器API
        }
      }
    },
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/pages': path.resolve(__dirname, './src/pages'),
        '@/styles': path.resolve(__dirname, './src/styles'),
        '@/assets': path.resolve(__dirname, './src/assets'),
      },
    },
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
  }
})