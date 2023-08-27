# Project Name

接口文档地址：/web-api

接口文档json地址：/swagger.json

## 环境准备

环境：vscode、node18+、pnpm、pm2

```bash
# 全局安装pnpm
npm install pnpm -g

# 全局安装pm2
npm install pm2 -g

# 安装pm2的日志切割拓展模块
pm2 install pm2-logrotate
```

代码自动格式化需安装vscode拓展：ESLint、Prettier - Code formatter、Prettier ESLint

## 技术栈

Koa + Typescript

grpc：nice-grpc

参数校验：koa-joi-router

接口文档：swagger-jsdoc、koa2-swagger-ui

项目规范：eslint、prettier、commitlint

日志：log4js

## 运行

```bash
# 编译protos，如果有proto文件更新，需要先编译后再启动服务
# 允许参数作为proto文件名，则只编译单个proto文件，如：pnpm run protoc user.proto
pnpm run protoc

# 热更新调试
pnpm run dev

# 正常使用node启用服务
pnpm run serve

# 开发环境使用pm2启动
pnpm run pm2:dev-start

# 使用pm2启动应用
pnpm run pm2:start

# pm2 Stop all
pnpm run pm2:stop
# pm2 Restart all
pnpm run pm2:restart
# pm2 Reload all
pnpm run pm2:reload
# pm2 Delete all
pnpm run pm2:delete
# 杀掉pm2管理的所有进程
pnpm run pm2:kill
# 监控应用进程cpu和memory使用情况
pnpm run pm2:monit
# 查看应用的日志
pnpm run pm2:logs
# 查看应用日志
# 注意：由于pm2 show命令需要指定应用名称，所以这条指令在脚本中写死了应用名称，如果pm2配置文件中修改了应用名称，这条script也需要改变
pnpm run pm2:show
```

## 命名规范

- 文件、目录：kebab-case
- 函数、变量名：小驼峰(普通)、大驼峰(具有特殊含义的)

## 项目结构

根目录下的目录，都包含一个 index.ts，该目录下的所有可导出内容都可通过该文件导出，其他地方引用时，直接根据目录相对地址引用。

- src
  - config 配置目录
  - bin 脚本目录
  - docs swagger公共变量目录
  - joi joi规则定义目录
  - mock 模拟数据
  - controller 接口核心逻辑
  - grpc 调用 grpc 相关
    - compiled-protos 存放 protos 编译后的目标文件
    - middleware grpc相关中间件
    - protos 存放所有 protos，protoc.sh 脚本会遍历该目录下，并编译所有 proto 文件，编译结果放在 compiled-protos 目录下
    - index.ts 生成所有 grpc 客户端并导出
  - middleware 中间件
    - auth 接口鉴权
    - error 自定义处理异常
    - jwt 生成内置token
  - routes 路由
    - example.ts 一个路由 demo，包含 joi 校验编写规则，swagger 注释规则。
    - swagger.ts swagger.json 路由
  - utils 工具库
    - file-storage-sign 封装了文件存储签名相关的库
    - results.ts 用于包装 response
    - log4js.ts 日志相关配置
    - router-validator 处理路由校验失败 handler
- logs 日志
