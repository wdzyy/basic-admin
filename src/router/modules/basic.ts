import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

/**
 * 路由配置
 *
 */
const routes: RouteRecordRaw = {
  path: '/basic',
  component: Layout,
  redirect: '/basic/menu',
  name: 'Basic',
  meta: {
    title: '基础',
    icon: 'i-ri:function-line',
    // breadcrumb: false, // 是否在面包屑展示
    // singleMenu: true, // 该配置用于简化只想展示一级，没有二级菜单导航的路由配置。
    /**
     * boolean 设置为 true 时，该路由页面会被一直缓存
     * string 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面进行缓存，否则不缓存
     * string[] ，可设置一个目标路由的 name 数组
     *
     */
    // cache: true, // 是否缓存页面
    /**
     * string 设置某个目标路由的 name ，表示当前路由页面跳转到设置的 name 对应的路由页面时，则将当前路由页面清除缓存，否则不清除缓存
     * string[] ，可设置一个目标路由的 name 数组
     */
    // noCache: true, // 是否不缓存页面
  },
  children: [
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('@/views/basic/menu/index.vue'),
      meta: {
        title: '菜单配置',
      },
    },
  ],
}

export default routes
