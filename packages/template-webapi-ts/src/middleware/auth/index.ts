import axios from 'axios'
import { Context, Next } from 'koa'
import { Exception } from '../error'
import { pathToRegexp } from 'path-to-regexp'
import { AUTH_USERINFO_URL } from '../../config'

export const auth = async (ctx: Context, next: Next) => {
  if (pathToRegexp('/favicon.ico').test(ctx.url)) {
    ctx.body = null
  } else {
    const { authorization } = ctx.request.headers

    if (!authorization) {
      ctx.throw(new Exception(1201, 401))
    }
    const authes = authorization.split(' ')
    if (authes.length != 2 || authes[0].toLowerCase() !== 'bearer') {
      ctx.throw(new Exception(1202, 401))
    }

    const userRes: any = await getUserInfo(authes[1])
    if (userRes.status != 200) {
      ctx.throw(new Exception(1200, 401))
    }
    ctx.state = userRes.data
    await next()
  }
}

const getUserInfo = (accessToken: string) =>
  axios({
    method: 'get',
    url: AUTH_USERINFO_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
