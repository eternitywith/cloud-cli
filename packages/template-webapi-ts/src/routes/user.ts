import { listUsersJoi } from '../joi/user'
import router from 'koa-joi-router'
import { listUsers } from '../controller/user'

export const user = router()
user.prefix('/users')

const routes: Array<router.Spec> = [
  // 获取用户列表
  {
    method: 'get',
    path: '/',
    validate: {
      continueOnError: true,
      query: listUsersJoi,
    },
    handler: listUsers,
  },
]
user.route(routes)
