import type { PluginOption } from 'vite'
import Archiver from 'vite-plugin-archiver'

export default function createArchiver(env: Record<string, string>): PluginOption {
  return Archiver({
    archiveType: env.VITE_BUILD_ARCHIVE,
  })
}
