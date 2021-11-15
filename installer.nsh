# Custom NSIS script

# Example

# 预初始化时，根据机器位数决定默认安装路径

!macro preInit
  SetRegView 64
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files\rabbit"
    WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files\rabbit"
  SetRegView 32
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files (x86)\rabbit"
    WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "C:\Program Files (x86)\rabbit"
!macroend


# 自定义安装，可以在主程序安装最后一步，安装其他的 msi 安装包，msi 文件请置于根目录下并在 package.json 文件中配置 extraFiles 字段

# !macro customInstall
#  SetRegView 64
#    ExecWait '"msiexec" /i "$INSTDIR\other.msi"  /passive'
#  SetRegView 32
#    ExecWait '"msiexec" /i "$INSTDIR\other(x86).msi"  /passive'
# !macroend


# 自定义卸载，卸载时通过查找注册表中的 product_code 进行卸载，查看这里 https://juejin.cn/post/7019244597213675533#heading-11

# !macro customUnInstall
#  SetRegView 64
#    ExecWait '"msiexec" /qn /quiet /uninstall {product_code}'
#  SetRegView 32
#    ExecWait '"msiexec" /qn /quiet /uninstall {product_code}'
# !macroend
