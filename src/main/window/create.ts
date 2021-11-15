/*
 * @Description: 创建窗口的方法
 * @Author: renlu
 * @Date: 2021-09-26 11:06:02
 * @LastEditTime: 2021-10-20 14:08:16
 * @LastEditors: renlu
 */
import { app, BrowserWindow } from 'electron'

const path = require('path')

// 取消右键上下文菜单
function preventDragbarContext(win: BrowserWindow) {
  const WM_INITMENU = 0x116
  win.hookWindowMessage(WM_INITMENU, (e) => {
    win.setEnabled(false)
    setTimeout(() => {
      win.setEnabled(true)
    }, 100)
    return true
  })
}

// 创建窗口
export default function createWindow(
  options: Electron.BrowserWindowConstructorOptions,
  hash: string
): BrowserWindow {
  const win = new BrowserWindow({
    ...options,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js')
    }
  })

  preventDragbarContext(win)

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../render/index.html'), {
      hash
    })
  } else {
    win.webContents.openDevTools()
    win.loadURL(`http://localhost:${process.env.PORT}/#${hash}`)
  }

  return win
}
