<script setup lang="ts">
import { type EChartsCoreOption, useEcharts } from '@/utils/composables/useEcharts'
import { nextTick, onMounted, shallowRef, watch } from 'vue'

interface Props {
  options: EChartsCoreOption
  clickCallback: (params: any) => void
}
const props = defineProps<Props>()
const echartsRef = shallowRef()
const currentOptions = shallowRef(props.options)
const { setOptions, initCharts } = useEcharts(echartsRef, currentOptions.value, props.clickCallback)

watch(
  () => props.options,
  (nVal) => {
    let targetOptions: EChartsCoreOption = {}
    targetOptions = { ...nVal }
    setOptions(targetOptions)
  },
  {
    deep: true,
  },
)

onMounted(() => {
  nextTick(() => {
    initCharts()
  })
})
</script>

<template>
  <div ref="echartsRef" style="width: 100%; height: 100%;" />
</template>
