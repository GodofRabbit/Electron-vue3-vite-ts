<!--
 * @Description: 自动化测试窗口
 * @Author: renlu
 * @Date: 2021-09-29 16:59:47
 * @LastEditTime: 2021-11-16 18:52:26
 * @LastEditors: renlu
-->
<template>
  <div style="text-align: center; margin-top: 100px">
    <el-input v-model="url" placeholder="Please input url" style="width: 400px">
      <template #prepend>网址:</template>
    </el-input>
    <el-button type="danger" size="small" @click="toUrl" class="start">点击开始</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// data
const url = ref('https://baidu.com')

// methods
function toUrl() {
  window.ipcRenderer.send('openUrl', url.value)
}
</script>

<style lang="scss" scoped>
.start {
  display: block;
  margin: 60px auto 0 auto;
}
</style>
