关于打包名称、图标、作者、copyright 的设置，请修改 package.json 文件中的属性

### 设置 `Electron` 镜像，使用境内地址

npm config set ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"

### 安装依赖

npm i

### 本地启动

npm run dev

### 打包（根据需要打对应的）

npm run win32 | win64 | mac | linux
