declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly PORT: string
  }
}

interface Window {
  /** 关闭预加载动画 */
  removeLoading: () => void
  /** NodeJs fs */
  fs: typeof import('fs')
  /** NodeJs path */
  path: typeof import('path')
  process_execPath: string
  /** Electron ipcRenderer */
  ipcRenderer: import('electron').IpcRenderer
}

declare module 'ws'
