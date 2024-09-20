import { loadingFadeOut } from 'virtual:app-loading'

import { createRouter, createWebHashHistory } from 'vue-router'
import setupGuards from './guards'
// 路由相关数据
import { constantRoutes, constantRoutesByFilesystem } from './routes'
import useSettingsStore from '@/store/modules/settings'
import pinia from '@/store'

const router = createRouter({
  history: createWebHashHistory(),
  routes: useSettingsStore(pinia).settings.app.routeBaseOn === 'filesystem' ? constantRoutesByFilesystem : constantRoutes,
})

setupGuards(router)

router.isReady().then(() => {
  loadingFadeOut()
})

export default router
