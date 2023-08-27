/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { FieldMask } from "./google/protobuf/field_mask";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "api";

/** 用户 */
export interface User {
  name: string;
  user_id: string;
  user_name: string;
  role: string;
  email: string;
  phone: string;
  team_ids: string[];
  nick_name: string;
  real_name: string;
  create_time: Date | undefined;
  update_time: Date | undefined;
  last_login_time: Date | undefined;
}

export interface CreateUserRequest {
  /** @inject_tag: validate:"required" */
  user:
    | User
    | undefined;
  /** @inject_tag: validate:"required" */
  password: string;
}

export interface DeleteUserRequest {
  /** @inject_tag: validate:"required" */
  name: string;
}

export interface UpdateUserRequest {
  /** @inject_tag: validate:"required" */
  user: User | undefined;
  update_mask: string[] | undefined;
}

export interface GetUserRequest {
  /** @inject_tag: validate:"required" */
  name: string;
}

export interface ListUsersRequest {
  /**
   * 用户过滤条件
   * required
   */
  filter: string;
  /**
   * 页面范围
   * gt=0 default=15
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  page_size: number;
  /**
   * 页码
   * gt=0 default=1
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  page_num: number;
  /**
   * 排序规则
   * example: order_by: "title desc, access" desc表示title降序 access升序
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  order_by: string;
}

export interface ListUsersResponse {
  /** 用户列表 */
  users: User[];
  /** 页码 */
  page_num: number;
  /** 页面范围 */
  page_size: number;
  /** 总数 */
  total_size: number;
}

export interface VerifyPasswordRequest {
  /** @inject_tag: validate:"required" */
  user_name: string;
  /** @inject_tag: validate:"required" */
  password: string;
}

export interface GenerateForgetTokenRequest {
  /** @inject_tag: validate:"required" */
  user_name: string;
}

export interface GenerateForgetTokenResponse {
  user: User | undefined;
  token: string;
}

export interface VerifyForgetTokenRequest {
  /** @inject_tag: validate:"required" */
  token: string;
}

export interface ResetPasswordRequest {
  /** @inject_tag: validate:"required" */
  reset_type: string;
  /** @inject_tag: validate:"required" */
  name: string;
  /** @inject_tag: validate:"required" */
  secret: string;
  /** @inject_tag: validate:"required" */
  new_password: string;
}

/** 用户的团队 */
export interface Team {
  name: string;
  team_id: string;
  title: string;
  description: string;
  user_ids: string[];
  create_time: Date | undefined;
  update_time: Date | undefined;
}

export interface DeleteTeamRequest {
  /** @inject_tag: validate:"required" */
  name: string;
}

export interface UpdateTeamRequest {
  /** @inject_tag: validate:"required" */
  team: Team | undefined;
  update_mask: string[] | undefined;
}

export interface GetTeamRequest {
  /** @inject_tag: validate:"required" */
  name: string;
}

export interface ListTeamsRequest {
  /**
   * 组过滤条件
   * required
   */
  filter: string;
  /**
   * 页面范围
   * gt=0 default=15
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  page_size: number;
  /**
   * 页码
   * gt=0 default=1
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  page_num: number;
  /**
   * 排序规则
   * example: order_by: "title desc, access" 表示title降序 access升序
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  order_by: string;
}

export interface ListTeamsResponse {
  /** 组列表 */
  teams: Team[];
  /** 页码 */
  page_num: number;
  /** 页面范围 */
  page_size: number;
  /** 总数 */
  total_size: number;
}

/** 用户列表和团队 */
export interface JoinTeamRequest {
  /** @inject_tag: validate:"required" */
  user_ids: string[];
  /** @inject_tag: validate:"required" */
  name: string;
}

/** 用户列表和团队 */
export interface QuitTeamRequest {
  /** @inject_tag: validate:"required" */
  user_ids: string[];
  /** @inject_tag: validate:"required" */
  name: string;
}

/** 用户补充信息 */
export interface UserExtraInfo {
  user_id: string;
  extra_info: string;
  create_time: Date | undefined;
  update_time: Date | undefined;
}

export interface UpdateUserExtraInfoRequest {
  /** @inject_tag: validate:"required" */
  user_extra_info: UserExtraInfo | undefined;
}

export interface GetUserExtraInfoRequest {
  /** @inject_tag: validate:"required" */
  user_id: string;
}

export interface GetUserExtraInfoRequestByParam {
  /** @inject_tag: validate:"required" */
  user_id: string;
  /** @inject_tag: validate:"required" */
  parameter: string;
}

export interface ListUserExtraInfoRequest {
  /** @inject_tag: validate:"required" */
  audit_status: number;
  /**
   * 页面范围
   * gt=0 default=15
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  page_size: number;
  /**
   * 页码
   * gt=0 default=1
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  page_num: number;
  /**
   * 排序规则
   * example: order_by: "title desc, access" 表示title降序 access升序
   * @inject_tag: validate:"omitempty,required,gt=0"
   */
  order_by: string;
}

export interface GetUserExtraInfoResponse {
  user_extra_info: UserExtraInfo | undefined;
}

export interface ListUserExtraInfoResponse {
  user_ids: string[];
  /** 页码 */
  page_num: number;
  /** 页面范围 */
  page_size: number;
  /** 总数 */
  total_size: number;
}

/** 用户标签 */
export interface Tag {
  name: string;
  tag_id: string;
  /** 标签创建人的 user_id */
  create_by: string;
  create_time: Date | undefined;
  update_time: Date | undefined;
}

export interface CreateTagRequest {
  /** @inject_tag: validate:"required" */
  tag: Tag | undefined;
}

export interface CreateTagResponse {
  tag: Tag | undefined;
}

export interface DeleteTagRequest {
  /** @inject_tag: validate:"required" */
  tag_id: string;
}

export interface UpdateTagRequest {
  /** @inject_tag: validate:"required" */
  tag: Tag | undefined;
}

export interface UpdateTagResponse {
  tag: Tag | undefined;
}

export interface GetTagRequest {
  tag_id: string;
  name: string;
}

export interface GetTagResponse {
  tag: Tag | undefined;
}

/** ListTagsRequest 所有属性均为预留字段 */
export interface ListTagsRequest {
  filter: string;
  /** @inject_tag: validate:"omitempty,gt=0" */
  page_size: number;
  /** @inject_tag: validate:"omitempty,gt=0" */
  page_num: number;
  /** @inject_tag: validate:"omitempty,gt=0" */
  order_by: string;
}

/** ListTagsResponse 分页相关属性为预留字段 */
export interface ListTagsResponse {
  tags: Tag[];
  page_num: number;
  page_size: number;
  total_size: number;
}

export interface CreateUserTagRequest {
  /** @inject_tag: validate:"required" */
  user_id: string;
  /** @inject_tag: validate:"required" */
  tag_id: string;
}

export interface CreateUserTagResponse {
  user_id: string;
  tags: Tag[];
}

export interface DeleteUserTagRequest {
  /** @inject_tag: validate:"required" */
  user_id: string;
  /** @inject_tag: validate:"required" */
  tag_id: string;
}

export interface GetUserTagsRequest {
  /** @inject_tag: validate:"required" */
  user_id: string;
}

export interface GetUserTagsResponse {
  user_id: string;
  tags: Tag[];
}

export interface ListUserByTagRequest {
  /** @inject_tag: validate:"required" */
  tag_id: string;
  /** @inject_tag: validate:"required" */
  in_tag: boolean;
  filter: string;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  page_size: number;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  page_num: number;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  order_by: string;
}

export interface ListUserByTagResponse {
  users: User[];
  page_num: number;
  page_size: number;
  total_size: number;
}

export interface ListExtraInfoByAuditStatusRequest {
  /** @inject_tag: validate:"required" */
  audit_status: number;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  page_size: number;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  page_num: number;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  order_by: string;
}

export interface ListExtraInfoByAuditStatusResponse {
  user_extra_info: UserExtraInfo[];
  page_num: number;
  page_size: number;
  total_size: number;
}

export interface ListUserByAuditStatusAndTagRequest {
  /** @inject_tag: validate:"required" */
  audit_status: number;
  /** @inject_tag: validate:"required" */
  tag_id: string;
  /** @inject_tag: validate:"required" */
  in_tag: boolean;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  page_size: number;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  page_num: number;
  /** @inject_tag: validate:"omitempty,required,gt=0" */
  order_by: string;
}

export interface ListUserByAuditStatusAndTagResponse {
  users: UserExtraInfo[];
  page_num: number;
  page_size: number;
  total_size: number;
}

