import path from 'path-browserify'
import type { FieldNamesProps } from '@/components/ZyTable/interface'

export function resolveRoutePath(basePath?: string, routePath?: string) {
  return basePath ? path.resolve(basePath, routePath ?? '') : routePath ?? ''
}

/**
 * @description 处理 ZyTable 值为数组 || 无数据
 * @param {*} callValue 需要处理的值
 * @returns {string}
 */
export function formatValue(callValue: any) {
  // 如果当前值为数组，使用 / 拼接（根据需求自定义）
  if (Array.isArray(callValue)) {
    return callValue.length ? callValue.join(' / ') : '--'
  }
  return callValue ?? '--'
}

/**
 * @description 处理 prop 为多级嵌套的情况，返回的数据 (列如: prop: user.name)
 * @param {object} row 当前行数据
 * @param {string} prop 当前 prop
 * @returns {*}
 */
export function handleRowAccordingToProp(row: { [key: string]: any }, prop: string) {
  if (!prop.includes('.')) {
    return row[prop] ?? '--'
  }
  prop.split('.').forEach(item => (row = row[item] ?? '--'))
  return row
}

/**
 * @description 处理 prop，当 prop 为多级嵌套时 ==> 返回最后一级 prop
 * @param {string} prop 当前 prop
 * @returns {string}
 */
export function handleProp(prop: string) {
  const propArr = prop.split('.')
  if (propArr.length === 1) {
    return prop
  }
  return propArr[propArr.length - 1]
}

/**
 * @description 根据枚举列表查询当需要的数据（如果指定了 label 和 value 的 key值，会自动识别格式化）
 * @param {string} callValue 当前单元格值
 * @param {Array} enumData 字典列表
 * @param {Array} fieldNames label && value && children 的 key 值
 * @param {string} type 过滤类型（目前只有 tag）
 * @returns {string}
 */
export function filterEnum(callValue: any, enumData?: any, fieldNames?: FieldNamesProps, type?: 'tag') {
  const value = fieldNames?.value ?? 'value'
  const label = fieldNames?.label ?? 'label'
  const children = fieldNames?.children ?? 'children'
  let filterData: { [key: string]: any } = {}
  // 判断 enumData 是否为数组
  if (Array.isArray(enumData)) {
    filterData = findItemNested(enumData, callValue, value, children)
  }
  // 判断是否输出的结果为 tag 类型
  if (type === 'tag') {
    return filterData?.tagType ? filterData.tagType : ''
  }
  else {
    return filterData ? filterData[label] : '--'
  }
}

/**
 * @description 递归查找 callValue 对应的 enum 值
 */

export function findItemNested(
  enumData: any[],
  callValue: any, // Consider replacing any with a more specific type
  value: string,
  children: string,
): any {
  for (const item of enumData) {
    if (item[value] === callValue) {
      return item
    }
    if (item[children]) {
      const foundChild = findItemNested(item[children], callValue, value, children)
      if (foundChild) {
        return foundChild
      }
    }
  }
  return null
}
