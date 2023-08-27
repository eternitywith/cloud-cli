/**
 * 服务基础配置
 */

// 标志是否是生产环境
export const isProduction = process.env.NODE_ENV !== 'development'

// 开发环境ip
export const DEV_HOST = '192.168.0.165'

// 本服务端口
export const SERVER_PORT = process.env.SERVER_PORT || (isProduction ? '80' : '8001')

// 是否启用cluster模式
export const CLUSTER_ENABLED = process.env.CLUSTER_ENABLED === 'apply' || false
// 启用的集群数量，默认为3(不启用cluster模式则为1)，如果设置为字符串'max'，则数量为cpu总核数
export const CLUSTER_CORE = typeof process.env.CLUSTER_CORE || 3