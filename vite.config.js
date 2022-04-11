import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  pages: {
    index: {
      // 页面入口
      entry: 'src/main.js',
      // 模板来源
      template: 'index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  // 打包配置
  build: {
    lib: {
      entry:  'packages/index.js', // 设置入口文件
      name: 'hangar-table', // 起个名字，安装、引入用
      fileName: (format) => `vite-lib.${format}.js` // 打包后的文件名
    },
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'ant-design-vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'ant-design-vue'
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [createVuePlugin({ jsx: true })],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@import "./src/packages/index.less";',
      }
    }
  }
}