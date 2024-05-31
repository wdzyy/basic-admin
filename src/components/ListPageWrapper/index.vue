<script setup lang="ts">
const slots = defineSlots()
</script>

<template>
  <div class="list-page">
    <div class="auto-height" shadow="hover">
      <div v-if="slots.head" class="list-page__head">
        <slot name="head" />
      </div>
      <div v-if="slots.default" class="list-page__main">
        <!-- slot时，如果需要把default中的内容适应高度，则必须要把根元素设置class="h-full" -->
        <slot />
      </div>
      <div v-if="slots.foot" class="list-page__foot">
        <slot name="foot" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 列表页高度自适应
.list-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  overflow: hidden;

  .auto-height {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: inherit;
    overflow: hidden;
    color: #303133;
    border: 1px solid var(--g-border-color);
    border-radius: 4px;
    transition: 0.3s;
  }

  .list-page__head {
    padding: 16px 16px 0;
    margin-bottom: 10px;
    background-color: #fff;
  }

  .list-page__main {
    flex: 1;
    padding: 16px;
    overflow: auto;
    background-color: #fff;
  }

  .list-page__foot {
    padding-top: 16px;
    margin-left: auto;
  }
}
</style>
