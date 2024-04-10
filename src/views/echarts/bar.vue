<script setup lang="ts">
import * as echarts from 'echarts'

const options = ref({
  title: {
    text: '地热开发利用',
    x: 'left',
    textStyle: { fontSize: '15', color: '#303133' },
  },
  tooltip: { trigger: 'axis' },
  legend: { data: ['供温', '回温', '压力值(Mpa)'], right: 16 },
  grid: { top: 70, right: 100, bottom: 30, left: 80 },
  xAxis: [
    {
      type: 'category',
      data: ['1km', '2km', '3km', '4km', '5km', '6km'],
      boundaryGap: true,
      axisTick: { show: false },
    },
  ],
  yAxis: [
    {
      name: '供回温度(℃）',
      nameLocation: 'middle',
      nameTextStyle: { padding: [3, 4, 50, 6] },
      splitLine: { show: true, lineStyle: { type: 'dashed', color: '#f5f5f5' } },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#303133', formatter: '{value} ' },
    },
    {
      name: '压力值(Mpa)',
      nameLocation: 'middle',
      nameTextStyle: { padding: [50, 4, 5, 6] },
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#303133', formatter: '{value} ' },
    },
  ],
  series: [
    {
      name: '供温',
      type: 'line',
      smooth: true,
      showSymbol: true,
      // 矢量画五角星
      symbol: 'path://M150 0 L80 175 L250 75 L50 75 L220 175 Z',
      symbolSize: 12,
      yAxisIndex: 0,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(250,180,101,0.3)' },
          { offset: 1, color: 'rgba(250,180,101,0)' },
        ]),
        shadowColor: 'rgba(250,180,101,0.2)',
        shadowBlur: 20,
      },
      itemStyle: { color: '#FF8000' },
      // data中可以使用对象，value代表相应的值，另外可加入自定义的属性
      data: [
        { value: 1, stationName: 's1' },
        { value: 3, stationName: 's2' },
        { value: 4, stationName: 's3' },
        { value: 9, stationName: 's4' },
        { value: 3, stationName: 's5' },
        { value: 2, stationName: 's6' },
      ],
    },
    {
      name: '回温',
      type: 'line',
      smooth: true,
      showSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 12,
      yAxisIndex: 0,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: 'rgba(199, 237, 250,0.5)' },
            { offset: 1, color: 'rgba(199, 237, 250,0.2)' },
          ],
          false,
        ),
      },
      itemStyle: {
        color: '#3bbc86',
      },
      data: [
        { value: 31, stationName: 's1' },
        { value: 36, stationName: 's2' },
        { value: 54, stationName: 's3' },
        { value: 24, stationName: 's4' },
        { value: 73, stationName: 's5' },
        { value: 22, stationName: 's6' },
      ],
    },
    {
      name: '压力值(Mpa)',
      type: 'bar',
      barWidth: 30,
      yAxisIndex: 1,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(108,80,243,0.3)' },
          { offset: 1, color: 'rgba(108,80,243,0)' },
        ]),
        // 柱状图圆角
        borderRadius: [30, 30, 0, 0],
      },
      data: [
        { value: 11, stationName: 's1' },
        { value: 34, stationName: 's2' },
        { value: 54, stationName: 's3' },
        { value: 39, stationName: 's4' },
        { value: 63, stationName: 's5' },
        { value: 24, stationName: 's6' },
      ],
    },
  ],
})
function click(params: any) {
  console.log('点了我一下', params)
}
</script>

<template>
  <PageMain class="flex justify-center">
    <BaseEcharts :options="options" :click-callback="click" style="width: 100%;height: 400px;" />
  </PageMain>
</template>
