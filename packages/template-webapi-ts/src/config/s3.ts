/**
 * s3配置
 */

// 存储类型
export const S3_STORAGE_TYPE = (process.env.S3_STORAGE_TYPE as 'ucloud' | 'ceph') || 'ucloud'
// 是否开启代理
export const S3_STORAGE_PROXY = process.env.S3_STORAGE_PROXY === 'apply'
// 外网endpoint
export const S3_ENDPOINT = process.env.S3_ENDPOINT || 'cn-gd.ufileos.com'
// 内外endpoint
export const S3_INTERNAL_ENDPOINT = process.env.S3_INTERNAL_ENDPOINT || 'cn-gd.ufileos.com'
// ACCESSKEY
export const S3_ACCESSKEY = process.env.S3_ACCESSKEY || 'TOKEN_ee05b1a4-45e5-4076-866d-cbc7a7b6a40c'
// SECRETKEY
export const S3_SECRETKEY = process.env.S3_SECRETKEY || '51bc9d80-d949-425a-bbe7-ac040c0b2382'
// 桶名
export const S3_PROJECTS_BUCKET = process.env.S3_PROJECTS_BUCKET || 'aicloud-dev'
// 签名有效期
export const S3_SIGNED_EXPIRES = Number(process.env.S3_SIGNED_EXPIRES) || 3600
// 传输协议
export const S3_PROTOCAL = process.env.S3_PROTOCAL || 'https'
// 外网地址
export const S3_BUCKET_URL =
  process.env.S3_BUCKET_URL || `${S3_PROTOCAL}://${S3_PROJECTS_BUCKET}.${S3_ENDPOINT}/`
// 内网地址
export const S3_BUCKET_INTERNAL_URL =
  process.env.S3_BUCKET_INTERNAL_URL ||
  `${S3_PROTOCAL}://${S3_PROJECTS_BUCKET}.${S3_INTERNAL_ENDPOINT}/`
// s3 api版本
export const S3_API_VERSION = process.env.S3_API_VERSION || '2006-03-01'
// 开启ssl 默认不开启，开启只需配置非空字符串
export const S3_SSL_ENABLED =
  process.env.S3_SSL_ENABLED === undefined ? false : Boolean(process.env.S3_SSL_ENABLED)
// Whether to force path style URLs for S3 objects. 默认开启，不开启只需配置空字符串
export const S3_FORCE_PATH_STYLE =
  process.env.S3_FORCE_PATH_STYLE === undefined ? true : Boolean(process.env.S3_FORCE_PATH_STYLE)
// REGION
export const S3_REGION = process.env.S3_REGION || 'default'