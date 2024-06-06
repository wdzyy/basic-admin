<script setup lang="ts">
import vueDraggable from 'vuedraggable'
import type { ColumnProps } from '../interface'

defineOptions({ name: 'ColSetting' })
const props = defineProps<{ colSetting: ColumnProps[] }>()
const emits = defineEmits(['update:colSetting'])

const data = computed({
  get: () => props.colSetting,
  set: (val: ColumnProps[]) => {
    emits('update:colSetting', val)
  },
})

function onMove(e: any) {
  if (e.relatedContext.element.fixed) {
    return false
  }
  return true
}
async function fixColumnChange(item: any, fixVal: any) {
  await nextTick()
  item.fixed = fixVal
  const leftFixeds = data.value.filter(it => it.fixed === 'left')
  const rightFixeds = data.value.filter(it => it.fixed === 'right')
  const noFixeds = data.value.filter((it: any) => !['right', 'left'].includes(it.fixed))
  data.value = [...leftFixeds, ...noFixeds, ...rightFixeds]
}
</script>

<template>
  <vueDraggable v-model="data" chosen-class="custom-table-chosen" ghost-class="custom-table-ghost" handle=".mover" filter=".forbid" force-fallback item-key="prop" :move="onMove">
    <template #item="{ element, index }">
      <div :key="index" class="flex items-center justify-between" :class="element.fixed ? 'forbid' : ''">
        <div>
          <span class="mover mr-16px cursor-move">
            <span :class="element.fixed ? 'opacity-0' : 'opacity-100'">
              <SvgIcon name="tabler:arrows-move" class="icon hover:text-[--g-primary]" />
            </span>
          </span>
          <el-checkbox v-model="element.isShow">
            {{ element.label }}
          </el-checkbox>
        </div>
        <span>
          <span v-if="element.fixed" class="cursor-pointer">
            <SvgIcon name="solar:pin-bold" class="icon text-[--g-primary]" @click="fixColumnChange(element, null)" />
          </span>
          <span v-else>
            <span class="cursor-pointer" @click="fixColumnChange(element, 'left')">
              <SvgIcon name="mingcute:arrow-to-left-fill" class="icon mr-5px hover:text-[--g-primary]" />
            </span>
            <span class="cursor-pointer" @click="fixColumnChange(element, 'right')">
              <SvgIcon name="mingcute:arrow-to-right-fill" class="icon hover:text-[--g-primary]" />
            </span>
          </span>
        </span>
      </div>
    </template>
  </vueDraggable>
</template>

<style scoped lang="scss">
.custom-table-chosen {
  background-color: #eaf6ff !important;
}

.custom-table-ghost {
  background-color: #d0e5ff !important;
}
</style>
