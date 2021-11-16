/*
 * @Description: 路由配置
 * @Author: renlu
 * @Date: 2021-09-24 11:32:59
 * @LastEditTime: 2021-11-16 17:49:39
 * @LastEditors: renlu
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/defaultWin',
    name: 'defaultWin',
    component: () => import('@/views/DefaultWin.vue')
  },
  {
    path: '/menuOne',
    name: 'menuOne',
    component: () => import('@/views/MenuOne.vue')
  },
  {
    path: '/menuTwo',
    name: 'menuTwo',
    component: () => import('@/views/MenuTwo.vue')
  },
  {
    path: '/menuThree',
    name: 'menuThree',
    component: () => import('@/views/MenuThree.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
