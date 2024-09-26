<script setup lang="ts">
import type { Menu } from '#/global'
import type { UseResizeObserverReturn } from '@vueuse/core'
import useMenuStore from '@/store/modules/menu'
import useSettingsStore from '@/store/modules/settings'
import { useResizeObserver } from '@vueuse/core'
import Logo from '../Logo/index.vue'
import ToolbarRightSide from '../Topbar/Toolbar/rightSide.vue'
import debounce from './utils/ZDebounce.ts'

defineOptions({
  name: 'LayoutHeader',
})

const settingsStore = useSettingsStore()
const menuStore = useMenuStore()

const { switchTo } = useMenu()

const moreItemWidth = 100 // 更多菜单的宽度
const menuRef = ref<HTMLUListElement>() // 菜单容器
const sliceIndex = ref(-1) // 截取的下标
const allMenus = ref<Menu.recordMainRaw[]>([]) // 所有菜单
const moreMenus = ref<Menu.recordMainRaw[]>([]) // 更多菜单

/**
 * 计算单个菜单item的宽度
 */
function calcMenuItemWidth(menuItem: HTMLElement) {
  const computedStyle = getComputedStyle(menuItem)
  const marginLeft = Number.parseInt(computedStyle.marginLeft, 10)
  const marginRight = Number.parseInt(computedStyle.marginRight, 10)

  return menuItem.offsetWidth + marginLeft + marginRight || 0
}
function filterNodes(nodes: NodeListOf<ChildNode> | ChildNode[]) {
  return [...nodes].filter(
    item => item.nodeName !== '#comment' && (item.nodeName !== '#text' || item.nodeValue),
  ) as HTMLElement[]
}

/**
 * 计算菜单截取的下标
 */
function calcSliceIndex() {
  if (!menuRef.value) {
    return -1
  }
  const menuNodes = filterNodes(menuRef.value?.childNodes || [])
  const items = menuNodes.length > 0 ? filterNodes(menuNodes[0]?.childNodes) : []

  const { paddingLeft, paddingRight } = getComputedStyle(menuRef.value!)
  const menuWidth = menuRef.value.clientWidth - Number.parseInt(paddingLeft, 10) - Number.parseInt(paddingRight, 10)

  let calcWidth = 0
  let sliceIdx = 0
  items.forEach((item, index) => {
    calcWidth += calcMenuItemWidth(item)
    if (calcWidth <= menuWidth - moreItemWidth) {
      sliceIdx = index + 1
    }
  })

  return sliceIdx === items.length ? -1 : sliceIdx
}

/**
 * 处理resize事件
 */
let isFirstTimeRender = true
function handleResize() {
  if (sliceIndex.value === calcSliceIndex()) {
    return
  }
  const callback = () => {
    sliceIndex.value = -1
    nextTick(() => {
      sliceIndex.value = calcSliceIndex()
    })
  }
  isFirstTimeRender ? callback() : debounce(callback)()
  isFirstTimeRender = false
}

/**
 * 监听菜单宽度变化判断菜单放在所有菜单还是放在更多当中
 */
let resizeStopper: UseResizeObserverReturn['stop']
watchEffect(() => {
  resizeStopper = useResizeObserver(menuRef, handleResize).stop
  moreMenus.value = sliceIndex.value === -1 ? [] : menuStore.allMenus.slice(sliceIndex.value)
  allMenus.value = sliceIndex.value === -1 ? menuStore.allMenus : menuStore.allMenus.slice(0, sliceIndex.value)
})

onUnmounted(() => {
  // 卸载监听
  resizeStopper()
})

onMounted(() => {
  allMenus.value = menuStore.allMenus
})
</script>

