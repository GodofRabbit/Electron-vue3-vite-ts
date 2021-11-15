/*
 * @Description: Electorn 主进程配置
 * @Author: renlu
 * @Date: 2021-09-18 18:22:38
 * @LastEditTime: 2021-11-15 18:39:52
 * @LastEditors: renlu
 */
import { setTray, createDefaultWindow } from './window'
import { app, Menu, ipcMain } from 'electron'

// 关闭菜单栏
Menu.setApplicationMenu(null)

// 应用程序单开模式
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) app.quit()

app.whenReady().then(() => {
  setTray() // 设置托盘图标与菜单

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
