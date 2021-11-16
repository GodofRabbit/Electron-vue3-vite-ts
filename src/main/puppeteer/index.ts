/*
 * @Description: puppeteer 示例
 * @Author: renlu
 * @Date: 2021-11-16 16:02:46
 * @LastEditTime: 2021-11-16 18:47:15
 * @LastEditors: renlu
 */
const puppeteer = require('puppeteer')

export default async (screen_width: number, screen_height: number, url: string) => {
  const browser = await puppeteer.launch({
    headless: false, // 是否启用无头模式
    defaultViewport: {
      width: screen_width,
      height: screen_height
    }
  })
  const page = await browser.newPage()
  await page.goto(url)
  setInterval(async () => {
    await page.mouse.click(1200, 255)
  }, 5000)
}
