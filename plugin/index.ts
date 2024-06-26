
import type { Plugin } from 'vite'
import * as babel from '@babel/core'; //@babel/core核心功能：将源代码转成目标代码。
import jsx from '@vue/babel-plugin-jsx'; //Vue给babel写的插件支持tsx v-model等

export default function ():Plugin  {
    return {
        name:"vite-plugin-vue-tsx",
        config () {
            return {
                esbuild: {
                    include:/.ts$/
                }
            }
        },
        async transform (code,id){
            if(/.tsx$/.test(id)) {
                console.log(code,id)
                //@ts-ignore
                const ts = await import('@babel/plugin-transform-typescript').then(r=>r.default)
                const res = await babel.transformAsync(code, {
                    ast: true,
                    configFile: false,
                    babelrc: false,
                    plugins: [jsx, [ts, { isTSX: true, allowExtensions: true }]]
                })
                console.log(res?.code)
                return res?.code
            }
            return code
        }
    }
}