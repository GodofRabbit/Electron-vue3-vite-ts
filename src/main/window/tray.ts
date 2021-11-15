/*
 * @Description: 设置托盘图标与菜单
 * @Author: renlu
 * @Date: 2021-09-26 11:08:49
 * @LastEditTime: 2021-11-15 19:26:31
 * @LastEditors: renlu
 */
import { Tray, Menu, BrowserWindow } from 'electron'
import createWindow from './create'
import { options as allWindow } from './options'

const path = require('path')

let appTray: Tray
export function setTray(): Tray {
  if (appTray) return appTray

  const trayMenuTemplate = [
    {
      label: '菜单一',
      click() {
        createWindow(allWindow.menuOne.window, allWindow.menuOne.hash)
      }
    }
  ]
  // 创建托盘实例
  const iconPath = path.join(__dirname, '../favicon.ico')
  appTray = new Tray(iconPath)

  // 图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate as any)
  appTray.setToolTip('rabbit')

  // 设置托盘菜单
  appTray.setContextMenu(contextMenu)

  return appTray
}

// 创建消息提示默认窗口
let defaultWindow: BrowserWindow
export function createDefaultWindow(): BrowserWindow {
  if (defaultWindow) return defaultWindow

  defaultWindow = createWindow(allWindow.defaultWin.window, allWindow.defaultWin.hash)

  return defaultWindow
}
