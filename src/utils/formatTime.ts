/**
 * 时间日期转换
 * @param date 当前时间，new Date() 格式
 * @param format 需要转换的时间格式字符串
 * @description format 字符串随意，如 `YYYY-mm、YYYY-mm-dd`
 * @description format 季度："YYYY-mm-dd HH:MM:SS QQQQ"
 * @description format 星期："YYYY-mm-dd HH:MM:SS WWW"
 * @description format 几周："YYYY-mm-dd HH:MM:SS ZZZ"
 * @description format 季度 + 星期 + 几周："YYYY-mm-dd HH:MM:SS WWW QQQQ ZZZ"
 * @returns 返回拼接后的时间字符串
 */
export function formatDate(date: Date, format: string): string {
  const we = date.getDay() // 星期
  const z = getWeek(date) // 周
  const qut = Math.floor((date.getMonth() + 3) / 3).toString() // 季度
  const opt: { [key: string]: string } = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月(月份从0开始，要+1)
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    'q+': qut, // 季度
  }
  // 中文数字 (星期)
  const week: { [key: string]: string } = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  }
  // 中文数字（季度）
  const quarter: { [key: string]: string } = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
  }

  const patterns = [
    { pattern: /(W+)/, replacer: (match: string) => match.length > 1 ? (match.length > 2 ? `星期${week[we]}` : `周${week[we]}`) : week[we] },
    { pattern: /(Q+)/, replacer: (match: string) => match.length === 4 ? `第${quarter[qut]}季度` : quarter[qut] },
    { pattern: /(Z+)/, replacer: (match: string) => match.length === 3 ? `第${z}周` : `${z}` },
  ]

  patterns.forEach(({ pattern, replacer }) => {
    if (pattern.test(format)) {
      format = format.replace(pattern, replacer)
    }
  })

  Object.keys(opt).forEach((k) => {
    const r = new RegExp(`(${k})`).exec(format)
    if (r) {
      format = format.replace(r[1], r[1].length === 1 ? opt[k] : opt[k].padStart(r[1].length, '0'))
    }
  })

  return format
}
export function getWeek(dateTime: Date): number {
  const dateInWeek = new Date(dateTime.getTime())
  const dayOfWeek = dateInWeek.getDay() || 7

  // Adjust to the nearest Friday (which is considered the last day of a week)
  dateInWeek.setDate(dateInWeek.getDate() - dayOfWeek + 6)

  const firstDayOfYear = new Date(dateInWeek.getFullYear(), 0, 1)
  const firstWeekdayOfYear = firstDayOfYear.getDay()

  // Adjust to the first Friday of the year
  const firstFridayOfYear = new Date(dateInWeek.getFullYear(), 0, 1 + (firstWeekdayOfYear ? 7 - firstWeekdayOfYear + 1 : 0))

  const millisecondsPerDay = 86400000
  const daysPassed = Math.ceil((dateInWeek.valueOf() - firstFridayOfYear.valueOf()) / millisecondsPerDay)

  // Calculate the week number
  const weekNumber = Math.ceil(daysPassed / 7)

  return weekNumber
}

/**
 * 将时间转换为 `几秒前`、`几分钟前`、`几小时前`、`几天前`
 * @param param 当前时间，new Date() 格式或者字符串时间格式
 * @param format 需要转换的时间格式字符串
 * @description param 10秒：  10 * 1000
 * @description param 1分：   60 * 1000
 * @description param 1小时： 60 * 60 * 1000
 * @description param 24小时：60 * 60 * 24 * 1000
 * @description param 3天：   60 * 60* 24 * 1000 * 3
 * @returns 返回拼接后的时间字符串
 */
export function formatPast(param: string | Date, format: string = 'YYYY-mm-dd'): string {
  const currentTime: number = new Date().getTime()
  const inputTime: number = typeof param === 'string' || typeof param === 'object' ? new Date(param).getTime() : param
  const timeDifference: number = Math.floor((currentTime - inputTime) / 1000) // in seconds

  if (timeDifference < 10) {
    return '刚刚'
  }
  else if (timeDifference < 60) {
    return `${timeDifference}秒前`
  }
  else if (timeDifference < 3600) {
    return `${Math.floor(timeDifference / 60)}分钟前`
  }
  else if (timeDifference < 86400) {
    return `${Math.floor(timeDifference / 3600)}小时前`
  }
  else if (timeDifference < 259200) {
    return `${Math.floor(timeDifference / 86400)}天前`
  }
  else {
    const date = typeof param === 'string' || typeof param === 'object' ? new Date(param) : param
    return formatDate(date, format)
  }
}

export function formatAxis(param: Date): string {
  const hour: number = param.getHours()
  const greetings: { [key: number]: string } = {
    6: '凌晨好',
    9: '早上好',
    12: '上午好',
    14: '中午好',
    17: '下午好',
    19: '傍晚好',
    22: '晚上好',
    24: '夜里好',
  }

  const greetingKeys = Object.keys(greetings).map(Number).sort((a, b) => a - b)

  for (let i = 0; i < greetingKeys.length; i++) {
    if (hour < greetingKeys[i]) {
      return greetings[greetingKeys[i]]
    }
  }

  return greetings[greetingKeys[greetingKeys.length - 1]]
}
