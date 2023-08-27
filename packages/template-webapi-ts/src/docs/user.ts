/**
 *  @openapi
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          user_id:
 *            type: string
 *            description: 用户id
 *          user_name:
 *            type: string
 *            description: 用户名
 *          real_name:
 *            type: string
 *            description: 真实名字
 *          role:
 *            type: string
 *            description: 角色
 *          last_login:
 *            type: string
 *            format: date-time
 *            description: 最近登陆时间
 *          email:
 *            type: string
 *            description: 邮箱
 *          phone:
 *            type: string
 *            description: 手机号
 *          expire_time:
 *            type: string
 *            format: date-time
 *            description: 过期时间
 *          create_time:
 *            type: string
 *            format: date-time
 *            description: 创建时间
 *          update_time:
 *            type: string
 *            format: date-time
 *            description: 更新时间
 *          reslimits:
 *            type: object
 *            properties:
 *              space_limit:
 *                $ref: '#/components/schemas/ResLimit'
 *              train_concurrent:
 *                $ref: '#/components/schemas/ResLimit'
 *              total_duration:
 *                $ref: '#/components/schemas/ResLimit'
 *              model_download:
 *                $ref: '#/components/schemas/ResLimit'
 *              train_times:
 *                $ref: '#/components/schemas/ResLimit'
 *          level:
 *            type: integer
 *            format: int32
 *            description: 用户级别  1：普通用户 2：高级用户
 *          user_extra_info:
 *            $ref: '#/components/schemas/UserExtraInfo'
 *      ResLimit:
 *        type: object
 *        properties:
 *          user_id:
 *            type: string
 *            description: 用户id
 *          resource_type:
 *            type: string
 *            description: 资源类型,1:总空间上限;2:训练并发上限;3:训练总次数(时长);4:下载权限;5:训练次数
 *          used:
 *            type: integer
 *            format: int32
 *            description: 资源使用量;type=4时,0:没有权限;1:有权限
 *          limit:
 *            type: integer
 *            format: int32
 *            description: 资源限制大小
 *          create_time:
 *            type: string
 *            format: date-time
 *            description: 创建时间
 *          update_time:
 *            type: string
 *            format: date-time
 *            description: 更新时间
 *      Company:
 *        type: object
 *        properties:
 *          title:
 *            type: string
 *            description: 企业名称
 *          type:
 *            type: int32
 *            description: 企业类型,1:设备商,2:视觉集成商,3:终端客户,4:其他
 *          province:
 *            type: string
 *            description: 省
 *          city:
 *            type: string
 *            description: 市
 *          district:
 *            type: string
 *            description: 区
 *          address:
 *            type: string
 *            description: 地址
 *          industry:
 *            format: int32
 *            description: 所属行业,1:3c电子;2:新能源;3:电路板;4:半导体;5:汽车;6:光伏;7:医药;8:医疗器械;9:纺织;10:食品加工;11:消费品;12:农业;13:其他
 *      Image:
 *        type: object
 *        properties:
 *          md5:
 *            type: string
 *            description: 图片的md5
 *          size:
 *            type: integer
 *            description: 图片的大小
 *          extension:
 *            type: string
 *            description: 图片的后缀
 *      UserExtraInfo:
 *        type: object
 *        properties:
 *          user_id:
 *            type: string
 *            description: 用户id
 *          real_name:
 *            type: string
 *            description: 真实姓名
 *          channel:
 *            type: integer
 *            description: 获取渠道,1:官方公众号;2:微信自媒体推广;3:媒体网站;4:行业网站;5:新闻稿件;6:线下展会研讨会;7:销售拜访;8:朋友推荐
 *          audit_status:
 *            type: integer
 *            description: 认证状态,1:未审核;2:审核通过
 *            enum: [1, 2]
 *          position:
 *            type: integer
 *            format: int32
 *            description: 在职岗位,1:技术总监;2:技术工程师;3:视觉工程师;4:软件开发;5:销售经理;6:CEO;7:采购经理;8:项目经理;9:其他
 *          company:
 *            $ref: '#/components/schemas/Company'
 *          images:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Image'
 *          img_urls:
 *            type: array
 *            items:
 *              type: string
 *
 *
 *
 *
 *
 */
