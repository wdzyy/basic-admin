import { customRef } from 'vue'

export function debounceRef(value: any, delay = 1000) {
  let timeout: number | undefined
  return customRef((track, trigger) => ({
    get() {
      track()
      return value
    },
    set(newValue) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        value = newValue
        trigger()
      }, delay)
    },
  }))
}
