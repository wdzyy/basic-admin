import banner from 'vite-plugin-banner'
import pkg from '../../package.json'

export default function createBanner() {
  return banner(
    `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`,
  )
}
