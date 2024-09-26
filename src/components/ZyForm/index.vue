<script lang="ts" setup>
import type { BreakPoint } from '@/components/Grid/interface'
import type { FormInstance, FormRules } from 'element-plus'
import type { ButtonAlign, FormItemProps } from './interface'

const props = defineProps({
  formData: {
    type: Object as () => { [key: string]: any },
    required: true,
  },
  formItemCol: {
    type: Object as () => number | Record<BreakPoint, number>,
    default: () => {
      return { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }
    },
  },
  formColumns: {
    type: Array as () => FormItemProps[],
    required: true,
  },
  rules: {
    type: Object as () => FormRules<any>,
    default: () => {},
  },
  buttonAlign: {
    type: String as () => ButtonAlign,
    default: 'text-right',
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
  formColumns.forEach((item: FormItemProps) => {
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
// 获取响应式设置
function getResponsive(item: FormItemProps) {
  return {
    span: item?.span,
    offset: item?.offset ?? 0,
    xs: item?.xs,
    sm: item?.sm,
    md: item?.md,
    lg: item?.lg,
    xl: item?.xl,
  }
}
</script>

<template>
  <el-form
    ref="zyFormRef"
    v-bind="$attrs"
    :model="formData"
    :rules="rules"
    label-width="auto"
  >
    <Grid ref="gridRef" :gap="[16, 0]" :cols="formItemCol">
      <GridItem v-for="item in formColumns" :key="item.prop" v-bind="getResponsive(item)">
        <el-form-item :label="item.label" :prop="item.prop">
          <FormItem
            class="w-100%"
            :column="item" :form-data="formData"
          />
        </el-form-item>
      </GridItem>
    </Grid>
    <el-form-item>
      <div class="w-full" :class="buttonAlign">
        <el-button v-if="$attrs['show-ok-button']" type="primary" @click="submitForm(zyFormRef)">
          {{ $attrs['ok-button-text'] || 'Submit' }}
        </el-button>
        <el-button v-if="$attrs['show-cancel-button']" @click="resetForm(zyFormRef)">
          {{ $attrs['cancel-button-text'] || 'Reset' }}
        </el-button>
        <slot name="button" />
      </div>
    </el-form-item>
  </el-form>
</template>
