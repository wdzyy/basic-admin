/**
 * Image resource files used to compress the output of the production environment
 * @see https://www.npmjs.com/package/@vheemstra/vite-plugin-imagemin
 */
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
// The minifies you want to use:
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminMozPng from 'imagemin-pngquant'
import imageminWebp from 'imagemin-webp'

export default function configImageminPlugin() {
  return viteImagemin({
    plugins: {
      jpg: imageminMozjpeg(),
      png: imageminMozPng(),
    },
    makeWebp: {
      plugins: {
        jpg: imageminWebp(),
      },
    },
  })
}
