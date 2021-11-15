/*
 * @Description: ts 类型
 * @Author: renlu
 * @Date: 2021-09-26 10:45:50
 * @LastEditTime: 2021-09-27 17:09:36
 * @LastEditors: renlu
 */
export type allWindowType = {
  [propName: string]: {
    window: Electron.BrowserWindowConstructorOptions
    hash: string
  }
}

export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object
}
