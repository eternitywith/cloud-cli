interface Map {
  [key: string]: string
}

export const ERROR_CODE: Map = {
  0: '操作成功',
  /* 通用code码 1000 - 2999 */
  1000: '服务器内部错误',
  /* 接口参数相关 1100 - 1199 */
  1100: '资源不存在',
  1101: '参数无效',
  1102: '请求方法错误',
  1103: '缺少必传参数',
  1104: '参数类型不合法',
  1105: '参数超出限定范围',
  1106: '接口不存在',
  /* 身份认证相关 1200 - 1299 */
  1200: 'access_token无效',
  1201: '缺少身份认证信息，请设置请求头并携带token',
  1202: '携带token的Authorization格式错误',
  1203: '用户在其他客户端登录，refresh_token失效',
  1204: '创建jwt_token失败',
  1205: 'jwt_token为空',
  /* 用户相关 1300 - 1399 */
  1300: '用户未登录',
  1301: '用户不存在',
  1302: '用户已存在',
  1303: '用户已在其他设备登录',
  /* 账号密码相关 1400 - 1499 */
  1400: '密码错误',
  1401: '账号已禁用',
  1402: '管理员密码错误',
  /* 权限相关 1500 - 1599 */
  1500: '访问未授权',
  1501: '授权已过期',
  1502: '权限不足',
  /* 请求相关 1600 - 1699 */
  1600: '请求超时',
  1601: '响应超时',
  /* 资源相关 1700 - 1799 */
  1700: '未找到指定资源',
  1701: '被创建的资源已存在',
  1702: '服务资源已耗尽，无法实现该请求',
  1703: '资源被锁定',
  /* 操作相关 1800 - 1899 */
  1800: '操作被拒绝',
  1801: '操作尝试超出有效范围，服务器拒绝',

  /* cloud业务code码 3000 - 3999 */
  3000: '客户端未在服务端注册',
  3001: '请在cookie中携带client_id',
  3002: '工程中已存在训练任务',
  3003: '任务已完成',
  3004: '该图片关联的工程正在训练',

  /* 训练业务 */
  1900: '图片的数量不符合标签的要求',
  1901: '暂不支持该模块',
}
