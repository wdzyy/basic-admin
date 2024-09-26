import type { PluginOption } from 'vite'
import { compression } from 'vite-plugin-compression2'

export default function createCompression(env: Record<string, string>, isBuild: boolean) {
  const plugin: (PluginOption | PluginOption[])[] = []
  if (isBuild) {
    const { VITE_BUILD_COMPRESS } = env
    const compressList = VITE_BUILD_COMPRESS.split(',')
    if (compressList.includes('gzip')) {
      plugin.push(
        compression(),
      )
    }
    if (compressList.includes('brotli')) {
      plugin.push(
        compression({
          exclude: [/\.(br)$/, /\.(gz)$/],
          algorithm: 'brotliCompress',
        }),
      )
    }
  }
  return plugin
}
