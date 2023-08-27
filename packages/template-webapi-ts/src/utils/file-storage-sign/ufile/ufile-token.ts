// @ts-nocheck
/**
 * 根据ufile源码改编
 * ufile库源代码地址：https://github.com/ufilesdk-dev/ufile-jssdk/tree/e0fbd3152aa6d19173931f5f50b18c620f1cea5b
 */

import Base64 from 'base64-min'
import CryptoJS from 'crypto-js'

type GetTokenOptions = {
  method?: string
  file?: File
  fileName?: string
  date?: string | number
  contentType?: string
  putPolicy?: string
}

type ListFilesOptions = {
  prefix?: string
  marker?: string
  limit?: string
}

type PutFileOptions = {
  file?: File
  fileRename?: string
  putPolicy?: string
}

type File = {
  type?: string
  fileName?: string
  name: string
  FileName?: string
  md5?: string
}

export class UCloudUFile {
  bucketName: string

  bucketUrl: string

  PUBLIC_KEY: string

  PRIVATE_KEY: string

  EXPIRES: number

  PREFIX: string

  constructor(
    bucketName = 'aidi-projects-uat',
    bucketUrl = 'http://aidi-projects-uat.cn-gd.ufileos.com/',
    tokenPublicKey = 'TOKEN_15a04d14-9ca8-4c84-a4d2-396881ef51e1',
    tokenPrivateKey = '6ea4b071-0169-4379-8af6-306bd7dcfa9b',
    expires = 3600,
    prefix = '',
  ) {
    // 存储空间名称。既可以在这里配置，也可以在实例化时传参配置。
    // 例如 bucketName = "example-name"
    this.bucketName = bucketName

    // 存储空间域名。既可以在这里配置，也可以在实例化时传参配置。
    // 例如 bucketUrl = "https://example-name.cn-bj.ufileos.com/"
    this.bucketUrl = bucketUrl

    // 令牌公钥。既可以在这里配置，也可以在实例化时传参配置。
    this.PUBLIC_KEY = tokenPublicKey

    // 令牌私钥。既可以在这里配置，也可以在实例化时传参配置。
    this.PRIVATE_KEY = tokenPrivateKey

    // 签名过期时间
    this.EXPIRES = expires

    // 令牌配置的前缀，无前缀填空字符串
    // 例如 PREFIX = "example-prefix"
    this.PREFIX = prefix
  }

  getBucketUrl() {
    let { bucketUrl } = this

    // 如果不是以"/"结尾，则自动补上
    if (bucketUrl.charAt(bucketUrl.length - 1) !== '/') {
      bucketUrl += '/'
    }
    return bucketUrl
  }

  // 重命名文件
  getFileName(file: File | undefined, fileRename = '') {
    return fileRename
  }

  // 增加前缀
  addPrefix(filename: string) {
    return this.PREFIX ? `${this.PREFIX}/${filename}` : filename
  }