<template>
  <Transition name="header">
    <header v-if="settingsStore.mode === 'pc' && settingsStore.settings.menu.mode === 'head'">
      <div class="header-container">
        <Logo class="title" />
        <div ref="menuRef" class="menu-container scrollbar-none" :style="{ minWidth: `${moreItemWidth}px` }">
          <!-- 顶部模式 -->
          <div class="menu flex of-hidden transition-all">
            <template v-for="(item, index) in allMenus" :key="index">
              <div
                class="menu-item relative mx-1 px-1 py-2 transition-all" :class="{
                  active: index === menuStore.actived,
                }"
              >
                <div
                  v-if="item.children && item.children.length !== 0" class="group menu-item-container" :class="{
                    'text-[var(--g-header-menu-active-color)]! bg-[var(--g-header-menu-active-bg)]!': index === menuStore.actived,
                  }" :title="typeof item.meta?.title === 'function' ? item.meta?.title() : item.meta?.title" @click="switchTo(index)"
                >
                  <div class="inline-flex flex-1 items-center justify-center gap-1">
                    <SvgIcon v-if="item.meta?.icon" :name="item.meta?.icon" class="menu-item-container-icon transition-transform group-hover-scale-120" />
                    <span class="w-full flex-1 truncate text-sm transition-height transition-opacity transition-width">
                      {{ typeof item.meta?.title === 'function' ? item.meta?.title() : item.meta?.title }}
                    </span>
                  </div>
                </div>
              </div>
            </template>
            <HDropdown
              v-show="moreMenus.length > 0"
              class="menu-item relative px-1 py-2 transition-all"
              placement="bottom-start"
            >
              <div
                class="group menu-item-container whitespace-nowrap" :class="{
                  'text-[var(--g-header-menu-active-color)]! bg-[var(--g-header-menu-active-bg)]!': (allMenus.length) <= menuStore.actived,
                }"
              >
                更多
                <SvgIcon name="i-ep:caret-bottom" />
              </div>
              <template #dropdown>
                <div class="w-200px py-1" border-b="~ solid stone-2 dark:stone-7 last:size-0">
                  <div v-for="(item, index) in moreMenus" :key="index" class="relative px-2 py-1 transition-all">
                    <div
                      class="group menu-item-container h-full w-full flex cursor-pointer items-center gap-1 rounded-2 px-5 py-3 text-14px text-[var(--g-sub-sidebar-menu-color)] transition-all hover-bg-[var(--g-sub-sidebar-menu-hover-bg)] hover-text-[var(--g-sub-sidebar-menu-hover-color)]"
                      :class="{
                        'text-[var(--g-header-menu-active-color)]! bg-[var(--g-header-menu-active-bg)]!': (index + allMenus.length) === menuStore.actived,
                      }"
                      @click="switchTo(index + allMenus.length)"
                    >
                      <SvgIcon v-if="item.meta?.icon" :name="item.meta?.icon" :size="20" class="menu-item-container-icon transition-transform group-hover:scale-120" async />
                      {{
                        typeof item.meta?.title === 'function' ? item.meta?.title() : item.meta?.title
                      }}
                    </div>
                  </div>
                </div>
              </template>
            </HDropdown>
          </div>
        </div>
        <ToolbarRightSide />
      </div>
    </header>
  </Transition>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--g-header-height);
  padding: 0 20px;
  margin: 0 auto;
  color: var(--g-header-color);
  background-color: var(--g-header-bg);
  box-shadow: -1px 0 0 0 var(--g-border-color), 1px 0 0 0 var(--g-border-color), 0 1px 0 0 var(--g-border-color);
  transition: background-color 0.3s;

  .header-container {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    :deep(a.title) {
      position: relative;
      flex: 0;
      width: inherit;
      height: inherit;
      padding: inherit;
      background-color: inherit;

      .logo {
        width: initial;
        height: 40px;
      }

      span {
        font-size: 20px;
        color: var(--g-header-color);
        letter-spacing: 1px;
      }
    }

    .menu-container {
      flex: 1;
      height: 100%;
      padding: 0 20px;
      overflow-x: auto;

      /* mask-image: linear-gradient(to right, transparent, #000 20px, #000 calc(100% - 20px), transparent); */

      /* firefox隐藏滚动条 */
      scrollbar-width: none;

      /* chrome隐藏滚动条 */
      &::-webkit-scrollbar {
        display: none;
      }

      .menu {
        display: inline-flex;
        height: 100%;

        :deep(.menu-item) {
          .menu-item-container {
            color: var(--g-header-menu-color);

            &:hover {
              color: var(--g-header-menu-hover-color);
              background-color: var(--g-header-menu-hover-bg);
            }

            @apply h-full w-full flex cursor-pointer items-center justify-between gap-1 rounded-2 px-3 text-[var(--g-header-menu-color)] transition-all hover-(bg-[var(--g-header-menu-hover-bg)] text-[var(--g-header-menu-hover-color)]);

            .menu-item-container-icon {
              font-size: 20px !important;
            }
          }

          &.active .menu-item-container {
            color: var(--g-header-menu-active-color);
            background-color: var(--g-header-menu-active-bg);
          }

          &::before {
            position: absolute;
            bottom: 6px;
            left: 50%;
            width: 0;
            height: 4px;
            content: "";
            background-color: var(--g-header-menu-active-bg);
            border-radius: 2px;
            box-shadow: 0 0 0 1px var(--g-header-bg);
            opacity: 0;
            transition: all 0.3s;
            transform: translate(-50%);
          }

          &.active::before {
            width: 20px;
            opacity: 1;
          }
        }
      }
    }
  }
}

/* 头部动画 */
.header-enter-active,
.header-leave-active {
  transition: transform 0.3s;
}

.header-enter-from,
.header-leave-to {
  transform: translateY(calc(var(--g-header-height) * -1));
}
</style>