function createBaseUser(): User {
  return {
    name: "",
    user_id: "",
    user_name: "",
    role: "",
    email: "",
    phone: "",
    team_ids: [],
    nick_name: "",
    real_name: "",
    create_time: undefined,
    update_time: undefined,
    last_login_time: undefined,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.user_id !== "") {
      writer.uint32(18).string(message.user_id);
    }
    if (message.user_name !== "") {
      writer.uint32(26).string(message.user_name);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(50).string(message.phone);
    }
    for (const v of message.team_ids) {
      writer.uint32(58).string(v!);
    }
    if (message.nick_name !== "") {
      writer.uint32(66).string(message.nick_name);
    }
    if (message.real_name !== "") {
      writer.uint32(74).string(message.real_name);
    }
    if (message.create_time !== undefined) {
      Timestamp.encode(toTimestamp(message.create_time), writer.uint32(82).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(toTimestamp(message.update_time), writer.uint32(90).fork()).ldelim();
    }
    if (message.last_login_time !== undefined) {
      Timestamp.encode(toTimestamp(message.last_login_time), writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user_name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.role = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.team_ids.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nick_name = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.real_name = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.create_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.last_login_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      user_name: isSet(object.user_name) ? String(object.user_name) : "",
      role: isSet(object.role) ? String(object.role) : "",
      email: isSet(object.email) ? String(object.email) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      team_ids: Array.isArray(object?.team_ids) ? object.team_ids.map((e: any) => String(e)) : [],
      nick_name: isSet(object.nick_name) ? String(object.nick_name) : "",
      real_name: isSet(object.real_name) ? String(object.real_name) : "",
      create_time: isSet(object.create_time) ? fromJsonTimestamp(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined,
      last_login_time: isSet(object.last_login_time) ? fromJsonTimestamp(object.last_login_time) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    if (message.user_name !== "") {
      obj.user_name = message.user_name;
    }
    if (message.role !== "") {
      obj.role = message.role;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.team_ids?.length) {
      obj.team_ids = message.team_ids;
    }
    if (message.nick_name !== "") {
      obj.nick_name = message.nick_name;
    }
    if (message.real_name !== "") {
      obj.real_name = message.real_name;
    }
    if (message.create_time !== undefined) {
      obj.create_time = message.create_time.toISOString();
    }
    if (message.update_time !== undefined) {
      obj.update_time = message.update_time.toISOString();
    }
    if (message.last_login_time !== undefined) {
      obj.last_login_time = message.last_login_time.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.name = object.name ?? "";
    message.user_id = object.user_id ?? "";
    message.user_name = object.user_name ?? "";
    message.role = object.role ?? "";
    message.email = object.email ?? "";
    message.phone = object.phone ?? "";
    message.team_ids = object.team_ids?.map((e) => e) || [];
    message.nick_name = object.nick_name ?? "";
    message.real_name = object.real_name ?? "";
    message.create_time = object.create_time ?? undefined;
    message.update_time = object.update_time ?? undefined;
    message.last_login_time = object.last_login_time ?? undefined;
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return { user: undefined, password: "" };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateUserRequest>): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { name: "" };
}

export const DeleteUserRequest = {
  encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
    return DeleteUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return { user: undefined, update_mask: undefined };
}

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.update_mask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.update_mask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update_mask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.unwrap(FieldMask.fromJSON(object.update_mask)) : undefined,
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.update_mask !== undefined) {
      obj.update_mask = FieldMask.toJSON(FieldMask.wrap(message.update_mask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.update_mask = object.update_mask ?? undefined;
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { name: "" };
}

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserRequest>): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListUsersRequest(): ListUsersRequest {
  return { filter: "", page_size: 0, page_num: 0, order_by: "" };
}

export const ListUsersRequest = {
  encode(message: ListUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.page_size !== 0) {
      writer.uint32(16).int32(message.page_size);
    }
    if (message.page_num !== 0) {
      writer.uint32(24).int32(message.page_num);
    }
    if (message.order_by !== "") {
      writer.uint32(34).string(message.order_by);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.order_by = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUsersRequest {
    return {
      filter: isSet(object.filter) ? String(object.filter) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      order_by: isSet(object.order_by) ? String(object.order_by) : "",
    };
  },

  toJSON(message: ListUsersRequest): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.order_by !== "") {
      obj.order_by = message.order_by;
    }
    return obj;
  },

  create(base?: DeepPartial<ListUsersRequest>): ListUsersRequest {
    return ListUsersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUsersRequest>): ListUsersRequest {
    const message = createBaseListUsersRequest();
    message.filter = object.filter ?? "";
    message.page_size = object.page_size ?? 0;
    message.page_num = object.page_num ?? 0;
    message.order_by = object.order_by ?? "";
    return message;
  },
};

function createBaseListUsersResponse(): ListUsersResponse {
  return { users: [], page_num: 0, page_size: 0, total_size: 0 };
}

export const ListUsersResponse = {
  encode(message: ListUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page_num !== 0) {
      writer.uint32(16).int32(message.page_num);
    }
    if (message.page_size !== 0) {
      writer.uint32(24).int32(message.page_size);
    }
    if (message.total_size !== 0) {
      writer.uint32(32).int32(message.total_size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_size = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUsersResponse {
    return {
      users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      total_size: isSet(object.total_size) ? Number(object.total_size) : 0,
    };
  },

  toJSON(message: ListUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.total_size !== 0) {
      obj.total_size = Math.round(message.total_size);
    }
    return obj;
  },

  create(base?: DeepPartial<ListUsersResponse>): ListUsersResponse {
    return ListUsersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse {
    const message = createBaseListUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.page_num = object.page_num ?? 0;
    message.page_size = object.page_size ?? 0;
    message.total_size = object.total_size ?? 0;
    return message;
  },
};

function createBaseVerifyPasswordRequest(): VerifyPasswordRequest {
  return { user_name: "", password: "" };
}

export const VerifyPasswordRequest = {
  encode(message: VerifyPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_name !== "") {
      writer.uint32(10).string(message.user_name);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPasswordRequest {
    return {
      user_name: isSet(object.user_name) ? String(object.user_name) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: VerifyPasswordRequest): unknown {
    const obj: any = {};
    if (message.user_name !== "") {
      obj.user_name = message.user_name;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyPasswordRequest>): VerifyPasswordRequest {
    return VerifyPasswordRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyPasswordRequest>): VerifyPasswordRequest {
    const message = createBaseVerifyPasswordRequest();
    message.user_name = object.user_name ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseGenerateForgetTokenRequest(): GenerateForgetTokenRequest {
  return { user_name: "" };
}

export const GenerateForgetTokenRequest = {
  encode(message: GenerateForgetTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_name !== "") {
      writer.uint32(10).string(message.user_name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateForgetTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateForgetTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateForgetTokenRequest {
    return { user_name: isSet(object.user_name) ? String(object.user_name) : "" };
  },

  toJSON(message: GenerateForgetTokenRequest): unknown {
    const obj: any = {};
    if (message.user_name !== "") {
      obj.user_name = message.user_name;
    }
    return obj;
  },

  create(base?: DeepPartial<GenerateForgetTokenRequest>): GenerateForgetTokenRequest {
    return GenerateForgetTokenRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenerateForgetTokenRequest>): GenerateForgetTokenRequest {
    const message = createBaseGenerateForgetTokenRequest();
    message.user_name = object.user_name ?? "";
    return message;
  },
};

function createBaseGenerateForgetTokenResponse(): GenerateForgetTokenResponse {
  return { user: undefined, token: "" };
}

export const GenerateForgetTokenResponse = {
  encode(message: GenerateForgetTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateForgetTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateForgetTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateForgetTokenResponse {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: GenerateForgetTokenResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create(base?: DeepPartial<GenerateForgetTokenResponse>): GenerateForgetTokenResponse {
    return GenerateForgetTokenResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenerateForgetTokenResponse>): GenerateForgetTokenResponse {
    const message = createBaseGenerateForgetTokenResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseVerifyForgetTokenRequest(): VerifyForgetTokenRequest {
  return { token: "" };
}

export const VerifyForgetTokenRequest = {
  encode(message: VerifyForgetTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyForgetTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyForgetTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyForgetTokenRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: VerifyForgetTokenRequest): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyForgetTokenRequest>): VerifyForgetTokenRequest {
    return VerifyForgetTokenRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyForgetTokenRequest>): VerifyForgetTokenRequest {
    const message = createBaseVerifyForgetTokenRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseResetPasswordRequest(): ResetPasswordRequest {
  return { reset_type: "", name: "", secret: "", new_password: "" };
}

export const ResetPasswordRequest = {
  encode(message: ResetPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reset_type !== "") {
      writer.uint32(10).string(message.reset_type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.secret !== "") {
      writer.uint32(26).string(message.secret);
    }
    if (message.new_password !== "") {
      writer.uint32(34).string(message.new_password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reset_type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secret = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.new_password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResetPasswordRequest {
    return {
      reset_type: isSet(object.reset_type) ? String(object.reset_type) : "",
      name: isSet(object.name) ? String(object.name) : "",
      secret: isSet(object.secret) ? String(object.secret) : "",
      new_password: isSet(object.new_password) ? String(object.new_password) : "",
    };
  },

  toJSON(message: ResetPasswordRequest): unknown {
    const obj: any = {};
    if (message.reset_type !== "") {
      obj.reset_type = message.reset_type;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.secret !== "") {
      obj.secret = message.secret;
    }
    if (message.new_password !== "") {
      obj.new_password = message.new_password;
    }
    return obj;
  },

  create(base?: DeepPartial<ResetPasswordRequest>): ResetPasswordRequest {
    return ResetPasswordRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResetPasswordRequest>): ResetPasswordRequest {
    const message = createBaseResetPasswordRequest();
    message.reset_type = object.reset_type ?? "";
    message.name = object.name ?? "";
    message.secret = object.secret ?? "";
    message.new_password = object.new_password ?? "";
    return message;
  },
};

function createBaseTeam(): Team {
  return {
    name: "",
    team_id: "",
    title: "",
    description: "",
    user_ids: [],
    create_time: undefined,
    update_time: undefined,
  };
}

export const Team = {
  encode(message: Team, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.team_id !== "") {
      writer.uint32(18).string(message.team_id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.user_ids) {
      writer.uint32(42).string(v!);
    }
    if (message.create_time !== undefined) {
      Timestamp.encode(toTimestamp(message.create_time), writer.uint32(50).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(toTimestamp(message.update_time), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Team {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.team_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.user_ids.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.create_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Team {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      team_id: isSet(object.team_id) ? String(object.team_id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      user_ids: Array.isArray(object?.user_ids) ? object.user_ids.map((e: any) => String(e)) : [],
      create_time: isSet(object.create_time) ? fromJsonTimestamp(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined,
    };
  },

  toJSON(message: Team): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.team_id !== "") {
      obj.team_id = message.team_id;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.user_ids?.length) {
      obj.user_ids = message.user_ids;
    }
    if (message.create_time !== undefined) {
      obj.create_time = message.create_time.toISOString();
    }
    if (message.update_time !== undefined) {
      obj.update_time = message.update_time.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Team>): Team {
    return Team.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Team>): Team {
    const message = createBaseTeam();
    message.name = object.name ?? "";
    message.team_id = object.team_id ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.user_ids = object.user_ids?.map((e) => e) || [];
    message.create_time = object.create_time ?? undefined;
    message.update_time = object.update_time ?? undefined;
    return message;
  },
};

function createBaseDeleteTeamRequest(): DeleteTeamRequest {
  return { name: "" };
}

export const DeleteTeamRequest = {
  encode(message: DeleteTeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTeamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTeamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTeamRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: DeleteTeamRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteTeamRequest>): DeleteTeamRequest {
    return DeleteTeamRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteTeamRequest>): DeleteTeamRequest {
    const message = createBaseDeleteTeamRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUpdateTeamRequest(): UpdateTeamRequest {
  return { team: undefined, update_mask: undefined };
}

export const UpdateTeamRequest = {
  encode(message: UpdateTeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.team !== undefined) {
      Team.encode(message.team, writer.uint32(10).fork()).ldelim();
    }
    if (message.update_mask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.update_mask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTeamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTeamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.team = Team.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update_mask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTeamRequest {
    return {
      team: isSet(object.team) ? Team.fromJSON(object.team) : undefined,
      update_mask: isSet(object.update_mask) ? FieldMask.unwrap(FieldMask.fromJSON(object.update_mask)) : undefined,
    };
  },

  toJSON(message: UpdateTeamRequest): unknown {
    const obj: any = {};
    if (message.team !== undefined) {
      obj.team = Team.toJSON(message.team);
    }
    if (message.update_mask !== undefined) {
      obj.update_mask = FieldMask.toJSON(FieldMask.wrap(message.update_mask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTeamRequest>): UpdateTeamRequest {
    return UpdateTeamRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateTeamRequest>): UpdateTeamRequest {
    const message = createBaseUpdateTeamRequest();
    message.team = (object.team !== undefined && object.team !== null) ? Team.fromPartial(object.team) : undefined;
    message.update_mask = object.update_mask ?? undefined;
    return message;
  },
};

function createBaseGetTeamRequest(): GetTeamRequest {
  return { name: "" };
}

export const GetTeamRequest = {
  encode(message: GetTeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTeamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTeamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTeamRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: GetTeamRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetTeamRequest>): GetTeamRequest {
    return GetTeamRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTeamRequest>): GetTeamRequest {
    const message = createBaseGetTeamRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListTeamsRequest(): ListTeamsRequest {
  return { filter: "", page_size: 0, page_num: 0, order_by: "" };
}

export const ListTeamsRequest = {
  encode(message: ListTeamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.page_size !== 0) {
      writer.uint32(16).int32(message.page_size);
    }
    if (message.page_num !== 0) {
      writer.uint32(24).int32(message.page_num);
    }
    if (message.order_by !== "") {
      writer.uint32(34).string(message.order_by);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTeamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTeamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.order_by = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTeamsRequest {
    return {
      filter: isSet(object.filter) ? String(object.filter) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      order_by: isSet(object.order_by) ? String(object.order_by) : "",
    };
  },

  toJSON(message: ListTeamsRequest): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.order_by !== "") {
      obj.order_by = message.order_by;
    }
    return obj;
  },

  create(base?: DeepPartial<ListTeamsRequest>): ListTeamsRequest {
    return ListTeamsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTeamsRequest>): ListTeamsRequest {
    const message = createBaseListTeamsRequest();
    message.filter = object.filter ?? "";
    message.page_size = object.page_size ?? 0;
    message.page_num = object.page_num ?? 0;
    message.order_by = object.order_by ?? "";
    return message;
  },
};

function createBaseListTeamsResponse(): ListTeamsResponse {
  return { teams: [], page_num: 0, page_size: 0, total_size: 0 };
}

export const ListTeamsResponse = {
  encode(message: ListTeamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.teams) {
      Team.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page_num !== 0) {
      writer.uint32(16).int32(message.page_num);
    }
    if (message.page_size !== 0) {
      writer.uint32(24).int32(message.page_size);
    }
    if (message.total_size !== 0) {
      writer.uint32(32).int32(message.total_size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTeamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTeamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.teams.push(Team.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_size = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTeamsResponse {
    return {
      teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => Team.fromJSON(e)) : [],
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      total_size: isSet(object.total_size) ? Number(object.total_size) : 0,
    };
  },

  toJSON(message: ListTeamsResponse): unknown {
    const obj: any = {};
    if (message.teams?.length) {
      obj.teams = message.teams.map((e) => Team.toJSON(e));
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.total_size !== 0) {
      obj.total_size = Math.round(message.total_size);
    }
    return obj;
  },

  create(base?: DeepPartial<ListTeamsResponse>): ListTeamsResponse {
    return ListTeamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTeamsResponse>): ListTeamsResponse {
    const message = createBaseListTeamsResponse();
    message.teams = object.teams?.map((e) => Team.fromPartial(e)) || [];
    message.page_num = object.page_num ?? 0;
    message.page_size = object.page_size ?? 0;
    message.total_size = object.total_size ?? 0;
    return message;
  },
};

function createBaseJoinTeamRequest(): JoinTeamRequest {
  return { user_ids: [], name: "" };
}

export const JoinTeamRequest = {
  encode(message: JoinTeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.user_ids) {
      writer.uint32(10).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JoinTeamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinTeamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JoinTeamRequest {
    return {
      user_ids: Array.isArray(object?.user_ids) ? object.user_ids.map((e: any) => String(e)) : [],
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: JoinTeamRequest): unknown {
    const obj: any = {};
    if (message.user_ids?.length) {
      obj.user_ids = message.user_ids;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<JoinTeamRequest>): JoinTeamRequest {
    return JoinTeamRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<JoinTeamRequest>): JoinTeamRequest {
    const message = createBaseJoinTeamRequest();
    message.user_ids = object.user_ids?.map((e) => e) || [];
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQuitTeamRequest(): QuitTeamRequest {
  return { user_ids: [], name: "" };
}

export const QuitTeamRequest = {
  encode(message: QuitTeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.user_ids) {
      writer.uint32(10).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuitTeamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuitTeamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuitTeamRequest {
    return {
      user_ids: Array.isArray(object?.user_ids) ? object.user_ids.map((e: any) => String(e)) : [],
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QuitTeamRequest): unknown {
    const obj: any = {};
    if (message.user_ids?.length) {
      obj.user_ids = message.user_ids;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<QuitTeamRequest>): QuitTeamRequest {
    return QuitTeamRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuitTeamRequest>): QuitTeamRequest {
    const message = createBaseQuitTeamRequest();
    message.user_ids = object.user_ids?.map((e) => e) || [];
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUserExtraInfo(): UserExtraInfo {
  return { user_id: "", extra_info: "", create_time: undefined, update_time: undefined };
}

export const UserExtraInfo = {
  encode(message: UserExtraInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    if (message.extra_info !== "") {
      writer.uint32(18).string(message.extra_info);
    }
    if (message.create_time !== undefined) {
      Timestamp.encode(toTimestamp(message.create_time), writer.uint32(26).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(toTimestamp(message.update_time), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserExtraInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserExtraInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extra_info = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.create_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserExtraInfo {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      extra_info: isSet(object.extra_info) ? String(object.extra_info) : "",
      create_time: isSet(object.create_time) ? fromJsonTimestamp(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined,
    };
  },

  toJSON(message: UserExtraInfo): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    if (message.extra_info !== "") {
      obj.extra_info = message.extra_info;
    }
    if (message.create_time !== undefined) {
      obj.create_time = message.create_time.toISOString();
    }
    if (message.update_time !== undefined) {
      obj.update_time = message.update_time.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<UserExtraInfo>): UserExtraInfo {
    return UserExtraInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserExtraInfo>): UserExtraInfo {
    const message = createBaseUserExtraInfo();
    message.user_id = object.user_id ?? "";
    message.extra_info = object.extra_info ?? "";
    message.create_time = object.create_time ?? undefined;
    message.update_time = object.update_time ?? undefined;
    return message;
  },
};

function createBaseUpdateUserExtraInfoRequest(): UpdateUserExtraInfoRequest {
  return { user_extra_info: undefined };
}

export const UpdateUserExtraInfoRequest = {
  encode(message: UpdateUserExtraInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_extra_info !== undefined) {
      UserExtraInfo.encode(message.user_extra_info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserExtraInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserExtraInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_extra_info = UserExtraInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserExtraInfoRequest {
    return {
      user_extra_info: isSet(object.user_extra_info) ? UserExtraInfo.fromJSON(object.user_extra_info) : undefined,
    };
  },

  toJSON(message: UpdateUserExtraInfoRequest): unknown {
    const obj: any = {};
    if (message.user_extra_info !== undefined) {
      obj.user_extra_info = UserExtraInfo.toJSON(message.user_extra_info);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateUserExtraInfoRequest>): UpdateUserExtraInfoRequest {
    return UpdateUserExtraInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateUserExtraInfoRequest>): UpdateUserExtraInfoRequest {
    const message = createBaseUpdateUserExtraInfoRequest();
    message.user_extra_info = (object.user_extra_info !== undefined && object.user_extra_info !== null)
      ? UserExtraInfo.fromPartial(object.user_extra_info)
      : undefined;
    return message;
  },
};

function createBaseGetUserExtraInfoRequest(): GetUserExtraInfoRequest {
  return { user_id: "" };
}

export const GetUserExtraInfoRequest = {
  encode(message: GetUserExtraInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserExtraInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserExtraInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserExtraInfoRequest {
    return { user_id: isSet(object.user_id) ? String(object.user_id) : "" };
  },

  toJSON(message: GetUserExtraInfoRequest): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserExtraInfoRequest>): GetUserExtraInfoRequest {
    return GetUserExtraInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserExtraInfoRequest>): GetUserExtraInfoRequest {
    const message = createBaseGetUserExtraInfoRequest();
    message.user_id = object.user_id ?? "";
    return message;
  },
};

function createBaseGetUserExtraInfoRequestByParam(): GetUserExtraInfoRequestByParam {
  return { user_id: "", parameter: "" };
}

export const GetUserExtraInfoRequestByParam = {
  encode(message: GetUserExtraInfoRequestByParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    if (message.parameter !== "") {
      writer.uint32(18).string(message.parameter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserExtraInfoRequestByParam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserExtraInfoRequestByParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parameter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserExtraInfoRequestByParam {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      parameter: isSet(object.parameter) ? String(object.parameter) : "",
    };
  },

  toJSON(message: GetUserExtraInfoRequestByParam): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    if (message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserExtraInfoRequestByParam>): GetUserExtraInfoRequestByParam {
    return GetUserExtraInfoRequestByParam.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserExtraInfoRequestByParam>): GetUserExtraInfoRequestByParam {
    const message = createBaseGetUserExtraInfoRequestByParam();
    message.user_id = object.user_id ?? "";
    message.parameter = object.parameter ?? "";
    return message;
  },
};

function createBaseListUserExtraInfoRequest(): ListUserExtraInfoRequest {
  return { audit_status: 0, page_size: 0, page_num: 0, order_by: "" };
}

export const ListUserExtraInfoRequest = {
  encode(message: ListUserExtraInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audit_status !== 0) {
      writer.uint32(8).int32(message.audit_status);
    }
    if (message.page_size !== 0) {
      writer.uint32(16).int32(message.page_size);
    }
    if (message.page_num !== 0) {
      writer.uint32(24).int32(message.page_num);
    }
    if (message.order_by !== "") {
      writer.uint32(34).string(message.order_by);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserExtraInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserExtraInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.audit_status = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.order_by = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserExtraInfoRequest {
    return {
      audit_status: isSet(object.audit_status) ? Number(object.audit_status) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      order_by: isSet(object.order_by) ? String(object.order_by) : "",
    };
  },

  toJSON(message: ListUserExtraInfoRequest): unknown {
    const obj: any = {};
    if (message.audit_status !== 0) {
      obj.audit_status = Math.round(message.audit_status);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.order_by !== "") {
      obj.order_by = message.order_by;
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserExtraInfoRequest>): ListUserExtraInfoRequest {
    return ListUserExtraInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserExtraInfoRequest>): ListUserExtraInfoRequest {
    const message = createBaseListUserExtraInfoRequest();
    message.audit_status = object.audit_status ?? 0;
    message.page_size = object.page_size ?? 0;
    message.page_num = object.page_num ?? 0;
    message.order_by = object.order_by ?? "";
    return message;
  },
};

function createBaseGetUserExtraInfoResponse(): GetUserExtraInfoResponse {
  return { user_extra_info: undefined };
}

export const GetUserExtraInfoResponse = {
  encode(message: GetUserExtraInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_extra_info !== undefined) {
      UserExtraInfo.encode(message.user_extra_info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserExtraInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserExtraInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_extra_info = UserExtraInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserExtraInfoResponse {
    return {
      user_extra_info: isSet(object.user_extra_info) ? UserExtraInfo.fromJSON(object.user_extra_info) : undefined,
    };
  },

  toJSON(message: GetUserExtraInfoResponse): unknown {
    const obj: any = {};
    if (message.user_extra_info !== undefined) {
      obj.user_extra_info = UserExtraInfo.toJSON(message.user_extra_info);
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserExtraInfoResponse>): GetUserExtraInfoResponse {
    return GetUserExtraInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserExtraInfoResponse>): GetUserExtraInfoResponse {
    const message = createBaseGetUserExtraInfoResponse();
    message.user_extra_info = (object.user_extra_info !== undefined && object.user_extra_info !== null)
      ? UserExtraInfo.fromPartial(object.user_extra_info)
      : undefined;
    return message;
  },
};

function createBaseListUserExtraInfoResponse(): ListUserExtraInfoResponse {
  return { user_ids: [], page_num: 0, page_size: 0, total_size: 0 };
}

export const ListUserExtraInfoResponse = {
  encode(message: ListUserExtraInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.user_ids) {
      writer.uint32(10).string(v!);
    }
    if (message.page_num !== 0) {
      writer.uint32(16).int32(message.page_num);
    }
    if (message.page_size !== 0) {
      writer.uint32(24).int32(message.page_size);
    }
    if (message.total_size !== 0) {
      writer.uint32(32).int32(message.total_size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserExtraInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserExtraInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_size = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserExtraInfoResponse {
    return {
      user_ids: Array.isArray(object?.user_ids) ? object.user_ids.map((e: any) => String(e)) : [],
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      total_size: isSet(object.total_size) ? Number(object.total_size) : 0,
    };
  },

  toJSON(message: ListUserExtraInfoResponse): unknown {
    const obj: any = {};
    if (message.user_ids?.length) {
      obj.user_ids = message.user_ids;
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.total_size !== 0) {
      obj.total_size = Math.round(message.total_size);
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserExtraInfoResponse>): ListUserExtraInfoResponse {
    return ListUserExtraInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserExtraInfoResponse>): ListUserExtraInfoResponse {
    const message = createBaseListUserExtraInfoResponse();
    message.user_ids = object.user_ids?.map((e) => e) || [];
    message.page_num = object.page_num ?? 0;
    message.page_size = object.page_size ?? 0;
    message.total_size = object.total_size ?? 0;
    return message;
  },
};

function createBaseTag(): Tag {
  return { name: "", tag_id: "", create_by: "", create_time: undefined, update_time: undefined };
}

export const Tag = {
  encode(message: Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tag_id !== "") {
      writer.uint32(18).string(message.tag_id);
    }
    if (message.create_by !== "") {
      writer.uint32(26).string(message.create_by);
    }
    if (message.create_time !== undefined) {
      Timestamp.encode(toTimestamp(message.create_time), writer.uint32(34).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(toTimestamp(message.update_time), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.create_by = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.create_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tag {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      tag_id: isSet(object.tag_id) ? String(object.tag_id) : "",
      create_by: isSet(object.create_by) ? String(object.create_by) : "",
      create_time: isSet(object.create_time) ? fromJsonTimestamp(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined,
    };
  },

  toJSON(message: Tag): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tag_id !== "") {
      obj.tag_id = message.tag_id;
    }
    if (message.create_by !== "") {
      obj.create_by = message.create_by;
    }
    if (message.create_time !== undefined) {
      obj.create_time = message.create_time.toISOString();
    }
    if (message.update_time !== undefined) {
      obj.update_time = message.update_time.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Tag>): Tag {
    return Tag.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Tag>): Tag {
    const message = createBaseTag();
    message.name = object.name ?? "";
    message.tag_id = object.tag_id ?? "";
    message.create_by = object.create_by ?? "";
    message.create_time = object.create_time ?? undefined;
    message.update_time = object.update_time ?? undefined;
    return message;
  },
};

function createBaseCreateTagRequest(): CreateTagRequest {
  return { tag: undefined };
}

export const CreateTagRequest = {
  encode(message: CreateTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag = Tag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTagRequest {
    return { tag: isSet(object.tag) ? Tag.fromJSON(object.tag) : undefined };
  },

  toJSON(message: CreateTagRequest): unknown {
    const obj: any = {};
    if (message.tag !== undefined) {
      obj.tag = Tag.toJSON(message.tag);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateTagRequest>): CreateTagRequest {
    return CreateTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateTagRequest>): CreateTagRequest {
    const message = createBaseCreateTagRequest();
    message.tag = (object.tag !== undefined && object.tag !== null) ? Tag.fromPartial(object.tag) : undefined;
    return message;
  },
};

function createBaseCreateTagResponse(): CreateTagResponse {
  return { tag: undefined };
}

export const CreateTagResponse = {
  encode(message: CreateTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag = Tag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTagResponse {
    return { tag: isSet(object.tag) ? Tag.fromJSON(object.tag) : undefined };
  },

  toJSON(message: CreateTagResponse): unknown {
    const obj: any = {};
    if (message.tag !== undefined) {
      obj.tag = Tag.toJSON(message.tag);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateTagResponse>): CreateTagResponse {
    return CreateTagResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateTagResponse>): CreateTagResponse {
    const message = createBaseCreateTagResponse();
    message.tag = (object.tag !== undefined && object.tag !== null) ? Tag.fromPartial(object.tag) : undefined;
    return message;
  },
};

function createBaseDeleteTagRequest(): DeleteTagRequest {
  return { tag_id: "" };
}

export const DeleteTagRequest = {
  encode(message: DeleteTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag_id !== "") {
      writer.uint32(10).string(message.tag_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteTagRequest {
    return { tag_id: isSet(object.tag_id) ? String(object.tag_id) : "" };
  },

  toJSON(message: DeleteTagRequest): unknown {
    const obj: any = {};
    if (message.tag_id !== "") {
      obj.tag_id = message.tag_id;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteTagRequest>): DeleteTagRequest {
    return DeleteTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteTagRequest>): DeleteTagRequest {
    const message = createBaseDeleteTagRequest();
    message.tag_id = object.tag_id ?? "";
    return message;
  },
};

function createBaseUpdateTagRequest(): UpdateTagRequest {
  return { tag: undefined };
}

export const UpdateTagRequest = {
  encode(message: UpdateTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag = Tag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTagRequest {
    return { tag: isSet(object.tag) ? Tag.fromJSON(object.tag) : undefined };
  },

  toJSON(message: UpdateTagRequest): unknown {
    const obj: any = {};
    if (message.tag !== undefined) {
      obj.tag = Tag.toJSON(message.tag);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTagRequest>): UpdateTagRequest {
    return UpdateTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateTagRequest>): UpdateTagRequest {
    const message = createBaseUpdateTagRequest();
    message.tag = (object.tag !== undefined && object.tag !== null) ? Tag.fromPartial(object.tag) : undefined;
    return message;
  },
};

function createBaseUpdateTagResponse(): UpdateTagResponse {
  return { tag: undefined };
}

export const UpdateTagResponse = {
  encode(message: UpdateTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag = Tag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTagResponse {
    return { tag: isSet(object.tag) ? Tag.fromJSON(object.tag) : undefined };
  },

  toJSON(message: UpdateTagResponse): unknown {
    const obj: any = {};
    if (message.tag !== undefined) {
      obj.tag = Tag.toJSON(message.tag);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateTagResponse>): UpdateTagResponse {
    return UpdateTagResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateTagResponse>): UpdateTagResponse {
    const message = createBaseUpdateTagResponse();
    message.tag = (object.tag !== undefined && object.tag !== null) ? Tag.fromPartial(object.tag) : undefined;
    return message;
  },
};

function createBaseGetTagRequest(): GetTagRequest {
  return { tag_id: "", name: "" };
}

export const GetTagRequest = {
  encode(message: GetTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag_id !== "") {
      writer.uint32(10).string(message.tag_id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTagRequest {
    return {
      tag_id: isSet(object.tag_id) ? String(object.tag_id) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: GetTagRequest): unknown {
    const obj: any = {};
    if (message.tag_id !== "") {
      obj.tag_id = message.tag_id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetTagRequest>): GetTagRequest {
    return GetTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTagRequest>): GetTagRequest {
    const message = createBaseGetTagRequest();
    message.tag_id = object.tag_id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetTagResponse(): GetTagResponse {
  return { tag: undefined };
}

export const GetTagResponse = {
  encode(message: GetTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== undefined) {
      Tag.encode(message.tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag = Tag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTagResponse {
    return { tag: isSet(object.tag) ? Tag.fromJSON(object.tag) : undefined };
  },

  toJSON(message: GetTagResponse): unknown {
    const obj: any = {};
    if (message.tag !== undefined) {
      obj.tag = Tag.toJSON(message.tag);
    }
    return obj;
  },

  create(base?: DeepPartial<GetTagResponse>): GetTagResponse {
    return GetTagResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTagResponse>): GetTagResponse {
    const message = createBaseGetTagResponse();
    message.tag = (object.tag !== undefined && object.tag !== null) ? Tag.fromPartial(object.tag) : undefined;
    return message;
  },
};

function createBaseListTagsRequest(): ListTagsRequest {
  return { filter: "", page_size: 0, page_num: 0, order_by: "" };
}

export const ListTagsRequest = {
  encode(message: ListTagsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.page_size !== 0) {
      writer.uint32(16).int32(message.page_size);
    }
    if (message.page_num !== 0) {
      writer.uint32(24).int32(message.page_num);
    }
    if (message.order_by !== "") {
      writer.uint32(34).string(message.order_by);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTagsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.order_by = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTagsRequest {
    return {
      filter: isSet(object.filter) ? String(object.filter) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      order_by: isSet(object.order_by) ? String(object.order_by) : "",
    };
  },

  toJSON(message: ListTagsRequest): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.order_by !== "") {
      obj.order_by = message.order_by;
    }
    return obj;
  },

  create(base?: DeepPartial<ListTagsRequest>): ListTagsRequest {
    return ListTagsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTagsRequest>): ListTagsRequest {
    const message = createBaseListTagsRequest();
    message.filter = object.filter ?? "";
    message.page_size = object.page_size ?? 0;
    message.page_num = object.page_num ?? 0;
    message.order_by = object.order_by ?? "";
    return message;
  },
};

function createBaseListTagsResponse(): ListTagsResponse {
  return { tags: [], page_num: 0, page_size: 0, total_size: 0 };
}

export const ListTagsResponse = {
  encode(message: ListTagsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page_num !== 0) {
      writer.uint32(16).int32(message.page_num);
    }
    if (message.page_size !== 0) {
      writer.uint32(24).int32(message.page_size);
    }
    if (message.total_size !== 0) {
      writer.uint32(32).int32(message.total_size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTagsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tags.push(Tag.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_size = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTagsResponse {
    return {
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tag.fromJSON(e)) : [],
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      total_size: isSet(object.total_size) ? Number(object.total_size) : 0,
    };
  },

  toJSON(message: ListTagsResponse): unknown {
    const obj: any = {};
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Tag.toJSON(e));
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.total_size !== 0) {
      obj.total_size = Math.round(message.total_size);
    }
    return obj;
  },

  create(base?: DeepPartial<ListTagsResponse>): ListTagsResponse {
    return ListTagsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListTagsResponse>): ListTagsResponse {
    const message = createBaseListTagsResponse();
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    message.page_num = object.page_num ?? 0;
    message.page_size = object.page_size ?? 0;
    message.total_size = object.total_size ?? 0;
    return message;
  },
};

function createBaseCreateUserTagRequest(): CreateUserTagRequest {
  return { user_id: "", tag_id: "" };
}

export const CreateUserTagRequest = {
  encode(message: CreateUserTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    if (message.tag_id !== "") {
      writer.uint32(18).string(message.tag_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserTagRequest {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      tag_id: isSet(object.tag_id) ? String(object.tag_id) : "",
    };
  },

  toJSON(message: CreateUserTagRequest): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    if (message.tag_id !== "") {
      obj.tag_id = message.tag_id;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateUserTagRequest>): CreateUserTagRequest {
    return CreateUserTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateUserTagRequest>): CreateUserTagRequest {
    const message = createBaseCreateUserTagRequest();
    message.user_id = object.user_id ?? "";
    message.tag_id = object.tag_id ?? "";
    return message;
  },
};

function createBaseCreateUserTagResponse(): CreateUserTagResponse {
  return { user_id: "", tags: [] };
}

export const CreateUserTagResponse = {
  encode(message: CreateUserTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tags.push(Tag.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserTagResponse {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tag.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreateUserTagResponse): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Tag.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<CreateUserTagResponse>): CreateUserTagResponse {
    return CreateUserTagResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateUserTagResponse>): CreateUserTagResponse {
    const message = createBaseCreateUserTagResponse();
    message.user_id = object.user_id ?? "";
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteUserTagRequest(): DeleteUserTagRequest {
  return { user_id: "", tag_id: "" };
}

export const DeleteUserTagRequest = {
  encode(message: DeleteUserTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    if (message.tag_id !== "") {
      writer.uint32(18).string(message.tag_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserTagRequest {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      tag_id: isSet(object.tag_id) ? String(object.tag_id) : "",
    };
  },

  toJSON(message: DeleteUserTagRequest): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    if (message.tag_id !== "") {
      obj.tag_id = message.tag_id;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteUserTagRequest>): DeleteUserTagRequest {
    return DeleteUserTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteUserTagRequest>): DeleteUserTagRequest {
    const message = createBaseDeleteUserTagRequest();
    message.user_id = object.user_id ?? "";
    message.tag_id = object.tag_id ?? "";
    return message;
  },
};

function createBaseGetUserTagsRequest(): GetUserTagsRequest {
  return { user_id: "" };
}

export const GetUserTagsRequest = {
  encode(message: GetUserTagsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTagsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserTagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserTagsRequest {
    return { user_id: isSet(object.user_id) ? String(object.user_id) : "" };
  },

  toJSON(message: GetUserTagsRequest): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserTagsRequest>): GetUserTagsRequest {
    return GetUserTagsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserTagsRequest>): GetUserTagsRequest {
    const message = createBaseGetUserTagsRequest();
    message.user_id = object.user_id ?? "";
    return message;
  },
};

function createBaseGetUserTagsResponse(): GetUserTagsResponse {
  return { user_id: "", tags: [] };
}

export const GetUserTagsResponse = {
  encode(message: GetUserTagsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_id !== "") {
      writer.uint32(10).string(message.user_id);
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTagsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserTagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tags.push(Tag.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserTagsResponse {
    return {
      user_id: isSet(object.user_id) ? String(object.user_id) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tag.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetUserTagsResponse): unknown {
    const obj: any = {};
    if (message.user_id !== "") {
      obj.user_id = message.user_id;
    }
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Tag.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserTagsResponse>): GetUserTagsResponse {
    return GetUserTagsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserTagsResponse>): GetUserTagsResponse {
    const message = createBaseGetUserTagsResponse();
    message.user_id = object.user_id ?? "";
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListUserByTagRequest(): ListUserByTagRequest {
  return { tag_id: "", in_tag: false, filter: "", page_size: 0, page_num: 0, order_by: "" };
}

export const ListUserByTagRequest = {
  encode(message: ListUserByTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag_id !== "") {
      writer.uint32(10).string(message.tag_id);
    }
    if (message.in_tag === true) {
      writer.uint32(16).bool(message.in_tag);
    }
    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }
    if (message.page_size !== 0) {
      writer.uint32(32).int32(message.page_size);
    }
    if (message.page_num !== 0) {
      writer.uint32(40).int32(message.page_num);
    }
    if (message.order_by !== "") {
      writer.uint32(50).string(message.order_by);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserByTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserByTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tag_id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.in_tag = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.order_by = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserByTagRequest {
    return {
      tag_id: isSet(object.tag_id) ? String(object.tag_id) : "",
      in_tag: isSet(object.in_tag) ? Boolean(object.in_tag) : false,
      filter: isSet(object.filter) ? String(object.filter) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      order_by: isSet(object.order_by) ? String(object.order_by) : "",
    };
  },

  toJSON(message: ListUserByTagRequest): unknown {
    const obj: any = {};
    if (message.tag_id !== "") {
      obj.tag_id = message.tag_id;
    }
    if (message.in_tag === true) {
      obj.in_tag = message.in_tag;
    }
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.order_by !== "") {
      obj.order_by = message.order_by;
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserByTagRequest>): ListUserByTagRequest {
    return ListUserByTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserByTagRequest>): ListUserByTagRequest {
    const message = createBaseListUserByTagRequest();
    message.tag_id = object.tag_id ?? "";
    message.in_tag = object.in_tag ?? false;
    message.filter = object.filter ?? "";
    message.page_size = object.page_size ?? 0;
    message.page_num = object.page_num ?? 0;
    message.order_by = object.order_by ?? "";
    return message;
  },
};

function createBaseListUserByTagResponse(): ListUserByTagResponse {
  return { users: [], page_num: 0, page_size: 0, total_size: 0 };
}

export const ListUserByTagResponse = {
  encode(message: ListUserByTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page_num !== 0) {
      writer.uint32(16).int32(message.page_num);
    }
    if (message.page_size !== 0) {
      writer.uint32(24).int32(message.page_size);
    }
    if (message.total_size !== 0) {
      writer.uint32(32).int32(message.total_size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserByTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserByTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_size = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserByTagResponse {
    return {
      users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      total_size: isSet(object.total_size) ? Number(object.total_size) : 0,
    };
  },

  toJSON(message: ListUserByTagResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.total_size !== 0) {
      obj.total_size = Math.round(message.total_size);
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserByTagResponse>): ListUserByTagResponse {
    return ListUserByTagResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserByTagResponse>): ListUserByTagResponse {
    const message = createBaseListUserByTagResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.page_num = object.page_num ?? 0;
    message.page_size = object.page_size ?? 0;
    message.total_size = object.total_size ?? 0;
    return message;
  },
};

function createBaseListExtraInfoByAuditStatusRequest(): ListExtraInfoByAuditStatusRequest {
  return { audit_status: 0, page_size: 0, page_num: 0, order_by: "" };
}

export const ListExtraInfoByAuditStatusRequest = {
  encode(message: ListExtraInfoByAuditStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audit_status !== 0) {
      writer.uint32(8).int32(message.audit_status);
    }
    if (message.page_size !== 0) {
      writer.uint32(16).int32(message.page_size);
    }
    if (message.page_num !== 0) {
      writer.uint32(24).int32(message.page_num);
    }
    if (message.order_by !== "") {
      writer.uint32(34).string(message.order_by);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExtraInfoByAuditStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExtraInfoByAuditStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.audit_status = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.order_by = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListExtraInfoByAuditStatusRequest {
    return {
      audit_status: isSet(object.audit_status) ? Number(object.audit_status) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      order_by: isSet(object.order_by) ? String(object.order_by) : "",
    };
  },

  toJSON(message: ListExtraInfoByAuditStatusRequest): unknown {
    const obj: any = {};
    if (message.audit_status !== 0) {
      obj.audit_status = Math.round(message.audit_status);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.order_by !== "") {
      obj.order_by = message.order_by;
    }
    return obj;
  },

  create(base?: DeepPartial<ListExtraInfoByAuditStatusRequest>): ListExtraInfoByAuditStatusRequest {
    return ListExtraInfoByAuditStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListExtraInfoByAuditStatusRequest>): ListExtraInfoByAuditStatusRequest {
    const message = createBaseListExtraInfoByAuditStatusRequest();
    message.audit_status = object.audit_status ?? 0;
    message.page_size = object.page_size ?? 0;
    message.page_num = object.page_num ?? 0;
    message.order_by = object.order_by ?? "";
    return message;
  },
};

function createBaseListExtraInfoByAuditStatusResponse(): ListExtraInfoByAuditStatusResponse {
  return { user_extra_info: [], page_num: 0, page_size: 0, total_size: 0 };
}

export const ListExtraInfoByAuditStatusResponse = {
  encode(message: ListExtraInfoByAuditStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.user_extra_info) {
      UserExtraInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page_num !== 0) {
      writer.uint32(16).int32(message.page_num);
    }
    if (message.page_size !== 0) {
      writer.uint32(24).int32(message.page_size);
    }
    if (message.total_size !== 0) {
      writer.uint32(32).int32(message.total_size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExtraInfoByAuditStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExtraInfoByAuditStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user_extra_info.push(UserExtraInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_size = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListExtraInfoByAuditStatusResponse {
    return {
      user_extra_info: Array.isArray(object?.user_extra_info)
        ? object.user_extra_info.map((e: any) => UserExtraInfo.fromJSON(e))
        : [],
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      total_size: isSet(object.total_size) ? Number(object.total_size) : 0,
    };
  },

  toJSON(message: ListExtraInfoByAuditStatusResponse): unknown {
    const obj: any = {};
    if (message.user_extra_info?.length) {
      obj.user_extra_info = message.user_extra_info.map((e) => UserExtraInfo.toJSON(e));
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.total_size !== 0) {
      obj.total_size = Math.round(message.total_size);
    }
    return obj;
  },

  create(base?: DeepPartial<ListExtraInfoByAuditStatusResponse>): ListExtraInfoByAuditStatusResponse {
    return ListExtraInfoByAuditStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListExtraInfoByAuditStatusResponse>): ListExtraInfoByAuditStatusResponse {
    const message = createBaseListExtraInfoByAuditStatusResponse();
    message.user_extra_info = object.user_extra_info?.map((e) => UserExtraInfo.fromPartial(e)) || [];
    message.page_num = object.page_num ?? 0;
    message.page_size = object.page_size ?? 0;
    message.total_size = object.total_size ?? 0;
    return message;
  },
};

function createBaseListUserByAuditStatusAndTagRequest(): ListUserByAuditStatusAndTagRequest {
  return { audit_status: 0, tag_id: "", in_tag: false, page_size: 0, page_num: 0, order_by: "" };
}

export const ListUserByAuditStatusAndTagRequest = {
  encode(message: ListUserByAuditStatusAndTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audit_status !== 0) {
      writer.uint32(8).int32(message.audit_status);
    }
    if (message.tag_id !== "") {
      writer.uint32(18).string(message.tag_id);
    }
    if (message.in_tag === true) {
      writer.uint32(24).bool(message.in_tag);
    }
    if (message.page_size !== 0) {
      writer.uint32(32).int32(message.page_size);
    }
    if (message.page_num !== 0) {
      writer.uint32(40).int32(message.page_num);
    }
    if (message.order_by !== "") {
      writer.uint32(50).string(message.order_by);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserByAuditStatusAndTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserByAuditStatusAndTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.audit_status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tag_id = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.in_tag = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.order_by = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserByAuditStatusAndTagRequest {
    return {
      audit_status: isSet(object.audit_status) ? Number(object.audit_status) : 0,
      tag_id: isSet(object.tag_id) ? String(object.tag_id) : "",
      in_tag: isSet(object.in_tag) ? Boolean(object.in_tag) : false,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      order_by: isSet(object.order_by) ? String(object.order_by) : "",
    };
  },

  toJSON(message: ListUserByAuditStatusAndTagRequest): unknown {
    const obj: any = {};
    if (message.audit_status !== 0) {
      obj.audit_status = Math.round(message.audit_status);
    }
    if (message.tag_id !== "") {
      obj.tag_id = message.tag_id;
    }
    if (message.in_tag === true) {
      obj.in_tag = message.in_tag;
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.order_by !== "") {
      obj.order_by = message.order_by;
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserByAuditStatusAndTagRequest>): ListUserByAuditStatusAndTagRequest {
    return ListUserByAuditStatusAndTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserByAuditStatusAndTagRequest>): ListUserByAuditStatusAndTagRequest {
    const message = createBaseListUserByAuditStatusAndTagRequest();
    message.audit_status = object.audit_status ?? 0;
    message.tag_id = object.tag_id ?? "";
    message.in_tag = object.in_tag ?? false;
    message.page_size = object.page_size ?? 0;
    message.page_num = object.page_num ?? 0;
    message.order_by = object.order_by ?? "";
    return message;
  },
};

function createBaseListUserByAuditStatusAndTagResponse(): ListUserByAuditStatusAndTagResponse {
  return { users: [], page_num: 0, page_size: 0, total_size: 0 };
}

export const ListUserByAuditStatusAndTagResponse = {
  encode(message: ListUserByAuditStatusAndTagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      UserExtraInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.page_num !== 0) {
      writer.uint32(16).int32(message.page_num);
    }
    if (message.page_size !== 0) {
      writer.uint32(24).int32(message.page_size);
    }
    if (message.total_size !== 0) {
      writer.uint32(32).int32(message.total_size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserByAuditStatusAndTagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserByAuditStatusAndTagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(UserExtraInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_num = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_size = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserByAuditStatusAndTagResponse {
    return {
      users: Array.isArray(object?.users) ? object.users.map((e: any) => UserExtraInfo.fromJSON(e)) : [],
      page_num: isSet(object.page_num) ? Number(object.page_num) : 0,
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      total_size: isSet(object.total_size) ? Number(object.total_size) : 0,
    };
  },

  toJSON(message: ListUserByAuditStatusAndTagResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => UserExtraInfo.toJSON(e));
    }
    if (message.page_num !== 0) {
      obj.page_num = Math.round(message.page_num);
    }
    if (message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.total_size !== 0) {
      obj.total_size = Math.round(message.total_size);
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserByAuditStatusAndTagResponse>): ListUserByAuditStatusAndTagResponse {
    return ListUserByAuditStatusAndTagResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserByAuditStatusAndTagResponse>): ListUserByAuditStatusAndTagResponse {
    const message = createBaseListUserByAuditStatusAndTagResponse();
    message.users = object.users?.map((e) => UserExtraInfo.fromPartial(e)) || [];
    message.page_num = object.page_num ?? 0;
    message.page_size = object.page_size ?? 0;
    message.total_size = object.total_size ?? 0;
    return message;
  },
};

export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "api.UserService",
  methods: {
    listUsers: {
      name: "ListUsers",
      requestType: ListUsersRequest,
      requestStream: false,
      responseType: ListUsersResponse,
      responseStream: false,
      options: { _unknownFields: { 578365826: [new Uint8Array([8, 18, 6, 47, 117, 115, 101, 114, 115])] } },
    },
    createUser: {
      name: "CreateUser",
      requestType: CreateUserRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: { _unknownFields: { 578365826: [new Uint8Array([11, 34, 6, 47, 117, 115, 101, 114, 115, 58, 1, 42])] } },
    },
    getUser: {
      name: "GetUser",
      requestType: GetUserRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([17, 18, 15, 47, 123, 110, 97, 109, 101, 61, 117, 115, 101, 114, 115, 47, 42, 125]),
          ],
        },
      },
    },
    updateUser: {
      name: "UpdateUser",
      requestType: UpdateUserRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              25,
              50,
              20,
              47,
              123,
              117,
              115,
              101,
              114,
              46,
              110,
              97,
              109,
              101,
              61,
              117,
              115,
              101,
              114,
              115,
              47,
              42,
              125,
              58,
              1,
              42,
            ]),
          ],
        },
      },
    },
    deleteUser: {
      name: "DeleteUser",
      requestType: DeleteUserRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([17, 42, 15, 47, 123, 110, 97, 109, 101, 61, 117, 115, 101, 114, 115, 47, 42, 125]),
          ],
        },
      },
    },
    verifyPassword: {
      name: "VerifyPassword",
      requestType: VerifyPasswordRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    generateForgetToken: {
      name: "GenerateForgetToken",
      requestType: GenerateForgetTokenRequest,
      requestStream: false,
      responseType: GenerateForgetTokenResponse,
      responseStream: false,
      options: {},
    },
    verifyForgetToken: {
      name: "VerifyForgetToken",
      requestType: VerifyForgetTokenRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    resetPassword: {
      name: "ResetPassword",
      requestType: ResetPasswordRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    listTeams: {
      name: "ListTeams",
      requestType: ListTeamsRequest,
      requestStream: false,
      responseType: ListTeamsResponse,
      responseStream: false,
      options: { _unknownFields: { 578365826: [new Uint8Array([8, 18, 6, 47, 116, 101, 97, 109, 115])] } },
    },
    createTeam: {
      name: "CreateTeam",
      requestType: Team,
      requestStream: false,
      responseType: Team,
      responseStream: false,
      options: { _unknownFields: { 578365826: [new Uint8Array([11, 34, 6, 47, 116, 101, 97, 109, 115, 58, 1, 42])] } },
    },
    getTeam: {
      name: "GetTeam",
      requestType: GetTeamRequest,
      requestStream: false,
      responseType: Team,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([17, 18, 15, 47, 123, 110, 97, 109, 101, 61, 116, 101, 97, 109, 115, 47, 42, 125]),
          ],
        },
      },
    },
    updateTeam: {
      name: "UpdateTeam",
      requestType: UpdateTeamRequest,
      requestStream: false,
      responseType: Team,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              25,
              50,
              20,
              47,
              123,
              116,
              101,
              97,
              109,
              46,
              110,
              97,
              109,
              101,
              61,
              116,
              101,
              97,
              109,
              115,
              47,
              42,
              125,
              58,
              1,
              42,
            ]),
          ],
        },
      },
    },
    deleteTeam: {
      name: "DeleteTeam",
      requestType: DeleteTeamRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([17, 42, 15, 47, 123, 110, 97, 109, 101, 61, 116, 101, 97, 109, 115, 47, 42, 125]),
          ],
        },
      },
    },
    joinTeam: {
      name: "JoinTeam",
      requestType: JoinTeamRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              25,
              34,
              20,
              47,
              106,
              111,
              105,
              110,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              116,
              101,
              97,
              109,
              115,
              47,
              42,
              125,
              58,
              1,
              42,
            ]),
          ],
        },
      },
    },
    quitTeam: {
      name: "QuitTeam",
      requestType: QuitTeamRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              25,
              34,
              20,
              47,
              113,
              117,
              105,
              116,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              116,
              101,
              97,
              109,
              115,
              47,
              42,
              125,
              58,
              1,
              42,
            ]),
          ],
        },
      },
    },
    /**
     * ========== Separator ==========
     * 用户补充信息相关接口
     */
    updateUserExtraInfo: {
      name: "UpdateUserExtraInfo",
      requestType: UpdateUserExtraInfoRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    getUserExtraInfo: {
      name: "GetUserExtraInfo",
      requestType: GetUserExtraInfoRequest,
      requestStream: false,
      responseType: GetUserExtraInfoResponse,
      responseStream: false,
      options: {},
    },
    getUserExtraInfoByParam: {
      name: "GetUserExtraInfoByParam",
      requestType: GetUserExtraInfoRequestByParam,
      requestStream: false,
      responseType: GetUserExtraInfoResponse,
      responseStream: false,
      options: {},
    },
    /** ListUserExtraInfo 获取用户身份的旧接口, v2304版本之后建议使用新接口 ListExtraInfoByAuditStatus */
    listUserExtraInfo: {
      name: "ListUserExtraInfo",
      requestType: ListUserExtraInfoRequest,
      requestStream: false,
      responseType: ListUserExtraInfoResponse,
      responseStream: false,
      options: {},
    },
    /**
     * ========== Separator ==========
     * 标签表的CRUD接口
     */
    createTag: {
      name: "CreateTag",
      requestType: CreateTagRequest,
      requestStream: false,
      responseType: CreateTagResponse,
      responseStream: false,
      options: {},
    },
    updateTag: {
      name: "UpdateTag",
      requestType: UpdateTagRequest,
      requestStream: false,
      responseType: UpdateTagResponse,
      responseStream: false,
      options: {},
    },
    deleteTag: {
      name: "DeleteTag",
      requestType: DeleteTagRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    getTag: {
      name: "GetTag",
      requestType: GetTagRequest,
      requestStream: false,
      responseType: GetTagResponse,
      responseStream: false,
      options: {},
    },
    listTags: {
      name: "ListTags",
      requestType: ListTagsRequest,
      requestStream: false,
      responseType: ListTagsResponse,
      responseStream: false,
      options: {},
    },
    /** 用户标签的CRUD接口 */
    createUserTag: {
      name: "CreateUserTag",
      requestType: CreateUserTagRequest,
      requestStream: false,
      responseType: CreateUserTagResponse,
      responseStream: false,
      options: {},
    },
    deleteUserTag: {
      name: "DeleteUserTag",
      requestType: DeleteUserTagRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    getUserTags: {
      name: "GetUserTags",
      requestType: GetUserTagsRequest,
      requestStream: false,
      responseType: GetUserTagsResponse,
      responseStream: false,
      options: {},
    },
    /** ListUserByTag 通过标签筛选用户 */
    listUserByTag: {
      name: "ListUserByTag",
      requestType: ListUserByTagRequest,
      requestStream: false,
      responseType: ListUserByTagResponse,
      responseStream: false,
      options: {},
    },
    /** ListUserByaAuditStatus 通过审核状态筛选用户 */
    listExtraInfoByAuditStatus: {
      name: "ListExtraInfoByAuditStatus",
      requestType: ListExtraInfoByAuditStatusRequest,
      requestStream: false,
      responseType: ListExtraInfoByAuditStatusResponse,
      responseStream: false,
      options: {},
    },
    /** ListUserByaAuditStatus 通过审核状态和用户标签筛选用户 */
    listUserByAuditStatusAndTag: {
      name: "ListUserByAuditStatusAndTag",
      requestType: ListUserByAuditStatusAndTagRequest,
      requestStream: false,
      responseType: ListUserByAuditStatusAndTagResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  listUsers(request: ListUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUsersResponse>>;
  createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  getUser(request: GetUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  updateUser(request: UpdateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  verifyPassword(request: VerifyPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  generateForgetToken(
    request: GenerateForgetTokenRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GenerateForgetTokenResponse>>;
  verifyForgetToken(
    request: VerifyForgetTokenRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<User>>;
  resetPassword(request: ResetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  listTeams(request: ListTeamsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListTeamsResponse>>;
  createTeam(request: Team, context: CallContext & CallContextExt): Promise<DeepPartial<Team>>;
  getTeam(request: GetTeamRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Team>>;
  updateTeam(request: UpdateTeamRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Team>>;
  deleteTeam(request: DeleteTeamRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  joinTeam(request: JoinTeamRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  quitTeam(request: QuitTeamRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  /**
   * ========== Separator ==========
   * 用户补充信息相关接口
   */
  updateUserExtraInfo(
    request: UpdateUserExtraInfoRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  getUserExtraInfo(
    request: GetUserExtraInfoRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserExtraInfoResponse>>;
  getUserExtraInfoByParam(
    request: GetUserExtraInfoRequestByParam,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserExtraInfoResponse>>;
  /** ListUserExtraInfo 获取用户身份的旧接口, v2304版本之后建议使用新接口 ListExtraInfoByAuditStatus */
  listUserExtraInfo(
    request: ListUserExtraInfoRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListUserExtraInfoResponse>>;
  /**
   * ========== Separator ==========
   * 标签表的CRUD接口
   */
  createTag(request: CreateTagRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateTagResponse>>;
  updateTag(request: UpdateTagRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateTagResponse>>;
  deleteTag(request: DeleteTagRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  getTag(request: GetTagRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetTagResponse>>;
  listTags(request: ListTagsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListTagsResponse>>;
  /** 用户标签的CRUD接口 */
  createUserTag(
    request: CreateUserTagRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateUserTagResponse>>;
  deleteUserTag(request: DeleteUserTagRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  getUserTags(
    request: GetUserTagsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserTagsResponse>>;
  /** ListUserByTag 通过标签筛选用户 */
  listUserByTag(
    request: ListUserByTagRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListUserByTagResponse>>;
  /** ListUserByaAuditStatus 通过审核状态筛选用户 */
  listExtraInfoByAuditStatus(
    request: ListExtraInfoByAuditStatusRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListExtraInfoByAuditStatusResponse>>;
  /** ListUserByaAuditStatus 通过审核状态和用户标签筛选用户 */
  listUserByAuditStatusAndTag(
    request: ListUserByAuditStatusAndTagRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListUserByAuditStatusAndTagResponse>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  listUsers(request: DeepPartial<ListUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUsersResponse>;
  createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<User>;
  getUser(request: DeepPartial<GetUserRequest>, options?: CallOptions & CallOptionsExt): Promise<User>;
  updateUser(request: DeepPartial<UpdateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<User>;
  deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  verifyPassword(request: DeepPartial<VerifyPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<User>;
  generateForgetToken(
    request: DeepPartial<GenerateForgetTokenRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GenerateForgetTokenResponse>;
  verifyForgetToken(
    request: DeepPartial<VerifyForgetTokenRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<User>;
  resetPassword(request: DeepPartial<ResetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  listTeams(request: DeepPartial<ListTeamsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListTeamsResponse>;
  createTeam(request: DeepPartial<Team>, options?: CallOptions & CallOptionsExt): Promise<Team>;
  getTeam(request: DeepPartial<GetTeamRequest>, options?: CallOptions & CallOptionsExt): Promise<Team>;
  updateTeam(request: DeepPartial<UpdateTeamRequest>, options?: CallOptions & CallOptionsExt): Promise<Team>;
  deleteTeam(request: DeepPartial<DeleteTeamRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  joinTeam(request: DeepPartial<JoinTeamRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  quitTeam(request: DeepPartial<QuitTeamRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  /**
   * ========== Separator ==========
   * 用户补充信息相关接口
   */
  updateUserExtraInfo(
    request: DeepPartial<UpdateUserExtraInfoRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  getUserExtraInfo(
    request: DeepPartial<GetUserExtraInfoRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserExtraInfoResponse>;
  getUserExtraInfoByParam(
    request: DeepPartial<GetUserExtraInfoRequestByParam>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserExtraInfoResponse>;
  /** ListUserExtraInfo 获取用户身份的旧接口, v2304版本之后建议使用新接口 ListExtraInfoByAuditStatus */
  listUserExtraInfo(
    request: DeepPartial<ListUserExtraInfoRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListUserExtraInfoResponse>;
  /**
   * ========== Separator ==========
   * 标签表的CRUD接口
   */
  createTag(request: DeepPartial<CreateTagRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateTagResponse>;
  updateTag(request: DeepPartial<UpdateTagRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateTagResponse>;
  deleteTag(request: DeepPartial<DeleteTagRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  getTag(request: DeepPartial<GetTagRequest>, options?: CallOptions & CallOptionsExt): Promise<GetTagResponse>;
  listTags(request: DeepPartial<ListTagsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListTagsResponse>;
  /** 用户标签的CRUD接口 */
  createUserTag(
    request: DeepPartial<CreateUserTagRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateUserTagResponse>;
  deleteUserTag(request: DeepPartial<DeleteUserTagRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  getUserTags(
    request: DeepPartial<GetUserTagsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserTagsResponse>;
  /** ListUserByTag 通过标签筛选用户 */
  listUserByTag(
    request: DeepPartial<ListUserByTagRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListUserByTagResponse>;
  /** ListUserByaAuditStatus 通过审核状态筛选用户 */
  listExtraInfoByAuditStatus(
    request: DeepPartial<ListExtraInfoByAuditStatusRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListExtraInfoByAuditStatusResponse>;
  /** ListUserByaAuditStatus 通过审核状态和用户标签筛选用户 */
  listUserByAuditStatusAndTag(
    request: DeepPartial<ListUserByAuditStatusAndTagRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListUserByAuditStatusAndTagResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
