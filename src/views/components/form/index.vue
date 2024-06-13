<script lang="tsx" setup>
import type { ButtonAlign, FormItemProps } from '@/components/ZyForm/interface'
import type { BreakPoint } from '@/components/Grid/interface'

const form = reactive({ desc: '' })
const formColumns: FormItemProps[] = [
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
    label: '日期范围',
    prop: 'datetimerange',
    el: 'date-picker',
    props: { type: 'datetimerange', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
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
    label: '多选',
    prop: 'checkbox',
    el: 'checkbox',
  },
  {
    label: '多选组',
    prop: 'checkboxGroup',
    el: 'checkbox-group',
    enum: [
      { label: 'Online', value: 'online' },
      { label: 'Offline', value: 'offline' },
    ],
  },
  {
    label: '单选组',
    prop: 'radioGroup',
    el: 'radio-group',
    enum: [
      { label: 'Online', value: 'online' },
      { label: 'Offline', value: 'offline' },
    ],
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
    label: '开关',
    prop: 'switch',
    el: 'switch',
  },
  {
    label: '开关2',
    prop: 'switch2',
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

const buttonAlign = ref<ButtonAlign>('text-left')
const formItemCol = ref<number | Record<BreakPoint, number>>({ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 })
</script>

<template>
  <PageMain>
    {{ form }}
    <div class="py-16px">
      <el-button-group>
        <el-button @click="buttonAlign = 'text-left'">
          按钮靠左
        </el-button>
        <el-button @click="buttonAlign = 'text-center'">
          按钮居中
        </el-button>
        <el-button @click="buttonAlign = 'text-right'">
          按钮靠右
        </el-button>
        <el-button @click="formItemCol = 2">
          一列2个表单组件
        </el-button>
        <el-button @click="formItemCol = { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }">
          自适应
        </el-button>
        <el-button @click="formItemCol = 4">
          一列4个表单组件
        </el-button>
      </el-button-group>
    </div>
    <zyForm
      :form-data="form"
      :form-columns="formColumns"
      :show-ok-button="true"
      ok-button-text="确定"
      :show-cancel-button="true"
      cancel-button-text="重置"
      :button-align="buttonAlign"
      :form-item-col="formItemCol"
    >
      <template #button>
        <el-button @click="click">
          自定义按钮
        </el-button>
      </template>
    </zyForm>
  </PageMain>
</template>
