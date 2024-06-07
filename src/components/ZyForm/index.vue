<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { use } from 'echarts/types/src/extension.js'

const props = defineProps({
  formData: {
    type: Object as () => { [key: string]: any },
    required: true,
  },
  formColumns: {
    type: Array as () => any[],
    required: true,
  },
  rules: {
    type: Object as () => FormRules<any>,
    default: () => {},
  },
})
const zyFormRef = ref<FormInstance>()

watch(() => props.formColumns, async (newVal) => {
  for (const item of newVal) {
    await setEnumMap(item)
  }
}, { immediate: true })

const rules = computed(() => {
  const rules: any = {}
  const formColumns = props.formColumns
  formColumns.forEach((item: any) => {
    if (item.isRequired) {
      rules[item.prop] = [{ required: true, message: `${item.label}必填`, trigger: ['blur', 'change'] }]
      item.rules?.forEach((rule: any) => {
        rules[item.prop].push(...rule.rule)
      })
    }
  })

  return rules
})

// 定义 enumMap 存储 enum 值（避免异步请求无法格式化单元格内容 || 无法填充搜索下拉选择）
const enumMap = ref(new Map<string, { [key: string]: any }[]>())
async function setEnumMap({ prop, enum: enumValue }: any) {
  if (!enumValue) {
    return
  }

  // 如果当前 enumMap 存在相同的值 return
  if (enumMap.value.has(prop!) && (typeof enumValue === 'function' || enumMap.value.get(prop!) === enumValue)) {
    return
  }

  // 当前 enum 为静态数据，则直接存储到 enumMap
  if (typeof enumValue !== 'function') {
    return enumMap.value.set(prop!, unref(enumValue!))
  }

  // 为了防止接口执行慢，而存储慢，导致重复请求，所以预先存储为[]，接口返回后再二次存储
  enumMap.value.set(prop!, [])

  // 当前 enum 为后台数据需要请求数据，则调用该请求接口，并存储到 enumMap
  const { data } = await enumValue()
  enumMap.value.set(prop!, data)
}

// 注入 enumMap
provide('enumMap', enumMap)

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) {
    return
  }
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    }
    else {
      console.log('error submit!', fields)
    }
  })
}

function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) {
    return
  }
  formEl.resetFields()
}
</script>

<template>
  <el-form
    ref="zyFormRef"
    v-bind="$attrs"
    :model="formData"
    :rules="rules"
  >
    <el-form-item v-for="item in formColumns" :key="item.prop" :label="item.label" :prop="item.prop">
      <FormItem
        :column="item" :form-data="formData"
      />
    </el-form-item>
    <el-form-item>
      <el-button v-if="$attrs['show-ok-button']" type="primary" @click="submitForm(zyFormRef)">
        {{ $attrs['ok-button-text'] || 'Submit' }}
      </el-button>
      <el-button v-if="$attrs['show-cancel-button']" @click="resetForm(zyFormRef)">
        {{ $attrs['cancel-button-text'] || 'Reset' }}
      </el-button>
      <slot name="button" />
    </el-form-item>
  </el-form>
</template>
