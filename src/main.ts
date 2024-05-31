import DisableDevtool from 'disable-devtool'
import '@/utils/system.copyright'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'

import 'overlayscrollbars/overlayscrollbars.css'
import 'element-plus/dist/index.css'

import type { Directive } from 'vue'
import App from './App.vue'
import pinia from './store'
import router from './router'
/**
 * 如果要替换为其他 UI 库，可以在这里替换
 * 本项目使用了element-plus
 */
// TODO 由于unplugin 自动导入组件无法引入componen :is 的组件，暂时全局引入，后续注释
import ui from './ui-provider'

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
app.use(ui)
directive(app)
if (icons.isOfflineUse) {
  for (const info of icons.collections) {
    downloadAndInstall(info)
  }
}

app.mount('#app')
