<script setup lang="ts">
import useMenuStore from '@/store/modules/menu'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'FavoriteMenu',
})

export interface FavoriteMenus {
  name: string
  path: string
}

const menuStore = useMenuStore()
const route = useRoute()
const router = useRouter()
const active = computed(() => {
  const ac = menuStore.getFavoriteMenus().find(item => item.path === route.fullPath)
  return ac?.path
})
function addFavorite() {
  const defaultName = route.meta.title as string
  // 如果是首页则取配置中的标题
  const menuName = route.fullPath === '/' ? useSettingsStore().settings.home.title : defaultName
  const menu = { name: menuName, path: route.fullPath }
  const menuList = [...menuStore.getFavoriteMenus(), menu]

  menuStore.setFavoriteMenus(menuList)
}
function removeFavorite(item?: FavoriteMenus) {
  const path = item ? item.path : route.fullPath
  const menuList = menuStore.getFavoriteMenus().filter(it => it.path !== path)
  menuStore.setFavoriteMenus(menuList)
}
function routerGo(path: string) {
  router.push(path)
}

onMounted(() => {
  // 初始化时设置本地存储的收藏菜单
  const menuList = JSON.parse(localStorage.getItem('favorite-menus') || '[]')
  menuStore.setFavoriteMenus(menuList)
})
</script>

<template>
  <el-badge :value="menuStore.favoriteMenus.length" :show-zero="false">
    <el-popover
      placement="top-start"
      width="320px"
      trigger="hover"
    >
      <template #reference>
        <div class="cursor-pointer" :class="menuStore.favoriteMenus.length > 0 ? 'i-uiw:star-on color-amber' : 'i-uiw:star-off'" />
      </template>
      <template #default>
        <div class="mb-10px flex items-center justify-between">
          <div class="text-sm font-bold tracking-0.5px">
            我的收藏夹
          </div>
          <div>
            <div v-if="active" class="i-mdi:star-remove cursor-pointer" size="20px" @click="removeFavorite()" />
            <div v-else class="i-mdi:star-plus-outline cursor-pointer" size="20px" @click="addFavorite" />
          </div>
        </div>
        <Grid v-show="menuStore.favoriteMenus.length > 0" ref="gridRef" :gap="[20, 0]" :cols="2">
          <GridItem
            v-for="(item) in menuStore.favoriteMenus"
            :key="item.path" class="mb-12px cursor-pointer border-1 border-color-gray-200 rounded-4px border-style-solid p-6px hover-bg-[var(--g-bg)]"
            @click="routerGo(item.path)"
          >
            <div
              class="flex items-center justify-between" :style="
                route.fullPath === item.path ? 'color: var(--g-primary)' : ''
              "
            >
              <div>{{ item.name }}</div>
              <div class="i-ep:delete" @click.stop="removeFavorite(item)" />
            </div>
          </GridItem>
        </Grid>
        <div v-show="menuStore.favoriteMenus.length === 0">
          <div class="text-center text-gray-400">
            暂无收藏菜单
          </div>
        </div>
      </template>
    </el-popover>
  </el-badge>
</template>

<style lang="scss" scoped>
.el-badge {
  display: flex !important;
}
</style>
