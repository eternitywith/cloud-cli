import { Context } from 'koa'
import { routerErrorHandler, Success } from '../utils'
import { userClient } from '../grpc'
import { Metadata } from 'nice-grpc'

/**
 *  @openapi
 *  /users:
 *    get:
 *      tags:
 *      - 用户服务
 *      summary: 获取用户列表
 *      description: 获取用户列表
 *      parameters:
 *        - $ref: '#/components/parameters/filterParam'
 *        - $ref: '#/components/parameters/pageSizeParam'
 *        - $ref: '#/components/parameters/pageNumParam'
 *        - $ref: '#/components/parameters/orderByParam'
 *        - $ref: '#/components/parameters/auditParam'
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  code:
 *                    $ref: '#/components/responses/200/schema/properties/code'
 *                  message:
 *                    $ref: '#/components/responses/200/schema/properties/message'
 *                  data:
 *                    type: object
 *                    properties:
 *                      users:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/User'
 *                      total_size:
 *                        $ref: '#/components/parameters/totalSizeParam'
 *                      page_num:
 *                        $ref: '#/components/parameters/pageNumParam'
 *                      page_size:
 *                        $ref: '#/components/parameters/pageSizeParam'
 *        401:
 *          $ref: '#/components/responses/401'
 *
 */
export const listUsers = async (ctx: Context) => {
  if (ctx.invalid) routerErrorHandler(ctx)
  const { jwt } = ctx.state

  const { filter, page_num, page_size, order_by } = ctx.request.query as any

  const userList = await userClient.listUsers(
    {
      filter,
      page_num,
      page_size,
      order_by,
    },
    { metadata: Metadata({ authorization: jwt }) },
  )

  ctx.body = Success(userList)
}
