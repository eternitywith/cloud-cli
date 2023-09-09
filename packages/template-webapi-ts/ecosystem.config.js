/* eslint-disable node/no-missing-require */
/* eslint-disable node/no-unpublished-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/naming-convention */
const {CLUSTER_ENABLED, CLUSTER_CORE} = require('./dist/config')
const {IS_PRODUCTION} = require('./dist/config/base')

module.exports = {
  apps: [
    {
      name: 'web-api', // 修改后需要修改package.json中script中的pm2:show命令
      script: 'dist/app.js',
      watch: !IS_PRODUCTION,
      autorestart: true,
      exec_mode: CLUSTER_ENABLED ? 'cluster' : 'fork',
      instances: CLUSTER_ENABLED ? CLUSTER_CORE : 1, // fork模式下无法实现多个副本使用一个端口，数量只能设置为1
      max_restarts: 20,
      max_memory_restart: '2G',
      output: './logs/pm2/out.log',
      error: './logs/pm2/error.log',
      merge_logs: true,
      log_type: 'json',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}
