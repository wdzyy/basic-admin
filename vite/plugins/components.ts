import components from 'unplugin-vue-components/vite'
// 全局引入了element-plus，所以不需要再引入
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
  return components({
    dirs: [
      'src/components',
      'src/layouts/ui-kit',
    ],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: 'components.d.ts',
    // resolvers: [
    //   ElementPlusResolver({
    //     importStyle: 'sass',
    //   }),
    // ],
  })
}
