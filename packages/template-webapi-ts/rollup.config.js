import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript2 from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

// tsconfig.json合并选项
const override = { compilerOptions: { module: 'ESNext' } }

export default {
  input: './src/app.ts',
  output: {
    // file: 'dist/bundle.es.js',//输出的文件的路径和名称
    dir: 'dist',
    format: 'cjs',
    exports: 'named', // 指定导出模式（自动、默认、命名、无）
    preserveModules: true, // 保留模块结构
    preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
  },

  plugins: [
    resolve(),
    json(),
    commonjs(),
    typescript2({ tsconfig: './tsconfig.json', tsconfigOverride: override }),
  ],
}
