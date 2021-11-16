/*
 * @Description: 所有类型的窗口管理配置
 * @Author: renlu
 * @Date: 2021-09-26 10:22:34
 * @LastEditTime: 2021-11-16 17:47:42
 * @LastEditors: renlu
 */
import { allWindowType } from '../types'

export const options: allWindowType = {
  defaultWin: {
    window: {
      width: 1200,
      height: 800,
      resizable: true,
      show: true,
      alwaysOnTop: false,
      useContentSize: true,
      frame: true,
      backgroundColor: '#fff',
      icon: 'dist/favicon.ico'
    },
    hash: '/defaultWin'
  },
  menuOne: {
    window: {
      width: 400,
      height: 250,
      resizable: false,
      center: true,
      useContentSize: true,
      backgroundColor: '#fff',
      title: '菜单一',
      icon: 'dist/favicon.ico',
      maximizable: false,
      frame: true,
      skipTaskbar: false
    },
    hash: '/menuOne'
  },
  menuTwo: {
    window: {
      width: 1300,
      height: 800,
      resizable: true,
      show: true,
      alwaysOnTop: false,
      useContentSize: true,
      frame: true,
      backgroundColor: '#fff',
      icon: 'dist/favicon.ico',
      skipTaskbar: false
    },
    hash: '/menuTwo'
  },
  menuThree: {
    window: {
      width: 500,
      height: 400,
      resizable: true,
      show: true,
      alwaysOnTop: false,
      useContentSize: true,
      frame: true,
      backgroundColor: '#fff',
      icon: 'dist/favicon.ico',
      skipTaskbar: false
    },
    hash: '/menuThree'
  }
}
