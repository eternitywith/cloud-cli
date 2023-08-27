import { USER_SVC } from "./grpc"

/**
 * 登陆认证配置 
 */

// client_id
export const AUTH_CLIENT_ID = process.env.AUTH_CLIENT_ID || 'adminweb'
// client_secret
export const AUTH_CLIENT_SECRET =
  process.env.AUTH_CLIENT_SECRET || 'g8DRdT3EyDKn7ppPjZkoskrieTjZ2GASmpsorXOv'
// authorize url
export const AUTH_AUTHORIZE_URL = process.env.AUTH_AUTHORIZE_URL || `http://${USER_SVC}/authn/auth`
// token url
export const AUTH_TOKEN_URL = process.env.AUTH_TOKEN_URL || `http://${USER_SVC}/authn/token`
// userinfo url
export const AUTH_USERINFO_URL =
  process.env.AUTH_USERINFO_URL || `http://${USER_SVC}/authn/userinfo`
// config url
export const AUTH_CONFIG_URL =
  process.env.AUTH_CONFIG_URL || `http://${USER_SVC}/authn/.well-known/openid-configuration`