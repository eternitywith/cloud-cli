import { GetFileSignUrl } from 'src/utils/file-storage-sign'
import { User } from 'src/grpc/compiled-protos/user'

/**
 * 该文件声明一些自定义的公共类型
 */

// example 带有签名地址的用户信息
type UserWithUrl = User & Record<'urls', GetFileSignUrl>
