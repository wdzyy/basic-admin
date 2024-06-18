import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/components',
  component: Layout,
  redirect: '/components/table',
  name: 'Components',
  meta: {
    title: '组件',
    icon: 'i-bx:bxs-component',
  },
  children: [
    {
      path: 'table',
      name: 'Table',
      redirect: '/components/table/basic-table',
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
      path: 'form',
      name: 'Form',
      redirect: '/components/form/basic',
      meta: {
        title: '表单',
      },
      children: [
        {
          path: 'basic',
          name: 'BasicForm',
          component: () => import('@/views/components/form/index.vue'),
          meta: {
            title: '基础表单',
          },
        },
      ],
    },
    {
      path: 'button',
      name: 'Button',
      redirect: '/components/button/basic-button',
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
    {
      path: 'cascader',
      name: 'Cascader',
      redirect: '/components/cascader/basic',
      meta: {
        title: '级联',
      },
      children: [
        {
          path: 'basic',
          name: 'ChinaAreaCascader',
          component: () => import('@/views/components/china-area-cascader/index.vue'),
          meta: {
            title: '区域选择',
          },
        },
      ],
    },
    {
      path: 'text',
      name: 'Text',
      redirect: '/components/text/basic',
      meta: {
        title: '文本',
      },
      children: [
        {
          path: 'basic',
          name: 'basicText',
          component: () => import('@/views/components/text/index.vue'),
          meta: {
            title: '文本省略',
          },
        },
      ],
    },
  ],
}

export default routes
