/**
 *  @openapi
 *  components:
 *    schemas:
 *      getFileSignUrl:
 *        type: object
 *        description: 文件下载的签名
 *        properties:
 *          url:
 *            type: string
 *            description: 文件下载地址
 *          preview:
 *            type: string
 *            description: 如果为支持的图像格式，则使用 UCloud 图片转换服务压缩转为 webp 格式（部分有）
 *          thumbnail:
 *            type: string
 *            description: 压缩的图片地址（部分有）
 *      putFileSignUrl:
 *        type: object
 *        description: 文件上传的签名
 *        properties:
 *          url:
 *            type: string
 *            description: 文件上传地址
 *          headers:
 *            type: object
 *            description: 如果图片已存在，则没有headers，代表不需要上传，如果图片不存在，则上传图片时需要使用该headers。
 *            properties:
 *              Authorization:
 *                type: string
 *                description: 请求头中的Authorization
 *              'Content-MD5':
 *                type: string
 *                description: 请求头中的'Content-MD5'
 *              'Content-Type':
 *                type: string
 *                description: 请求头中的'Content-Type'
 *
 */
