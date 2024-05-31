<script setup lang="ts">
defineOptions({
  name: 'ButtonView',
})
function click() {
  console.log('click')
}
</script>

<template>
  <PageMain title="水波纹">
    <div
      v-ripple
      v-optimize:throttle="{
        event: 'click',
        fn: click,
        immediate: true,
        timeout: 1000,
      }"
      class="item-center h-75 w-75 flex justify-center border-2 bg-blue-500 text-24px text-white"
    />
  </PageMain>
</template>
