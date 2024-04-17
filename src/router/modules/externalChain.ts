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
    icon: 'i-heroicons-solid:menu-alt-3',
  },
  children: [
    /**
     * 外部链接
     */
    {
      path: 'link',
      redirect: '',
      name: 'Link',
      meta: {
        title: '打开新窗口',
        link: 'https://github.com/wdzyy/basic-admin',
      },
    },
    /**
     * 内嵌链接
     */
    {
      path: 'iframe',
      redirect: '',
      name: 'IFrame',
      meta: {
        title: '内嵌iframe',
        iframe: 'https://cn.vuejs.org/',
      },
    },
  ],
}

export default routes
