<script setup lang="ts">
import { nextTick, onMounted, shallowRef, watch } from 'vue'
import { type EChartsCoreOption, useEcharts } from '@/utils/composables/useEcharts'

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
