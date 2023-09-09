import {Context, Next} from 'koa'
import jwt from 'jsonwebtoken'
import {Exception} from '../error'
import {logger} from '../../utils'
import {JWT_ALGORITHM, JWT_EXPIRES_IN, JWT_TOKEN_SECRET} from '../../config'

interface User {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  UserId: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Roles: Array<string>
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Groups: Array<string>
  // eslint-disable-next-line @typescript-eslint/naming-convention
  UserName: Array<string>
}
const expiresIn = JWT_EXPIRES_IN || 60
const algorithm = (JWT_ALGORITHM || 'HS256') as jwt.Algorithm
const secret = JWT_TOKEN_SECRET || 'cloud.aqrose.com'

export async function createJWT(ctx: Context, next: Next): Promise<void> {
  try {
    const state = ctx.state
    const user: User = {
      UserId: state.user_id,
      Roles: state.role ? [state.role] : [],
      Groups: state.Groups ? state.Groups : [],
      UserName: state.UserName ? state.UserName : '',
    }
    const jwtVal = await new Promise((resolve, reject) => {
      jwt.sign(
        {
          ...user,
          exp: Math.floor(Date.now() / 1000) + expiresIn,
          iat: Math.floor(Date.now() / 1000) - 5,
          nbf: Math.floor(Date.now() / 1000) - 5,
        },
        secret,
        {algorithm},
        (err, token) => {
          if (err) reject(err)
          resolve(token)
        }
      )
    })
    if (!jwtVal) {
      ctx.throw(new Exception(1205, 401))
    }
    ctx.state.jwt = `Bearer ${jwtVal}`
  } catch (err) {
    logger.error('err: ', err)

    ctx.throw(new Exception(1204, 401))
  }
  await next()
}
