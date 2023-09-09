/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios'
import UCloudUFile from './ufile-token'
import {
  S3_ACCESSKEY,
  S3_SECRETKEY,
  S3_PROJECTS_BUCKET,
  S3_SIGNED_EXPIRES,
  S3_BUCKET_URL,
} from '../../../config'

const ufile = new UCloudUFile(
  S3_PROJECTS_BUCKET,
  S3_BUCKET_URL,
  S3_ACCESSKEY,
  S3_SECRETKEY,
  S3_SIGNED_EXPIRES
)

const REGEXP_IMGFILE = /(\.bmp|\.png)$/i // 判断是否为支持转换的图像格式。

/**
 * @description UCloud创建Get操作临时签名
 * @param {string} project_id 工程id
 * @param {string} url
 */
export function UCloudCreateGetSignedUrl(project_id: string, key: string) {
  const fileName = `${project_id}/${key}`
  let url
  let preview: string
  return new Promise((resolve, reject) => {
    ufile.downloadFile(
      fileName,
      options => {
        const signature = options.token.split(':')[1]
        url = `${options.url}?UCloudPublicKey=${S3_ACCESSKEY}&Expires=${options.expires}&Signature=${signature}`
        // 如果为支持的图像格式，则使用 UCloud 图片转换服务转为 webp 格式。
        if (REGEXP_IMGFILE.test(fileName)) preview = `${url}&iopcmd=convert&dst=webp&Q=70`
        resolve({url, preview})
      },
      (error: any) => {
        reject(error)
      }
    )
  })
}

/**
 * @description UCloud创建Put操作临时签名，需要先判断对象存储中是否存在该文件，如果存在则只返回url不返回headers
 * @param {string} project_id 工程id
 * @param {string} key 文件的key
 * @param {string} mime_type 文件的mime_type
 * @param {string} md5 文件的md5
 * @return {promise} 包含url和headers
 */
export function UCloudCreatePutSignedUrl(
  project_id: string,
  key: string,
  mime_type: string,
  md5: string
) {
  const data = {
    file: {
      type: mime_type,
      md5,
      name: `${project_id}/${key}`,
    },
  }
  return new Promise((resolve, reject) => {
    ufile.uploadFile(
      data,
      options => {
        const {url, token} = options
        ufile.getFileDetail(
          data.file.name,
          opt => {
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
                resolve({url})
              })
              .catch(err => {
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
            throw new Error(error)
          }
        )
      },
      (error: any) => {
        throw new Error(error)
      }
    )
  })
}

/**
 * @description UCloud获取文件列表操作临时签名
 * @param {string} project_id 工程id
 * @param {number} limit 文件列表数目
 * @param {string} marker 标志字符串
 * @return {object} 包含url和headers
 */
export function UCloudGetListSignedUrl(project_id: string, limit: string, marker: string) {
  return new Promise((resolve, reject) => {
    ufile.getFileList(
      {
        prefix: project_id,
        limit,
        marker,
      },
      options => {
        resolve({
          url: options.url,
          headers: {
            Authorization: options.token,
          },
        })
      },
      (error: any) => {
        reject(error)
      }
    )
  })
}

/**
 * @description UCloud查询文件信息操作签名
 * @param {string} project_id 文件所在工程id
 * @param {string} key 文件的key
 * @return {object} 包含url和headers
 */
export function UCloudGetFileInfoSignedUrl(project_id: string, key: string) {
  const filename = `${project_id}/${key}`
  let url
  return new Promise((resolve, reject) => {
    ufile.getFileDetail(
      filename,
      options => {
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
      }
    )
  })
}
