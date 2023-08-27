/**
 * 内部jwt配置
 */

// 密钥
export const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET || 'cloud.aqrose.com'
// 过期时间
export const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN) || 60
// 算法
export const JWT_ALGORITHM = process.env.JWT_ALGORITHM || 'HS256'