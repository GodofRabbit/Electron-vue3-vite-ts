/*
 * @Description: 设置托盘图标与菜单
 * @Author: renlu
 * @Date: 2021-09-26 11:08:49
 * @LastEditTime: 2021-11-16 18:14:38
 * @LastEditors: renlu
 */
import { app, Tray, Menu, ipcMain, BrowserWindow } from 'electron'
import createWindow from './create'
import { options as allWindow } from './options'
import openUrl from '../puppeteer'
import { url } from 'inspector'

const path = require('path')

let appTray: Tray
export function setTray(screen_width: number, screen_height: number): Tray {
  if (appTray) return appTray

  const trayMenuTemplate = [
    {
      label: '菜单一',
      click() {
        createWindow(allWindow.menuOne.window, allWindow.menuOne.hash)
      }
    },
    {
      label: '菜单二',
      click() {
        createWindow(allWindow.menuTwo.window, allWindow.menuTwo.hash)
      }
    },
    {
      label: '自动化测试',
      click() {
        createWindow(allWindow.menuThree.window, allWindow.menuThree.hash)

        // 监听打开网址的事件
        ipcMain.on('openUrl', (event, url) => {
          openUrl(screen_width, screen_height, url)
        })
      }
    },
    {
      label: '退出',
      click() {
        app.exit(0)
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
