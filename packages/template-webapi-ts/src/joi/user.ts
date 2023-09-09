import {Joi} from 'koa-joi-router'

export const LIST_USERS_JOI = {
  filter: Joi.string(),
  page_num: Joi.number(),
  page_size: Joi.number(),
  order_by: Joi.string(),
  audit_status: Joi.number(),
  training_ranked: Joi.boolean(),
  tag_filter: Joi.string(),
  excluded_tag_id: Joi.string(),
}
