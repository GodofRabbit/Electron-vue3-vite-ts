<!--
 * @Description: 主页
 * @Author: renlu
 * @Date: 2021-09-18 18:22:38
 * @LastEditTime: 2021-11-15 19:38:31
 * @LastEditors: renlu
-->
<template>
  <p class="title">Hello，我是主页!</p>
  <div class="example">
    <span>一个 IP 类型的输入框组件:</span>
    <IPInput :ipAdress="ipAdress" />
    <el-button type="primary" size="mini" @click="save">保存</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import IPInput from '@/components/IPInput.vue'

const filePath = 'config.json'
const datas: string = window.fs.readFileSync(filePath, { encoding: 'utf-8' })
const hostArr: Array<{ value: string }> = JSON.parse(datas)
  .hostip.split('.')
  .map((item: string) => ({
    value: item
  }))

// data
const ipAdress = reactive(hostArr)

// methods
function save() {
  const hostip: string = ipAdress.map((item) => `${item.value}`).join('.')
  const update_datas: string = datas.replace(/"hostip": (.*),/g, `"hostip": "${hostip}",`)
  try {
    window.fs.chmodSync(filePath, 765) // 该文件位于C盘，这里安全起见，同步的更改文件权限为可读、可写和可执行
    window.fs.writeFileSync(filePath, update_datas, { encoding: 'utf-8' })
  } catch (err) {
    console.log('写入文件失败：', err)
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 300px;
}

.example {
  width: 500px;
  display: flex;
  justify-content: center;
  margin: 40px auto 0 auto;
}
</style>
