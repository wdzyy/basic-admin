import { type Ref, onBeforeUnmount, onDeactivated, onMounted, shallowRef } from 'vue'
import echarts from '../echarts'

export type EChartsCoreOption = echarts.EChartsCoreOption
function useEcharts(elRef: Ref<HTMLDivElement>, options: EChartsCoreOption, event: (params: any) => void) {
  const charts = shallowRef<echarts.ECharts>()

  const setOptions = (options: EChartsCoreOption) => {
    charts.value && charts.value.setOption(options)
  }

  const initCharts = () => {
    charts.value = echarts.init(elRef.value)
    setOptions(options)
    if (event) {
      charts.value.on('click', (params: any) => {
        event(params)
      })
    }
  }

  const echartsResize = () => {
    charts.value && charts.value.resize()
  }

  const destroyInstance = () => {
    charts.value?.dispose()
  }

  onMounted(() => {
    window.addEventListener('resize', echartsResize)
  })
  // 防止 echarts 页面 keepAlive 时，还在继续监听页面
  onDeactivated(() => {
    window.removeEventListener('resize', echartsResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', echartsResize)
  })
  return {
    initCharts,
    setOptions,
    echartsResize,
    destroyInstance,
  }
}
export { useEcharts }
