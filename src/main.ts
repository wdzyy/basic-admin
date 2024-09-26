// 禁用文件排序规则，防止页面无法渲染
/* eslint-disable perfectionist/sort-imports */
import DisableDevtool from 'disable-devtool'
import '@/utils/system.copyright'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

import FloatingVue from 'floating-vue'

import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

import 'overlayscrollbars/overlayscrollbars.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import type { Directive } from 'vue'
import App from './App.vue'

import router from './router'
import pinia from './store'

import 'floating-vue/dist/style.css'

// 自定义指令
import directive from '@/utils/directive'

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 加载 iconify 图标
import { downloadAndInstall } from '@/iconify'
import icons from '@/iconify/index.json'

import 'virtual:uno.css'

// 全局样式
import '@/assets/styles/index.scss'

// 自定义指令
import * as directives from '@/directives'

// 具体配置可以点进去看
if (import.meta.env.MODE === 'production') {
// 不是开发环境时，禁用开发工具
  DisableDevtool({
    md5: '45e0bfcdb33e87e0ac18346037c53b7c', // qj
    tkName: 'zy', // 绕过禁用时的url参数名称，默认为 zy
    url: 'about:blank', // 关闭页面失败时的跳转页面，默认值为localhost
    timeOutUrl: 'about:blank', // 关闭页面超时跳转的url;
    disableMenu: false, // 是否禁用右键菜单 默认为true
  })
}

const app = createApp(App)
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})
app.use(FloatingVue, {
  distance: 12,
})
app.use(Message)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
directive(app)
if (icons.isOfflineUse) {
  for (const info of icons.collections) {
    downloadAndInstall(info)
  }
}

app.mount('#app')
