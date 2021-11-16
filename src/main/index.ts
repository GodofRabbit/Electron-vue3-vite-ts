/*
 * @Description: Electorn 主进程配置
 * @Author: renlu
 * @Date: 2021-09-18 18:22:38
 * @LastEditTime: 2021-11-16 18:09:16
 * @LastEditors: renlu
 */
import { setTray, createDefaultWindow } from './window'
import { app, Menu, ipcMain, screen } from 'electron'

import './puppeteer'

// 关闭菜单栏
Menu.setApplicationMenu(null)

// 应用程序单开模式
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) app.quit()

app.whenReady().then(() => {
  const { width: screen_width, height: screen_height } = screen.getPrimaryDisplay().workAreaSize

  setTray(screen_width, screen_height) // 设置托盘图标与菜单

  const defaultWindow = createDefaultWindow() // 创建默认窗口

  // 监听渲染进程崩溃或被杀死，重新运行程序
  defaultWindow.webContents.on('render-process-gone', () => {
    app.relaunch()
    app.exit(0)
  })
})

// 所有窗口关闭，移除所有监听器，程序不退出
app.on('window-all-closed', () => {
  ipcMain.removeAllListeners()
})
