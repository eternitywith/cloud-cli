import axios from 'axios'
import { UCloudUFile } from './ufile/ufile-token'
import AWS from 'aws-sdk'
import {
  S3_STORAGE_TYPE,
  S3_ACCESSKEY,
  S3_SECRETKEY,
  S3_PROJECTS_BUCKET,
  S3_SIGNED_EXPIRES,
  S3_ENDPOINT,
} from '../../config'

type StorageType = 'ucloud' | 'ceph'

export type GetFileSignUrl = {
  url: string
  preview?: string
  thumbnail?: string
}

export type PutFileSignUrl = {
  url: string
  headers?: {
    Authorization?: string
    'Content-MD5': string
    'Content-Type': string
  }
}

export type ListFilesSignUrl = {
  url: string
  headers?: {
    Authorization: string
  }
}

export type GetFileInfoSignUrl = {
  url: string
  headers?: {
    Authorization: string
  }
}

export class FileSign {
  // 存储类型
  private TYPE: StorageType
  private STORAGE: AWS.S3 | UCloudUFile
  private ENDPOINT: string
  private ACCESSKEY: string
  private SECRETKEY: string
  private BUCKET: string
  private SIGNED_EXPIRES: number

  constructor(
    type: StorageType,
    endPoint: string,
    accessKey: string,
    secretKey: string,
    bucket: string,
    expiresIn: number,
  ) {
    this.ENDPOINT = endPoint
    this.ACCESSKEY = accessKey
    this.SECRETKEY = secretKey
    this.BUCKET = bucket
    this.SIGNED_EXPIRES = expiresIn

    this.TYPE = type
    switch (this.TYPE) {
      case 'ucloud': {
        const bucketUrl = `https://${this.BUCKET}.${this.ENDPOINT}/`
        this.STORAGE = new UCloudUFile(
          this.BUCKET,
          bucketUrl,
          this.ACCESSKEY,
          this.SECRETKEY,
          this.SIGNED_EXPIRES,
        )
        break
      }
      case 'ceph': {
        this.STORAGE = new AWS.S3({
          apiVersion: '2006-03-01',
          endpoint: this.ENDPOINT,
          accessKeyId: this.ACCESSKEY,
          secretAccessKey: this.SECRETKEY,
          sslEnabled: false,
          s3ForcePathStyle: true,
        })
        break
      }
    }
  }

  // 下载文件签名
  async getFileSignedUrl(key: string): Promise<GetFileSignUrl> {
    return new Promise((resolve, reject) => {
      switch (this.TYPE) {
        case 'ucloud': {
          const fileName = key
          let url
          let preview: string
          let thumbnail: string
          ;(this.STORAGE as UCloudUFile).downloadFile(
            fileName,
            (options) => {
              const signature = options.token.split(':')[1]
              url = `${options.url}?UCloudPublicKey=${this.ACCESSKEY}&Expires=${options.expires}&Signature=${signature}`
              // 如果为支持的图像格式，则使用 UCloud 图片转换服务转为 webp 格式。
              preview = `${url}&iopcmd=convert&dst=webp&Q=70`

              thumbnail = `${url}&iopcmd=thumbnail&type=6&width=100&height=74`
              resolve({ url, preview, thumbnail })
            },
            (error: any) => {
              reject(error)
            },
          )
          break
        }
        case 'ceph': {
          try {
            const url = (this.STORAGE as AWS.S3).getSignedUrl('getObject', {
              Bucket: this.BUCKET,
              Key: key,
              Expires: this.SIGNED_EXPIRES,
            })
            resolve({ url })
          } catch (error) {
            reject(error)
          }
        }
      }
    })
  }

