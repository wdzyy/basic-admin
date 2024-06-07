<script setup lang="tsx">
import { computed, inject, ref } from 'vue'
import { handleProp } from '@/utils'

interface FormItem {
  column: any
  formData: { [key: string]: any }
}
defineOptions({
  name: 'FormItem',
})
const props = defineProps<FormItem>()

// Re receive formData
const _formData = computed(() => props.formData)

// 判断 fieldNames 设置 label && value && children 的 key 值
const fieldNames = computed(() => {
  return {
    label: props.column.fieldNames?.label ?? 'label',
    value: props.column.fieldNames?.value ?? 'value',
  }
})

// 接收 enumMap (el 为 select-v2 需单独处理 enumData)
const enumMap = inject('enumMap', ref(new Map()))
const columnEnum = computed(() => {
  let enumData = enumMap.value.get(props.column.prop)
  if (!enumData) {
    return []
  }
  if (props.column.el === 'select-v2' && props.column.fieldNames) {
    enumData = enumData.map((item: { [key: string]: any }) => {
      return { ...item, label: item[fieldNames.value.label], value: item[fieldNames.value.value] }
    })
  }
  return enumData
})

// 处理透传的 columnProps (el 为 tree-select、cascader 的时候需要给下默认 label && value && children)
const handleColumnProps = computed(() => {
  const label = fieldNames.value.label
  const value = fieldNames.value.value
  const searchEl = props.column.el
  let columnProps = props.column.props ?? {}
  if (searchEl === 'tree-select') {
    columnProps = { ...columnProps, props: { ...columnProps.props, label }, nodeKey: value }
  }
  if (searchEl === 'cascader') {
    columnProps = { ...columnProps, props: { ...columnProps.props, label, value } }
  }
  return columnProps
})

// 处理默认 placeholder
const placeholder = computed(() => {
  const columnItem = props.column
  if (['datetimerange', 'daterange', 'monthrange'].includes(columnItem?.props?.type) || columnItem?.props?.isRange) {
    return {
      rangeSeparator: columnItem?.props?.rangeSeparator ?? '至',
      startPlaceholder: columnItem?.props?.startPlaceholder ?? '开始时间',
      endPlaceholder: columnItem?.props?.endPlaceholder ?? '结束时间',
    }
  }
  const placeholder = columnItem?.props?.placeholder ?? (columnItem?.el?.includes('input') ? '请输入' : '请选择')
  return { placeholder }
})
</script>

<template>
  <component
    :is="column.render ?? `el-${column.el}`"
    v-bind="{ ...handleColumnProps, ...placeholder, formData: _formData }"
    v-model.trim="_formData[handleProp(column.prop!)]"
    :data="column.el === 'tree-select' ? columnEnum : []"
    :options="['cascader', 'select-v2'].includes(column.el!) ? columnEnum : []"
  >
    <template v-if="column.el === 'cascader'" #default="{ data }">
      <span>{{ data[fieldNames.label] }}</span>
    </template>
    <template v-if="column.el === 'select'">
      <el-option
        v-for="col in columnEnum"
        :key="col[fieldNames.value]"
        :label="col[fieldNames.label]"
        :value="col[fieldNames.value]"
      />
    </template>
    <slot v-else />
  </component>
</template>
