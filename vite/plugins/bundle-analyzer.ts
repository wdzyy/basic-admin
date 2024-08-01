/**
 * https://github.com/nonzzz/vite-bundle-analyzer
 */
import { analyzer } from 'vite-bundle-analyzer'

export default function createBundleAnalyzer() {
  return analyzer({
    analyzerMode: 'server',
    openAnalyzer: false,
  })
}
