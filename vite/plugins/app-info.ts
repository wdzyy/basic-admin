import type { Plugin } from 'vite'
import boxen from 'boxen'
import picocolors from 'picocolors'

export default function appInfo(): Plugin {
  return {
    name: 'appInfo',
    apply: 'serve',
    async buildStart() {
      const { bold, green, cyan, bgGreen, underline } = picocolors

      console.log(
        boxen(
          `${bold(green(`${bgGreen('Zy-admin')}`))}\n\n${underline('https://')}\n\n当前使用：${cyan('基础版')}`,
          {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
            textAlignment: 'center',
          },
        ),
      )
    },
  }
}
