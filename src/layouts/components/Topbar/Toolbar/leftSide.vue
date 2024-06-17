<script setup lang="ts">
import Breadcrumb from './Breadcrumb/index.vue'
import FavoriteMenu from './FavoriteMenu/index.vue'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'ToolbarLeftSide',
})

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="flex items-center">
    <div v-if="settingsStore.mode === 'mobile'" class="flex-center cursor-pointer px-2 py-1 -rotate-z-180" @click="settingsStore.toggleSidebarCollapse()">
      <SvgIcon name="toolbar-collapse" />
    </div>
    <div class="flex items-center">
      <FavoriteMenu class="mr-4px" />
      <Breadcrumb v-if="settingsStore.settings.toolbar.breadcrumb" />
    </div>
  </div>
</template>
