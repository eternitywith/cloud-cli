export * from './error-code'
export * from './change-handler'

import { Context, Next } from 'koa'
import * as HttpErrors from 'http-errors'
import { errorCode } from './error-code'
import { handleGrpcErrorStatus, handleGrpcErrorCode } from './change-handler'

/**
 * @description 自定义异常
 * @class Exception
 * @extends {Error}
 */
export class Exception extends Error implements HttpErrors.HttpError {
  // 用于new Exception时自定义的错误信息，不重写系统生成的message字段，方便观察错误日志
  customMsg: string

  // 反馈码
  code: number

  // http status码
  status: number

  // 默认报1000系统异常，状态码为500
  constructor(code = 1000, status = 500, message?: string) {
    super()

    // 允许只传入code和status，message将自动映射
    this.customMsg = message || errorCode[code]
    this.code = code
    this.status = status
  }

  // implements HttpErrors.HttpError
  [key: string]: any
  statusCode!: number
  expose!: boolean
  headers?: { [key: string]: string } | undefined
}

export const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (err) {
    const error = err as Exception

    // grpc响应码中这几种类型错误码的错误message不需要转换
    const noCustomMsgCode = [3, 5, 6]
    const noCustom = !!noCustomMsgCode.includes(error.code)

    // 优先获取本系统异常的http-status
    ctx.status = error.statusCode || error.status || handleGrpcErrorStatus(error.code)

    // 反馈码转换
    const code = handleGrpcErrorCode(error.code)

    // 获取message，优先new Exception时自定义的message
    const message = noCustom
      ? error.customMsg || error.details || errorCode[code] // 优先grpc响应details
      : error.customMsg || errorCode[code] || error.details // 优先code映射后的message

    ctx.body = {
      code,
      message,
    }

    // 触发应用层级错误事件
    ctx.app.emit('error', error, ctx)
  }
}
