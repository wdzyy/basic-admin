/**
 * 防抖函数
 * 常见计算机显示器FPS为60 Hz，这意味着每秒重画60次。计算公式：1000 ms/60 16.67ms，为了避免“调整大小”时有一定的重复触发机会，将wait设置为16.67 * 2 = 33.34
 * @param fn 需要防抖的函数
 * @param wait 防抖时间
 */
export default function debounce(fn: () => void, wait = 33.34) {
  let timmer: ReturnType<typeof setTimeout> | null
  return () => {
    timmer && clearTimeout(timmer)
    timmer = setTimeout(() => {
      fn()
    }, wait)
  }
}
