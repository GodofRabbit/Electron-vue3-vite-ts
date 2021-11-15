<!--
 * @Description: IP 类型的输入框组件
 * @Author: renlu
 * @Date: 2021-09-24 12:01:48
 * @LastEditTime: 2021-10-20 15:10:57
 * @LastEditors: renlu
-->
<template>
  <ul class="ipAdress">
    <li v-for="(item, index) in ipAdress" :key="index">
      <input
        type="text"
        @input="checkIpVal(item, index)"
        @keydown="turnIpPOS(item, index, $event)"
        v-model="item.value"
        :ref="setItemRef"
      />
      <div></div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

// ts
interface Item {
  value: string | number
}

// props
defineProps<{
  ipAdress: Array<Item>
}>()

// data
const itemRefs: Ref<HTMLElement[]> = ref([])

// methods
const setItemRef = (el: HTMLElement) => {
  if (el) itemRefs.value.push(el)
  return itemRefs
}

function checkIpVal(item: Item, index: number) {
  // 确保每个值都处于0-255
  let val: string | number = item.value
  // 当输入的是空格时，值赋为空
  val = val.toString().trim()
  val = parseInt(val, 10)
  if (isNaN(val)) {
    val = ''
  } else {
    val = val < 0 ? 0 : val
    val = val > 255 ? 255 : val
  }
  Object.assign(item, { value: val })
  // 输入字符长度满3个会跳转到下一个input
  if (index !== 3 && item.value.toString().length === 3) itemRefs.value[index + 1].focus()
}

function turnIpPOS(item: Item, index: number, event: KeyboardEvent) {
  const input: HTMLInputElement[] = <HTMLInputElement[]>itemRefs.value
  let e = event || window.event
  // 左箭头向左跳转，左一不做任何措施
  if (e.keyCode === 37 && index !== 0 && input[index].selectionStart === 0) {
    input[index - 1].focus()
    input[index - 1].setSelectionRange(3, 3)
  }
  // 删除键把当前数据删除完毕后会跳转到前一个input，左一不做任何处理
  if (e.keyCode === 8 && index !== 0 && item.value.toString() === '') {
    input[index - 1].focus()
    input[index - 1].setSelectionRange(3, 3)
  }
  // 右箭头、回车键、空格键、冒号均向右跳转，右一不做任何措施
  if (e.keyCode === 39 || e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 190) {
    if (index !== 3 && input[index].selectionEnd === item.value.toString().length) {
      input[index + 1].focus()
      input[index + 1].setSelectionRange(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.ipAdress {
  display: flex;
  align-items: center;
  width: 200px;
  margin: auto;

  li {
    position: relative;
    height: 23px;
    margin: 0;

    &:last-child div {
      display: none;
    }

    input {
      border: none;
      width: 100%;
      height: 23px;
      text-align: center;
      background: transparent;
      border-bottom: 1px solid gray;

      &:focus {
        outline: none;
        border-bottom: 2px solid #40a9ff;
      }
    }

    div {
      position: absolute;
      bottom: 2px;
      right: 0;
      border-radius: 50%;
      background: #000000;
      width: 2px;
      height: 2px;
    }
  }
}
</style>
