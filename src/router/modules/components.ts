import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/components',
  component: Layout,
  redirect: '/components/basic-table',
  name: 'Components',
  meta: {
    title: '组件',
    icon: 'i-bx:bxs-component',
  },
  children: [
    {
      path: 'table',
      name: 'Table',
      redirect: '/components/table/basic',
      meta: {
        title: '表格',
      },
      children: [
        {
          path: 'basic-table',
          name: 'BasicTable',
          component: () => import('@/views/components/table/basic/index.vue'),
          meta: {
            title: '基础表格',
          },
        },
        {
          path: 'tree-table',
          name: 'TreeTable',
          component: () => import('@/views/components/table/tree/index.vue'),
          meta: {
            title: '树形表格',
          },
        },
      ],
    },
    {
      path: 'button',
      name: 'Button',
      redirect: '/components/button/basic',
      meta: {
        title: '按钮',
      },
      children: [
        {
          path: 'basic-button',
          name: 'BasicButton',
          component: () => import('@/views/components/button/basic/index.vue'),
          meta: {
            title: '基础按钮',
          },
        },
      ],
    },
  ],
}

export default routes
