/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

export interface Http {
  rules: HttpRule[];
}

export interface HttpRule {
  get?: string | undefined;
  put?: string | undefined;
  post?: string | undefined;
  delete?: string | undefined;
  patch?: string | undefined;
  custom?: CustomHttpPattern | undefined;
  selector: string;
  body: string;
  additional_bindings: HttpRule[];
}

export interface CustomHttpPattern {
  kind: string;
  path: string;
}

function createBaseHttp(): Http {
  return { rules: [] };
}

export const Http = {
  encode(message: Http, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      HttpRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Http {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Http {
    return { rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => HttpRule.fromJSON(e)) : [] };
  },

  toJSON(message: Http): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => HttpRule.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Http>): Http {
    return Http.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Http>): Http {
    const message = createBaseHttp();
    message.rules = object.rules?.map((e) => HttpRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHttpRule(): HttpRule {
  return {
    get: undefined,
    put: undefined,
    post: undefined,
    delete: undefined,
    patch: undefined,
    custom: undefined,
    selector: "",
    body: "",
    additional_bindings: [],
  };
}

export const HttpRule = {
  encode(message: HttpRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.get !== undefined) {
      writer.uint32(18).string(message.get);
    }
    if (message.put !== undefined) {
      writer.uint32(26).string(message.put);
    }
    if (message.post !== undefined) {
      writer.uint32(34).string(message.post);
    }
    if (message.delete !== undefined) {
      writer.uint32(42).string(message.delete);
    }
    if (message.patch !== undefined) {
      writer.uint32(50).string(message.patch);
    }
    if (message.custom !== undefined) {
      CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    for (const v of message.additional_bindings) {
      HttpRule.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.get = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.put = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.post = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.delete = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.patch = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.body = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.additional_bindings.push(HttpRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpRule {
    return {
      get: isSet(object.get) ? String(object.get) : undefined,
      put: isSet(object.put) ? String(object.put) : undefined,
      post: isSet(object.post) ? String(object.post) : undefined,
      delete: isSet(object.delete) ? String(object.delete) : undefined,
      patch: isSet(object.patch) ? String(object.patch) : undefined,
      custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
      selector: isSet(object.selector) ? String(object.selector) : "",
      body: isSet(object.body) ? String(object.body) : "",
      additional_bindings: Array.isArray(object?.additional_bindings)
        ? object.additional_bindings.map((e: any) => HttpRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HttpRule): unknown {
    const obj: any = {};
    if (message.get !== undefined) {
      obj.get = message.get;
    }
    if (message.put !== undefined) {
      obj.put = message.put;
    }
    if (message.post !== undefined) {
      obj.post = message.post;
    }
    if (message.delete !== undefined) {
      obj.delete = message.delete;
    }
    if (message.patch !== undefined) {
      obj.patch = message.patch;
    }
    if (message.custom !== undefined) {
      obj.custom = CustomHttpPattern.toJSON(message.custom);
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.additional_bindings?.length) {
      obj.additional_bindings = message.additional_bindings.map((e) => HttpRule.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<HttpRule>): HttpRule {
    return HttpRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HttpRule>): HttpRule {
    const message = createBaseHttpRule();
    message.get = object.get ?? undefined;
    message.put = object.put ?? undefined;
    message.post = object.post ?? undefined;
    message.delete = object.delete ?? undefined;
    message.patch = object.patch ?? undefined;
    message.custom = (object.custom !== undefined && object.custom !== null)
      ? CustomHttpPattern.fromPartial(object.custom)
      : undefined;
    message.selector = object.selector ?? "";
    message.body = object.body ?? "";
    message.additional_bindings = object.additional_bindings?.map((e) => HttpRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCustomHttpPattern(): CustomHttpPattern {
  return { kind: "", path: "" };
}

export const CustomHttpPattern = {
  encode(message: CustomHttpPattern, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomHttpPattern {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomHttpPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomHttpPattern {
    return { kind: isSet(object.kind) ? String(object.kind) : "", path: isSet(object.path) ? String(object.path) : "" };
  },

  toJSON(message: CustomHttpPattern): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create(base?: DeepPartial<CustomHttpPattern>): CustomHttpPattern {
    return CustomHttpPattern.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomHttpPattern>): CustomHttpPattern {
    const message = createBaseCustomHttpPattern();
    message.kind = object.kind ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
