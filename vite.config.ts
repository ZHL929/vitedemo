import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import vueJsx from '@vitejs/plugin-vue-jsx';
import tsx from './plugin/index'
import AutoImport from 'unplugin-auto-import/vite'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions(), tsx(), AutoImport({
    imports:['vue'],
    dts:'src/auto-imports.d.ts'
  }) ]
})
