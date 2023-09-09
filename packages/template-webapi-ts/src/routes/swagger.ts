import router from 'koa-joi-router'
import swaggerJSDoc from 'swagger-jsdoc'
import fs from 'fs'
import path from 'path'
import {SERVER_PORT, SWAGGER_BASE_PATH, SWAGGER_JSON_URL} from '../config'

export const SWAGGER_ROYTER = router()

const packageJsonPath = '../../package.json'
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, packageJsonPath), 'utf-8'))

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Web API',
    version: packageJson.version,
    description: 'Web API By Swagger',
    host: `0.0.0.0:${SERVER_PORT}`,
    basePath: SWAGGER_BASE_PATH,
  },
}
const options = {
  swaggerDefinition,
  apis: ['./controller/*.ts', './docs/*.ts'], // 写有注解的router的存放地址
}

const swaggerSpec = swaggerJSDoc(options)

SWAGGER_ROYTER.get(SWAGGER_JSON_URL, ctx => {
  ctx.set('Content-Type', 'application/json')
  ctx.body = swaggerSpec
})

export default SWAGGER_ROYTER
