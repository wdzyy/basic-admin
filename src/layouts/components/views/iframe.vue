<script setup lang="ts">
defineOptions({
  name: 'IFrameView',
})

const route = useRoute()
</script>

<template>
  <Transition name="slide-right" mode="out-in" appear>
    <ListPageWrapper :key="route.meta.iframe">
      <div class="h-full flex-1 overflow-hidden">
        <iframe :src="route.meta.iframe" border="none" class="h-full w-full" />
      </div>
    </ListPageWrapper>
  </Transition>
</template>

<style lang="scss" scoped>
.slide-right-enter-active {
  transition: 0.2s;
}

.slide-right-leave-active {
  transition: 0.15s;
}

.slide-right-enter-from {
  margin-left: -20px;
  opacity: 0;
}

.slide-right-leave-to {
  margin-left: 20px;
  opacity: 0;
}
</style>
