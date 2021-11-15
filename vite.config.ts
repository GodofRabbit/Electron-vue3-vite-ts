require('dotenv').config({ path: join(__dirname, '.env') })

import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importElementPlus from 'vite-plugin-element-plus'

export default defineConfig((env) => {
  return {
    plugins: [vue(), importElementPlus({})],
    root: join(__dirname, 'src/render'),
    base: './',
    server: {
      port: +process.env.PORT
    },
    resolve: {
      alias: {
        '@root': __dirname,
        '@': join(__dirname, 'src/render')
      }
    },
    build: {
      outDir: join(__dirname, 'dist/render'),
      emptyOutDir: true,
      minify: false,
      commonjsOptions: {},
      sourcemap: true
    }
  }
})
