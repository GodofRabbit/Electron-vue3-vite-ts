/*
 * @Description: 预加载文件，向渲染进程传递的数据
 * @Author: renlu
 * @Date: 2021-09-18 18:22:38
 * @LastEditTime: 2021-10-19 15:38:50
 * @LastEditors: renlu
 */

import fs from 'fs'
import path from 'path'
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('fs', fs)

contextBridge.exposeInMainWorld('path', path)

contextBridge.exposeInMainWorld('process_execPath', process.execPath)

contextBridge.exposeInMainWorld('ipcRenderer', {
  ...ipcRenderer,
  on: (channel: any, callback: any) => {
    ipcRenderer.on(channel, callback)
  }
})
