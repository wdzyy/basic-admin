import VueDevTools from 'vite-plugin-vue-devtools'

export default function createDevtools(env: Record<string, string>) {
  const { VITE_OPEN_DEVTOOLS } = env
  return VITE_OPEN_DEVTOOLS === 'true' && VueDevTools()
}
