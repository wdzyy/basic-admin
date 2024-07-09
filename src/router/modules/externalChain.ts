import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

/**
 * 路由配置
 *
 */
const routes: RouteRecordRaw = {
  path: '/external-chain',
  component: Layout,
  redirect: '/external-chain/link',
  name: 'ExternalChain',
  meta: {
    title: '外链',
    icon: 'i-ri:external-link-fill',
  },
  children: [
    /**
     * 外部链接
     */
    {
      path: 'github',
      redirect: '',
      name: 'Github',
      meta: {
        title: 'github（外链）',
        link: 'https://github.com/wdzyy/basic-admin',
      },
    },
    /**
     * 内嵌链接
     */
    {
      path: 'vue3',
      redirect: '',
      name: 'Vue',
      meta: {
        title: 'vue文档（内嵌）',
        iframe: 'https://cn.vuejs.org/',
      },
    },
    /**
     * 内嵌链接
     */
    {
      path: 'vueUse',
      redirect: '',
      name: 'VueUse',
      meta: {
        title: 'vueUse文档（内嵌）',
        iframe: 'https://vueuse.org/',
      },
    },
  ],
}

export default routes
