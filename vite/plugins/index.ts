import process from 'node:process'
import vueLegacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { loadEnv, type PluginOption } from 'vite'
import appInfo from './app-info'

import createAutoImport from './auto-import'
import createBanner from './banner'
import createBundleAnalyzer from './bundle-analyzer'
import createViteCdnPlugin from './cdn'
import createComponents from './components'
import createCompression from './compression'
import createConsole from './console'
import createDevtools from './devtools'
import configImageminPlugin from './imagemin'
import createLayouts from './layouts'
import createMock from './mock'
import createPages from './pages'
import createSvgIcon from './svg-icon'
import createUnocss from './unocss'
import createAppLoading from './vite-plugin-app-loading'

export default function createVitePlugins(mode: string, isBuild = false) {
  const viteEnv = loadEnv(mode, process.cwd())
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    appInfo(),
    vue(),
    vueJsx(),
    vueLegacy({
      renderLegacyChunks: false,
      modernPolyfills: [
        'es.array.at',
        'es.array.find-last',
      ],
    }),
  ]
  vitePlugins.push(createDevtools(viteEnv))
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createUnocss())
  vitePlugins.push(createSvgIcon(isBuild))
  vitePlugins.push(createMock(viteEnv, isBuild))
  vitePlugins.push(createLayouts())
  vitePlugins.push(createPages())
  vitePlugins.push(...createCompression(viteEnv, isBuild))
  vitePlugins.push(createConsole())
  vitePlugins.push(createBanner())
  vitePlugins.push(createAppLoading())

  if (viteEnv.VITE_BUILD_CDN === 'true') {
    vitePlugins.push(createViteCdnPlugin())
  }
  if (viteEnv.VITE_IMAGE_COMPRESS === 'true') {
    vitePlugins.push(configImageminPlugin())
  }
  if (viteEnv.VITE_BUILD_ANALYZE === 'true') {
    vitePlugins.push(createBundleAnalyzer())
  }
  return vitePlugins
}
