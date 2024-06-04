import autoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
    ],
    dts: 'auto-imports.d.ts',
    dirs: [
      './src/utils/composables/**',
    ],
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass',
      }),
    ],
  })
}
