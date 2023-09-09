/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios'
import AWS from 'aws-sdk'
import {
  S3_ACCESSKEY,
  S3_SECRETKEY,
  S3_PROJECTS_BUCKET,
  S3_SIGNED_EXPIRES,
  S3_ENDPOINT,
} from '../../../config'

AWS.config.update({region: 'default'})

const aws = new AWS.S3({
  apiVersion: '2006-03-01',
  endpoint: S3_ENDPOINT,
  accessKeyId: S3_ACCESSKEY,
  secretAccessKey: S3_SECRETKEY,
  sslEnabled: false,
  s3ForcePathStyle: true,
})

/**
 * @description AWS创建Get操作临时签名
 * @param {string} project_id 工程id
 * @param {string} url
 */
export function AWSCreateGetSignedUrl(project_id: string, key: string) {
  const url = aws.getSignedUrl('getObject', {
    Bucket: S3_PROJECTS_BUCKET,
    Key: `${project_id}/${key}`,
    Expires: S3_SIGNED_EXPIRES,
  })
  return {url}
}

/**
 * @description AWS创建Put操作临时签名，需要先判断对象存储中是否存在该文件，如果存在则只返回url不返回headers
 * @param {string} project_id 工程id
 * @param {string} key 文件的key
 * @param {string} mime_type 文件的mime_type
 * @param {string} md5 文件的md5
 * @return {promise} 包含url和headers
 */
export function AWSCreatePutSignedUrl(
  project_id: string,
  key: string,
  mime_type: string,
  md5: string
) {
  return new Promise((resolve, reject) => {
    const url = aws.getSignedUrl('putObject', {
      Bucket: S3_PROJECTS_BUCKET,
      Key: `${project_id}/${key}`,
      ContentMD5: md5,
      ContentType: mime_type,
      Expires: S3_SIGNED_EXPIRES,
    })
    const headUrl = aws.getSignedUrl('headObject', {
      Bucket: S3_PROJECTS_BUCKET,
      Key: `${project_id}/${key}`,
    })
    axios({
      method: 'HEAD',
      url: headUrl,
    })
      .then(() => {
        resolve({url})
      })
      .catch(err => {
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
  })
}

/**
 * @description AWS获取文件列表操作临时签名
 * @param {string} project_id 工程id
 * @param {number} limit 文件列表数目
 * @param {string} marker 标志字符串
 * @return {string} url
 */
export function AWSGetListSignedUrl(project_id: string, limit: string, marker: string) {
  const url = aws.getSignedUrl('listObjects', {
    Bucket: S3_PROJECTS_BUCKET,
    Expires: S3_SIGNED_EXPIRES,
    Prefix: project_id,
    Marker: marker,
    MaxKeys: limit,
  })
  return {url}
}

/**
 * @description AWS查询文件信息操作签名
 * @param {string} project_id 文件所在工程id
 * @param {string} key 文件的key
 * @return {string} url
 */
export function AWSGetFileInfoSignedUrl(project_id: string, key: string) {
  const url = aws.getSignedUrl('headObject', {
    Bucket: S3_PROJECTS_BUCKET,
    Key: `${project_id}/${key}`,
    Expires: S3_SIGNED_EXPIRES,
  })
  return {url}
}
