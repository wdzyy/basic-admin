import type { BreakPoint, Responsive } from '@/components/Grid/interface'

export interface EnumProps {
  label?: string // 选项框显示的文字
  value?: string | number | boolean | any[] // 选项框值
  disabled?: boolean // 是否禁用此选项
  tagType?: string // 当 tag 为 true 时，此选择会指定 tag 显示类型
  children?: EnumProps[] // 为树形选择时，可以通过 children 属性指定子选项
  [key: string]: any
}

export interface FieldNamesProps {
  label: string
  value: string
  children?: string
}

export type ComponentType =
  | 'input'
  | 'input-number'
  | 'select'
  | 'select-v2'
  | 'tree-select'
  | 'cascader'
  | 'date-picker'
  | 'time-picker'
  | 'time-select'
  | 'switch'
  | 'slider'
  | 'checkbox'
  | 'radio'
  | 'checkbox-group'
  | 'radio-group'
  | 'rate'
  | 'color-picker'
  | 'auto-complete'

export type FormItemProps = {
  prop: string // 当前项的 prop
  label?: string // 当前项的 label
  el?: ComponentType // 当前项的组件
  props?: any // 搜索项参数，根据 element plus 官方文档来传递，该属性所有值会透传到组件
  offset?: number // 当前项的偏移量
  span?: number // 所占用的列数
  xs?: number // width <768px 响应式栅格数
  sm?: number // width >= 768 && width < 992 响应式栅格数
  md?: number // width >= 992 && width < 1200 响应式栅格数
  lg?: number // width >= 1200 && width < 1920: 响应式栅格数
  xl?: number // width >= 1920 响应式栅格数
  isRequired?: boolean // 是否必填
  rules?: any[] // 验证规则
  fieldNames?: FieldNamesProps // 指定 label && value && children 的 key 值
  enum?: EnumProps[] // 枚举值
  render?: () => VNode // 自定义搜索内容渲染（tsx语法）
} & Partial<Record<BreakPoint, Responsive>>

export type ButtonAlign = 'text-left' | 'text-right' | 'text-center'
