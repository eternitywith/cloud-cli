import {LIST_USERS_JOI} from '../joi/user'
import router from 'koa-joi-router'
import {listUsers} from '../controller/user'

export const USER_ROUTER = router()

USER_ROUTER.prefix('/users')

const routes: Array<router.Spec> = [
  // 获取用户列表
  {
    method: 'get',
    path: '/',
    validate: {
      continueOnError: true,
      query: LIST_USERS_JOI,
    },
    handler: listUsers,
  },
]

USER_ROUTER.route(routes)