  // 获取文件管理签名token
  getUFileToken(
    options: GetTokenOptions,
    success: (arg0: string) => void,
    error: (arg0: string) => void,
  ) {
    const method = options.method || 'GET'
    const file = options.file || { type: '', name: '' }
    const fileName = options.fileName
    // 为get签名添加过期时间
    const date = options.date ?? ''

    let keyName
    const contentType = options.contentType || file.type
    const putPolicy = options.putPolicy || ''

    if (fileName) {
      keyName = fileName
    } else if (file.FileName) {
      keyName = file.FileName
    } else if (file.name) {
      keyName = this.addPrefix(file.name)
    } else {
      keyName = ''
    }

    const publicKey = this.PUBLIC_KEY
    const privateKey = this.PRIVATE_KEY
    let token = ''

    function canonicalizedResource(bucket: string, key: string) {
      return '/' + bucket + '/' + decodeURIComponent(key)
    }

    function sign(data: string, put_policy_base64: string) {
      const data_ = CryptoJS.enc.Utf8.parse(data)
      const hash = CryptoJS.HmacSHA1(data_, privateKey)
      const signdata = hash.toString(CryptoJS.enc.Base64)

      let signStr = 'UCloud ' + publicKey + ':' + signdata

      if (put_policy_base64) {
        signStr += ':' + put_policy_base64
      }
      return signStr
    }

    // SDK内部签名计算
    function signRequest(
      method: string,
      bucket: string,
      key: string,
      content_md5: string,
      content_type: string,
      date: string | number,
      put_policy: string,
    ) {
      let data = ''
      data += method.toUpperCase() + '\n'
      data += content_md5 + '\n'
      data += content_type + '\n'
      data += date + '\n'
      data += canonicalizedResource(bucket, key)

      //如果有回调，回调字符串参与计算签名
      let put_policy_base64 = ''
      if (put_policy) {
        const putPolicyStr = put_policy //JSON.stringify(put_policy).replace(/\"/g, '\\"');
        put_policy_base64 = Base64.encode(putPolicyStr)
        data += put_policy_base64
      }

      return sign(data, put_policy_base64)
    }

    const md5 = file.md5 ? file.md5 : ''
    token = signRequest(
      method,
      this.bucketName,
      encodeURIComponent(keyName),
      md5,
      contentType!,
      date,
      putPolicy,
    )
    if (token) {
      success(token)
    } else {
      error(token)
    }
  }

  // 获取文件列表
  getFileList(
    options: ListFilesOptions,
    success: (arg0: { url: string; token: string }) => void,
    error: any,
  ) {
    const method = 'GET'
    const prefix = options.prefix || this.PREFIX
    const marker = options.marker || ''
    const limit = options.limit || 20

    const requestToken = {
      method,
    }

    this.getUFileToken(
      requestToken,
      (token: string) => {
        const url =
          `${this.getBucketUrl()}?list` + `&prefix=${prefix}&marker=${marker}&limit=${limit}`
        success({
          url,
          token,
        })
      },
      error,
    )
  }

  // 查看文件信息
  getFileDetail(
    fileName: string,
    success: (arg0: { url: string; token: string }) => void,
    error: any,
  ) {
    const method = 'HEAD'
    const requestToken = {
      method,
      fileName,
    }

    this.getUFileToken(
      requestToken,
      (token: string) => {
        const url = this.getBucketUrl() + encodeURIComponent(fileName)
        success({
          url,
          token,
        })
      },
      error,
    )
  }

  // 普通上传
  uploadFile(
    options: PutFileOptions,
    success: (arg0: { url: string; token: string }) => void,
    error: any,
  ) {
    const method = 'PUT'
    const file = options.file || { name: '' }
    const fileRename = options.fileRename
    const fileName = this.addPrefix(this.getFileName(file, fileRename))

    const { putPolicy } = options

    const requestToken = {
      method,
      file,
      fileName,
      putPolicy,
    }

    this.getUFileToken(
      requestToken,
      (token: string) => {
        const url = this.getBucketUrl() + encodeURIComponent(file.name)
        success({
          url,
          token,
        })
      },
      error,
    )
  }

  // 下载文件
  downloadFile(
    fileName: string,
    success: (arg0: { url: string; token: string; expires: number }) => void,
    error: any,
  ) {
    const method = 'GET'
    const expires = parseInt(+new Date() / 1000 + '') + this.EXPIRES
    const requestToken = {
      method,
      fileName,
      date: expires,
    }

    this.getUFileToken(
      requestToken,
      (token: string) => {
        const url = this.getBucketUrl() + encodeURIComponent(fileName)
        success({
          url,
          token,
          expires,
        })
      },
      error,
    )
  }

  // 删除文件
  deleteFile(
    fileName: string,
    success: (arg0: { url: string; token: string }) => void,
    error: any,
  ) {
    const method = 'DELETE'
    const requestToken = {
      method,
      fileName,
    }

    this.getUFileToken(
      requestToken,
      (token: string) => {
        const url = this.getBucketUrl() + encodeURIComponent(fileName)
        success({
          url,
          token,
        })
      },
      error,
    )
  }
}

export default UCloudUFile
