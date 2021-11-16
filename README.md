### 介绍

一个基于 Electron + Vue3 + TS + Vite 的模板

关于打包名称、图标、作者、copyright 的设置，请修改 package.json 文件中的属性

### 设置 `Electron` 镜像，使用境内地址

npm config set ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"

### 安装依赖

npm i

### 本地启动

npm run dev

### 打包（根据需要打对应的）

npm run win32 | win64 | mac | linux

### 说明

目前在 mac 上运行还不太友好

### 分支说明

本分支为 自动化测试分支，添加了 `puppeteer、robotjs` 两个包，查看演示请右键托盘菜单单击 `自动化测试`

`robotjs` 包安装失败请参考 `https://juejin.cn/post/6891143846105710599`
