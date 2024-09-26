import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'

export default function createComponents() {
  return components({
    dirs: [
      'src/components',
      'src/layouts/ui-kit',
    ],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: 'components.d.ts',
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass',
      }),
    ],
  })
}
