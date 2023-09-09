import {Context} from 'koa'
import {Exception} from '../middleware'

/**
 * @description 路由异常处理器
 * @param ctx Context
 * @returns Exception
 */
export function routerErrorHandler(ctx: Context) {
  if (!ctx.invalid) return

  const d = ctx.invalid.params || ctx.invalid.query || ctx.invalid.body

  // 获取异常message
  const message = d?.details[0].message || d?.msg

  // 获取joi校验出的异常type
  const type = d?.details[0].type

  // type转为error code
  let code: number
  switch (type) {
    case 'any.required':
      code = 1103
      break
    case 'number.base':
    case 'object.base':
    case 'string.base':
    case 'boolean.base':
    case 'array.base':
    case 'binary.base':
    case 'date.base':
    case 'symbol.base':
      code = 1104
      break
    case 'number.max':
    case 'number.min':
      code = 1105
      break
    default:
      code = 1101
      break
  }

  ctx.throw(new Exception(code, 400, message))
}
