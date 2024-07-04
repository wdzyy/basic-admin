import { hex2rgba } from '@unocss/preset-mini/utils'

export const lightTheme = {
  'color-scheme': 'light',
  // 内置 UI
  '--ui-primary': hex2rgba('#0f0f0f')!.join(' '),
  '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
  // 主体
  '--g-primary': '#0f0f0f',
  '--g-bg': '#F3F7FA',
  '--g-container-bg': '#fff',
  '--g-border-color': '#F3F7FA',
  // 头部
  '--g-header-bg': '#fff',
  '--g-header-color': '#0f0f0f',
  '--g-header-menu-color': '#0f0f0f',
  '--g-header-menu-hover-bg': '#dde1e3',
  '--g-header-menu-hover-color': '#0f0f0f',
  '--g-header-menu-active-bg': '#0f0f0f',
  '--g-header-menu-active-color': '#fff',
  // 主导航
  '--g-main-sidebar-bg': '#F3F7FA',
  '--g-main-sidebar-menu-color': '#0f0f0f',
  '--g-main-sidebar-menu-hover-bg': '#dde1e3',
  '--g-main-sidebar-menu-hover-color': '#0f0f0f',
  '--g-main-sidebar-menu-active-bg': '#0f0f0f',
  '--g-main-sidebar-menu-active-color': '#fff',
  // 次导航
  '--g-sub-sidebar-bg': '#fff',
  '--g-sub-sidebar-logo-bg': '#0f0f0f',
  '--g-sub-sidebar-logo-color': '#fff',
  '--g-sub-sidebar-menu-color': '#0f0f0f',
  '--g-sub-sidebar-menu-hover-bg': '#dde1e3',
  '--g-sub-sidebar-menu-hover-color': '#0f0f0f',
  '--g-sub-sidebar-menu-active-bg': '#0f0f0f',
  '--g-sub-sidebar-menu-active-color': '#fff',
  // 标签栏
  '--g-tabbar-bg': '#fff',
  '--g-tabbar-dividers-bg': '#a3a3a3',
  '--g-tabbar-tab-color': '#a3a3a3',
  '--g-tabbar-tab-hover-bg': '#e5e5e5',
  '--g-tabbar-tab-hover-color': '#0f0f0f',
  '--g-tabbar-tab-active-color': '#0f0f0f',
}

export const greenTheme = {
  'color-scheme': 'light',
  // 内置 UI
  '--ui-primary': hex2rgba('#18A058')!.join(' '),
  '--ui-text': hex2rgba('#fcfcfc')!.join(' '),
  // 主体
  '--g-primary': '#18A058',
  '--g-bg': '#F3F7FA',
  '--g-container-bg': '#fff',
  '--g-border-color': '#F3F7FA',
  // 头部
  '--g-header-bg': '#1d2935',
  '--g-header-color': '#fff',
  '--g-header-menu-color': '#fff',
  '--g-header-menu-hover-bg': '#42b983',
  '--g-header-menu-hover-color': '#fff',
  '--g-header-menu-active-bg': '#18a058',
  '--g-header-menu-active-color': '#fff',
  // 主导航
  '--g-main-sidebar-bg': '#1d2935',
  '--g-main-sidebar-menu-color': '#fff',
  '--g-main-sidebar-menu-hover-bg': '#42b983',
  '--g-main-sidebar-menu-hover-color': '#fff',
  '--g-main-sidebar-menu-active-bg': '#18a058',
  '--g-main-sidebar-menu-active-color': '#fff',
  // 次导航
  '--g-sub-sidebar-bg': '#fff',
  '--g-sub-sidebar-logo-bg': '#1d2935',
  '--g-sub-sidebar-logo-color': '#fff',
  '--g-sub-sidebar-menu-color': '#0f0f0f',
  '--g-sub-sidebar-menu-hover-bg': 'rgba(24, 160, 88, 0.2)',
  '--g-sub-sidebar-menu-hover-color': '#18a058',
  '--g-sub-sidebar-menu-active-bg': 'rgba(24, 160, 88, 0.2)',
  '--g-sub-sidebar-menu-active-color': '#18a058',
  // 标签栏
  '--g-tabbar-bg': '#fff',
  '--g-tabbar-dividers-bg': '#a3a3a3',
  '--g-tabbar-tab-color': '#a3a3a3',
  '--g-tabbar-tab-hover-bg': '#42b983',
  '--g-tabbar-tab-hover-color': '#fff',
  '--g-tabbar-tab-active-color': '#18a058',
}

export const darkTheme = {
  'color-scheme': 'dark',
  // 内置 UI
  '--ui-primary': hex2rgba('#e5e5e5')!.join(' '),
  '--ui-text': hex2rgba('#0f0f0f')!.join(' '),
  // 主体
  '--g-primary': '#e5e5e5',
  '--g-bg': '#0a0a0a',
  '--g-container-bg': '#141414',
  '--g-border-color': '#15191e',
  // 头部
  '--g-header-bg': '#141414',
  '--g-header-color': '#e5e5e5',
  '--g-header-menu-color': '#a8a29e',
  '--g-header-menu-hover-bg': '#141414',
  '--g-header-menu-hover-color': '#e5e5e5',
  '--g-header-menu-active-bg': '#e5e5e5',
  '--g-header-menu-active-color': '#0a0a0a',
  // 主导航
  '--g-main-sidebar-bg': '#0a0a0a',
  '--g-main-sidebar-menu-color': '#a8a29e',
  '--g-main-sidebar-menu-hover-bg': '#141414',
  '--g-main-sidebar-menu-hover-color': '#e5e5e5',
  '--g-main-sidebar-menu-active-bg': '#e5e5e5',
  '--g-main-sidebar-menu-active-color': '#0a0a0a',
  // 次导航
  '--g-sub-sidebar-bg': '#141414',
  '--g-sub-sidebar-logo-bg': '#0f0f0f',
  '--g-sub-sidebar-logo-color': '#e5e5e5',
  '--g-sub-sidebar-menu-color': '#a8a29e',
  '--g-sub-sidebar-menu-hover-bg': '#0a0a0a',
  '--g-sub-sidebar-menu-hover-color': '#e5e5e5',
  '--g-sub-sidebar-menu-active-bg': '#e5e5e5',
  '--g-sub-sidebar-menu-active-color': '#0a0a0a',
  // 标签栏
  '--g-tabbar-bg': '#0a0a0a',
  '--g-tabbar-dividers-bg': '#a8a29e',
  '--g-tabbar-tab-color': '#a8a29e',
  '--g-tabbar-tab-hover-bg': '#1b1b1b',
  '--g-tabbar-tab-hover-color': '#e5e5e5',
  '--g-tabbar-tab-active-color': '#e5e5e5',
}
