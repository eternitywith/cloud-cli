import {Joi} from 'koa-joi-router'
export * from './user'

/**
 * 该文件定义通用Joi规则
 */

// 通用list接口
export const LIST_JOI = {
  filter: Joi.string().optional(),
  page_num: Joi.number().optional(),
  page_size: Joi.number().optional(),
  order_by: Joi.string().optional(),
}
