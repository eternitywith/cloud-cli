/**
 * @description 成功响应
 * @param {*} data 返回数据
 * @param {object} meta meta信息，一般为分页信息
 * @param {number} [code=0] code码
 * @param {string} [message='操作成功'] 提示信息
 * @return {object} {
    code: 0, message: '操作成功', data, meta
  }
 */
export const Success = (data?: unknown, meta?: unknown, code = 0, message = '操作成功') => {
  const response = meta
    ? {
        code,
        message,
        data,
        meta,
      }
    : {
        code,
        message,
        data,
      }
  return response
}