  // put上传文件签名
  async putFileSignedUrl(key: string, mime_type: string, md5: string): Promise<PutFileSignUrl> {
    return new Promise((resolve, reject) => {
      switch (this.TYPE) {
        case 'ucloud': {
          const data = {
            file: {
              type: mime_type,
              md5,
              name: key,
            },
          }
          ;(this.STORAGE as UCloudUFile).uploadFile(
            data,
            (options) => {
              const { url, token } = options
              ;(this.STORAGE as UCloudUFile).getFileDetail(
                data.file.name,
                (opt) => {
                  const url1 = opt.url
                  const token1 = opt.token
                  axios({
                    method: 'HEAD',
                    url: url1,
                    headers: {
                      Authorization: token1,
                    },
                  })
                    .then(() => {
                      resolve({ url })
                    })
                    .catch((err) => {
                      if (err.response && err.response.status === 404) {
                        resolve({
                          url,
                          headers: {
                            Authorization: token,
                            'Content-MD5': md5,
                            'Content-Type': mime_type,
                          },
                        })
                      }
                      reject(err)
                    })
                },
                (error: any) => {
                  reject(error)
                },
              )
            },
            (error: any) => {
              reject(error)
            },
          )
          break
        }
        case 'ceph': {
          let url: string
          let headUrl
          try {
            url = (this.STORAGE as AWS.S3).getSignedUrl('putObject', {
              Bucket: this.BUCKET,
              Key: key,
              ContentMD5: md5,
              ContentType: mime_type,
              Expires: this.SIGNED_EXPIRES,
            })
            headUrl = (this.STORAGE as AWS.S3).getSignedUrl('headObject', {
              Bucket: this.BUCKET,
              Key: key,
            })
          } catch (error) {
            reject(error)
          }
          axios({
            method: 'HEAD',
            url: headUrl,
          })
            .then(() => {
              resolve({ url })
            })
            .catch((err) => {
              if (err.response && err.response.status === 404) {
                resolve({
                  url,
                  headers: {
                    'Content-MD5': md5,
                    'Content-Type': mime_type,
                  },
                })
              }
              reject(err)
            })
        }
      }
    })
  }

  // 获取文件列表签名
  listFileSignedUrl(project_id: string, limit: string, marker: string): Promise<ListFilesSignUrl> {
    return new Promise((resolve, reject) => {
      switch (this.TYPE) {
        case 'ucloud': {
          // return new Promise((resolve, reject) => {
          ;(this.STORAGE as UCloudUFile).getFileList(
            {
              prefix: project_id,
              limit,
              marker,
            },
            (options) => {
              resolve({
                url: options.url,
                headers: {
                  Authorization: options.token,
                },
              })
            },
            (error: any) => {
              reject(error)
            },
          )
          break
        }
        case 'ceph': {
          let url
          try {
            url = (this.STORAGE as AWS.S3).getSignedUrl('listObjects', {
              Bucket: this.BUCKET,
              Expires: this.SIGNED_EXPIRES,
              Prefix: project_id,
              Marker: marker,
              MaxKeys: limit,
            })
            resolve({ url })
          } catch (error) {
            reject(error)
          }
        }
      }
    })
  }

  // 获取文件信息签名
  async getFileInfoSignedUrl(project_id: string, key: string): Promise<GetFileInfoSignUrl> {
    return new Promise((resolve, reject) => {
      switch (this.TYPE) {
        case 'ucloud': {
          const filename = `${project_id}/${key}`
          let url
          ;(this.STORAGE as UCloudUFile).getFileDetail(
            filename,
            (options) => {
              url = {
                url: options.url,
                headers: {
                  Authorization: options.token,
                },
              }
              resolve(url)
            },
            (error: any) => {
              reject(error)
            },
          )
          break
        }
        case 'ceph': {
          let url
          try {
            url = (this.STORAGE as AWS.S3).getSignedUrl('headObject', {
              Bucket: this.BUCKET,
              Key: `${project_id}/${key}`,
              Expires: this.SIGNED_EXPIRES,
            })
            resolve({ url })
          } catch (error) {
            reject(error)
          }
        }
      }
    })
  }
}

export const sign = new FileSign(
  S3_STORAGE_TYPE,
  S3_ENDPOINT,
  S3_ACCESSKEY,
  S3_SECRETKEY,
  S3_PROJECTS_BUCKET,
  S3_SIGNED_EXPIRES,
)

export default sign
