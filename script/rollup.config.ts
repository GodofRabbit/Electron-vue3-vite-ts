/*
 * @Description: rollup 打包配置
 * @Author: renlu
 * @Date: 2021-09-18 18:22:38
 * @LastEditTime: 2021-11-15 18:36:52
 * @LastEditors: renlu
 */
import path from 'path'
import { RollupOptions } from 'rollup'
import copy from 'rollup-plugin-copy'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import { builtins, getEnv } from './utils'

export interface ConfigOptions {
  env?: typeof process.env.NODE_ENV
  proc: 'main' | 'render' | 'preload'
}

export default function (opts: ConfigOptions) {
  const sourcemap = opts.proc === 'render'
  const options: RollupOptions = {
    input: path.join(__dirname, `../src/${opts.proc}/index.ts`),
    output: {
      dir: path.join(__dirname, `../dist/${opts.proc}`),
      format: 'cjs',
      sourcemap
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js', 'json']
      }),
      commonjs(),
      json(),
      typescript({
        sourceMap: sourcemap,
        noEmitOnError: true
      }),
      alias({
        entries: {
          '@root': path.join(__dirname, '..'),
          '@': path.join(__dirname, '../src')
        }
      }),
      copy({
        // 复制 favicon.ico 到指定目录
        targets: [{ src: 'favicon.ico', dest: 'dist' }]
      }),
      replace({
        ...Object.entries({ ...getEnv(), NODE_ENV: opts.env }).reduce(
          (acc, [k, v]) => Object.assign(acc, { [`process.env.${k}`]: JSON.stringify(v) }),
          {}
        ),
        preventAssignment: true
      })
    ],
    external: [...builtins(), 'electron'],
    onwarn: (warning) => {
      // https://github.com/rollup/rollup/issues/1089#issuecomment-365395213
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        console.error(`(!) ${warning.message}`)
      }
    }
  }

  return options
}
