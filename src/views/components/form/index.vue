<script lang="tsx" setup>
const form = reactive({ desc: '' })
const formColumns = [
  {
    label: '名字',
    prop: 'name',
    el: 'input',
    isRequired: true,
    rules: [
      {
        rule: [{ type: 'string', min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }],
      },
    ],
    props: {
      placeholder: '请必须输入，长度在 2 到 5 个字符',
      clearable: true,
    },
  },
  {
    label: '级联',
    prop: 'cascader',
    el: 'cascader',
    isRequired: true,
    enum: [
      {
        value: 'zhinan',
        label: '指南',
        children: [
          {
            value: 'shejiyuanze',
            label: '设计原则',
            children: [
              {
                value: 'yizhi',
                label: '一致',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '地区',
    prop: 'region',
    el: 'select',
    enum: [
      { label: 'Region One', value: 'shanghai' },
      { label: 'Region Two', value: 'beijing' },
    ],
  },
  {
    label: '日期',
    prop: 'date1',
    el: 'date-picker',
  },
  {
    label: '时间选择',
    prop: 'timePicker',
    el: 'time-picker',
  },
  {
    label: '树选择',
    prop: 'treeSelect',
    el: 'tree-select',
    enum: [
      {
        value: '1',
        label: 'Level one 1',
        children: [
          {
            value: '1-1',
            label: 'Level two 1-1',
            children: [
              {
                value: '1-1-1',
                label: 'Level three 1-1-1',
              },
            ],
          },
        ],
      },
      {
        value: '2',
        label: 'Level one 2',
        children: [
          {
            value: '2-1',
            label: 'Level two 2-1',
            children: [
              {
                value: '2-1-1',
                label: 'Level three 2-1-1',
              },
            ],
          },
          {
            value: '2-2',
            label: 'Level two 2-2',
            children: [
              {
                value: '2-2-1',
                label: 'Level three 2-2-1',
              },
            ],
          },
        ],
      },
      {
        value: '3',
        label: 'Level one 3',
        children: [
          {
            value: '3-1',
            label: 'Level two 3-1',
            children: [
              {
                value: '3-1-1',
                label: 'Level three 3-1-1',
              },
            ],
          },
          {
            value: '3-2',
            label: 'Level two 3-2',
            children: [
              {
                value: '3-2-1',
                label: 'Level three 3-2-1',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '类型',
    prop: 'type',
    el: 'checkbox',
    props: {
      options: [
        { label: 'Online', value: 'online' },
        { label: 'Offline', value: 'offline' },
      ],
    },
  },
  {
    label: '来源',
    prop: 'resource',
    el: 'select',
    isRequired: true,
    enum: [
      { label: 'Sina', value: 'sina' },
      { label: 'Sohu', value: 'sohu' },
    ],
    props: {
      clearable: true,
    },
  },
  {
    label: '数字输入框',
    prop: 'inputNumber',
    el: 'input-number',
    isRequired: true,
    props: {
      clearable: true,
      max: 10,
      min: 0,
    },
  },
  {
    label: '评分',
    prop: 'rate',
    el: 'rate',
  },
  {
    label: '颜色提取',
    prop: 'colorPicker',
    el: 'color-picker',
  },
  {
    label: '滑块',
    prop: 'slider',
    el: 'slider',
  },
  {
    label: '滑块',
    prop: 'switch',
    el: 'switch',
    props: {
      inlinePrompt: true,
      style: '--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949',
      activeText: '完整展示多个内容',
      inactiveText: '多个内容',
    },
  },
  {
    label: '描述',
    prop: 'desc',
    render: () => {
      return (
        <el-input
          v-model={form.desc}
          placeholder="please input"
          type="textarea"
        />
      )
    },
  },
]
function click() {
  ElMessage.success('我是slot出的按钮啦')
}
</script>

<template>
  <PageMain>
    {{ form }}
    <zyForm
      :form-data="form"
      :form-columns="formColumns"
      :show-ok-button="true"
      ok-button-text="确定"
      :show-cancel-button="true"
      cancel-button-text="重置"
    >
      <template #button>
        <el-button @click="click">
          自定义按钮
        </el-button>
      </template>
    </zyForm>
  </PageMain>
</template>
