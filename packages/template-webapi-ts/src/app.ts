import Koa from 'koa'
import {koaSwagger} from 'koa2-swagger-ui'
import koaJson from 'koa-json'
import bodyParser from 'koa-bodyparser'
import koaQs from 'koa-qs'
import {SWAGGER_ROYTER, USER_ROUTER} from './routes'
import {errorHandler} from './middleware'
import {IS_PRODUCTION, SERVER_PORT, SWAGGER_JSON_URL, SWAGGER_ROUTE_PREFIX} from './config'
import {auth, createJWT} from './middleware'
import {logger} from './utils'

const app = new Koa()
app.use(errorHandler)

// 为query提供嵌套支持
koaQs(app)

// bodyParser
app.use(
  bodyParser({
    enableTypes: ['json', 'form', 'text'],
    jsonLimit: '10mb',
  })
)

// JSON pretty-printed response middleware
app.use(koaJson())

// 开发环境打印请求log
if (!IS_PRODUCTION) {
  app.use(async (ctx, next) => {
    logger.info(`${ctx.method} ${ctx.url} request begin`)

    const start = +new Date()
    await next()
    const ms = +new Date() - start

    logger.info(`${ctx.method} ${ctx.url} response end - ${ms}ms`)
  })
}

// 生成接口文档swagger-ui路由
app.use(
  koaSwagger({
    routePrefix: SWAGGER_ROUTE_PREFIX,
    swaggerOptions: {
      url: SWAGGER_JSON_URL,
    },
  })
)
// 挂载swagger路由
app.use(SWAGGER_ROYTER.middleware())

// 认证
app.use(auth)

// 创建内部服务的jwt
app.use(createJWT)

// routers
app.use(USER_ROUTER.middleware())

// listen error and log
app.on('error', (err, ctx) => {
  logger.error('server error', err, ctx)
})

app.listen(SERVER_PORT, () => {
  logger.info(`server is running on http://localhost:${SERVER_PORT}`)
})

logger.info('NODE_ENV:', process.env.NODE_ENV)

logger.info(`Server running on port ${SERVER_PORT}`)
