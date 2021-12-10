import resolve from "rollup-plugin-node-resolve"; //可引入包
import commonjs from "rollup-plugin-commonjs"; //可解析es包
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
export default {
  input: "src/index.ts", // 打包入口
  output: [
    {
      name: "Tools",
      // 打包出口
      file: pkg.main, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
      format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
    {
      // 打包出口
      file: pkg.module, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
      format: "esm", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
  ],
  plugins: [
    // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript({ tsconfig: './tsconfig.json' }), // 解析TypeScript
  ],
};
