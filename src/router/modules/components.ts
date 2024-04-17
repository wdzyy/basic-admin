import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/components',
  component: Layout,
  redirect: '/components/basic-table',
  name: 'Table',
  meta: {
    title: '表格组件',
    icon: 'i-bx:bxs-component',
  },
  children: [
    {
      path: 'basic-table',
      name: 'BasicTable',
      component: () => import('@/views/components/basic-table/index.vue'),
      meta: {
        title: '基础表格',
      },
    },
  ],
}

export default routes