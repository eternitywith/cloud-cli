import {ClientMiddlewareCall, CallOptions, ClientError} from 'nice-grpc'
import {isAbortError} from 'abort-controller-x'
import {logger} from '../../utils'
import {IS_PRODUCTION} from '../../config'

// logMiddleware
export async function* logMiddleware<Request, Response>(
  call: ClientMiddlewareCall<Request, Response>,
  options: CallOptions
) {
  const {path} = call.method

  // 开发环境logger请求详情
  if (!IS_PRODUCTION) {
    logger.info('grpc call', path, 'start')
    logger.info('grpc call detail:', call, '\noptions:', options)
  }

  try {
    const result = yield* call.next(call.request, options)

    // 开发环境logger响应详情
    if (!IS_PRODUCTION) {
      logger.info('grpc call result:', result)
      logger.info('grpc call', path, 'end: OK')
    }

    return result
  } catch (error: any) {
    // 异常时logger本次call的详情
    logger.error('grpc call detail:', call)

    if (error instanceof ClientError) {
      // logger.error('grpc call', path, `end: ${Status[error.code]}: ${error.details}`)
    } else if (isAbortError(error)) {
      logger.error('grpc call', path, 'cancel')
    } else {
      logger.error('grpc call', path, `error: ${error?.stack}`)
    }

    throw error
  }
}
