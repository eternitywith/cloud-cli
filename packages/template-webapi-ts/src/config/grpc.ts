import {DEV_HOST, IS_PRODUCTION} from './base'

/**
 * grpc服务配置
 */

// 用户服务
export const USER_SVC_HOST = process.env.USER_SVC_HOST || (IS_PRODUCTION ? 'user-svc' : DEV_HOST)
export const USER_SVC_PORT = process.env.USER_SVC_PORT || (IS_PRODUCTION ? '8888' : '9016')
export const USER_SVC = `${USER_SVC_HOST}:${USER_SVC_PORT}`
