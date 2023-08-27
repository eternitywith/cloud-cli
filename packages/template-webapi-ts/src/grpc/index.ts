import { createChannel, createClientFactory } from 'nice-grpc'
import { UserServiceClient, UserServiceDefinition } from './compiled-protos/user'
import { USER_SVC } from '../config'
import { logMiddleware } from './middleware/log'

// 用户服务
export const userClient: UserServiceClient = createClientFactory()
  .use(logMiddleware)
  .create(UserServiceDefinition, createChannel(USER_SVC))
