/**
 * @description 将grpc反馈码[0-16]转换成自定义反馈码
 * @param {number} code code 状态码
 * @return {number} 自定义状态码
 */
export const handleGrpcErrorCode = (code = 1000): number => {
  let customCode: number
  switch (code) {
    case 2:
    case 10:
    case 12:
    case 13:
    case 14:
    case 15:
      customCode = 1000
      break
    case 3:
      customCode = 1101
      break
    case 4:
      customCode = 1600
      break
    case 5:
      customCode = 1700
      break
    case 6:
      customCode = 1701
      break
    case 7:
      customCode = 1502
      break
    case 8:
      customCode = 1702
      break
    case 9:
      customCode = 1800
      break
    case 11:
      customCode = 1801
      break
    case 16:
      customCode = 1200
      break
    default:
      // 自定义new Exception之后error.code和message已经改变，不需要再映射
      customCode = code
      break
  }
  return customCode
}

/**
 * @description 将grpc反馈码[0-16]转换成http状态码
 * @param {number} code code 状态码
 * @return {number} http状态码
 */
export const handleGrpcErrorStatus = (code: number): number => {
  let customStatus: number
  switch (code) {
    case 0:
      customStatus = 200
      break
    case 1:
      customStatus = 499
      break
    case 2:
    case 13:
    case 15:
      customStatus = 500
      break
    case 3:
    case 9:
    case 11:
      customStatus = 400
      break
    case 4:
      customStatus = 504
      break
    case 5:
      customStatus = 404
      break
    case 6:
    case 10:
      customStatus = 409
      break
    case 7:
      customStatus = 403
      break
    case 8:
      customStatus = 429
      break
    case 12:
      customStatus = 501
      break
    case 14:
      customStatus = 503
      break
    case 16:
      customStatus = 401
      break
    default:
      customStatus = 500
      break
  }
  return customStatus
}
