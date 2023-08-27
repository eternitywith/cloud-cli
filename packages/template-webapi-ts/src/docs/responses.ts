/**
 *  @openapi
 *  components:
 *    responses:
 *      200:
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *              format: int32
 *              default: 0
 *            message:
 *              type: string
 *              default: "操作成功"
 *            data:
 *              type: object
 *              default: { ... }
 *      204:
 *        description: Not Content
 *        content:
 *          'application/json':
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                message:
 *                  type: string
 *                  default: 操作成功
 *
 *      400:
 *        description: Validation Failed
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1101
 *                message:
 *                  type: string
 *                  default: "'*' is not allowed"
 *
 *      401:
 *        description: Unauthenticated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1200
 *                message:
 *                  type: string
 *                  default: 身份认证失败
 *      403:
 *        description: Disabled
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1502
 *                message:
 *                  type: string
 *                  default: 权限不足
 *
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1100
 *                message:
 *                  type: string
 *                  default: 资源不存在
 *
 *      409:
 *        description: Resource Already Existed
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1701
 *                message:
 *                  type: string
 *                  default: 资源已经存在
 *      409-3002:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 3002
 *                message:
 *                  type: string
 *                  default: "工程中已存在训练任务"
 *      429:
 *        description: Conflict
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1702
 *                message:
 *                  type: string
 *                  default: "服务资源已耗尽，无法实现该请求"
 *      422-1703:
 *        description: ResourceLocked
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1703
 *                message:
 *                  type: string
 *                  default: "管理员密码错误"
 *            examples:
 *                task-trainging:
 *                  value:
 *                    code: 1703
 *                    message: "该工程正在训练"
 *                task-verifing:
 *                  value:
 *                    code: 1703
 *                    message: "该工程正在推理"
 *
 *      500:
 *        description: Service Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                  format: int32
 *                  default: 1000
 *                message:
 *                  type: string
 *                  default: "服务器内部错误"
 *
 *
 */
