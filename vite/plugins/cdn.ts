/**
 * https://github.com/nonzzz/vite-plugin-cdn
 */
import type { CDNPluginOptions } from 'vite-plugin-cdn2'
import { cdn } from 'vite-plugin-cdn2'

// https://www.jsdelivr.com/package/npm/vue

export default function createViteCdnPlugin(option?: CDNPluginOptions) {
  if (!option) {
    option = {
      logLevel: 'slient',
      // modules 顺序 vue, vue-demi 必须保持当前顺序加载，否则会出现加载错误问题
      modules: [
        {
          name: 'vue',
          global: 'Vue',
          relativeModule: 'dist/vue.global.min.js',
        },
        {
          name: 'vue-demi',
          global: 'VueDemi',
          relativeModule: 'lib/index.iife.min.js',
        },
        {
          name: 'pinia',
          global: 'Pinia',
          relativeModule: 'dist/pinia.iife.min.js',
        },
        {
          name: 'vue-router',
          global: 'VueRouter',
          relativeModule: 'dist/vue-router.global.min.js',
        },
        /* {
          name: 'vue-i18n',
          global: 'VueI18n',
          relativeModule: 'dist/vue-i18n.global.min.js',
        }, */
        {
          name: 'axios',
          global: 'axios',
          relativeModule: 'dist/axios.min.js',
        },
        /* {
          name: 'echarts',
          aliases: ['es', 'lib'],
          global: 'echarts',
          relativeModule: 'dist/echarts.min.js',
        }, */
        {
          name: 'element-plus',
          aliases: ['es', 'lib'],
          global: 'ElementPlus',
          relativeModule: 'dist/index.full.min.js',
        },
        '@element-plus/icons-vue',
      ],
    }
  }
  return cdn(option)
}
