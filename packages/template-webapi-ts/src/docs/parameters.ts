/**
 *  @openapi
 *  components:
 *    parameters:
 *      filterParam:
 *        name: filter
 *        in: query
 *        description: 过滤参数
 *        required: false
 *        schema:
 *          type: string
 *        examples:
 *          filter:
 *            summary: 更新时间大于2022-02-09 14:47:59
 *            value: filter{update_time.gte}=2022-02-09T14:47:59.000Z
 *      pageSizeParam:
 *        name: page_size
 *        in: query
 *        description: 页面范围
 *        required: false
 *        schema:
 *          type: integer
 *          format: int32
 *        examples:
 *          page_size:
 *            summary: 默认15
 *            value: 15
 *      pageNumParam:
 *        name: page_num
 *        in: query
 *        description: 页码
 *        required: false
 *        schema:
 *          type: integer
 *          format: int32
 *        examples:
 *          page_size:
 *            summary: 默认1
 *            value: 1
 *      orderByParam:
 *        name: order_by
 *        in: query
 *        description: 排序规则
 *        required: false
 *        schema:
 *          type: string
 *        examples:
 *          order_by:
 *            summary: 更新时间倒序，更新时间相同的按照名称升序
 *            value: "update_time desc, title"
 *      totalSizeParam:
 *        name: total_size
 *        in: query
 *        description: 总条目
 *        required: false
 *        schema:
 *          type: integer
 *          format: int32
 *        examples:
 *          page_size:
 *            summary: 默认0
 *            value: 0
 *      stateParam:
 *        name: state
 *        in: query
 *        description: "用于维护请求和回调之间的状态的不透明值，通常用来防止一些网络攻击，在完成认证后重定向跳转时会原样返回该字段。\n\n 由于服务存在每次登录不一定是跳转到默认首页的情况，这里我将登录后跳转的路由编码在state里面，用于登录后根据需要跳转到不同的路由。"
 *        required: false
 *        schema:
 *          type: string
 *        examples:
 *          state:
 *            summary: state
 *            value: ...
 *      authCodeParam:
 *        name: code
 *        in: query
 *        description: 授权请求返回的授权码
 *        required: true
 *        schema:
 *          type: string
 *        examples:
 *          code:
 *            summary: 授权码
 *            value: ay2xcw2uzngcqrk7q622bfcot
 *      forceLoginParam:
 *        name: force
 *        in: query
 *        description: 在我们的场景中，多地登录的情况下允许一方强制登录，强制登录将此参数传入true。
 *        required: false
 *        schema:
 *          type: boolean
 *        examples:
 *          force:
 *            summary: 是否强制登录
 *            value: false
 *      userIdParam:
 *        name: user_id
 *        in: path
 *        description: 用户id
 *        required: true
 *        schema:
 *          type: string
 *        examples:
 *          filter:
 *            summary: 用户id uuid
 *            value: "1123aa"
 *
 */
