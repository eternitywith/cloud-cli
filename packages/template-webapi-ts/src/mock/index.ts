import { Random } from 'mockjs'

/**
 * 模拟数据
 */

// example
export function mockResponse() {
  // 根据随机生成的某天，生成之后的第i天
  const randomDay = Random.integer(1, 1000)
  function getDay(i: number) {
    return new Date(new Date().getTime() - (randomDay + i) * 86400000).setHours(0, 0, 0, 0) / 1000
  }

  // 随机生成时间长度
  const len = Random.integer(7, 30)
  const result = []
  for (let i = 0; i < len; i++) {
    result.push({
      total: Random.integer(1, 1000),
      day: getDay(i),
      create_time: new Date().toISOString(),
      update_time: new Date().toISOString(),
      delete_time: new Date(0).toISOString(),
    })
  }

  return result
}
