import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/echarts',
  component: Layout,
  redirect: '/echarts/bar',
  name: 'Echarts',
  meta: {
    title: '图表',
    icon: 'i-heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: 'bar',
      name: 'Bar',
      component: () => import('@/views/echarts/bar.vue'),
      meta: {
        title: '柱状图',
      },
    },
  ],
}

export default routes
