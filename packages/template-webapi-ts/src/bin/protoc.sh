#！/bin/bash

# 通过protos目录生成类型并放入types目录下（只生成ts类型相关，不生成其他内容）
# 默认编译protos目录下的所有proto文件
# 如果需要指定编译一个文件，只需传入对应的proto名称，如：project.proto
# devDependencies:
#   - ts-proto
#   - grpc-tools

pwd=`pwd`

# config
PROTOC_GEN_TS_PATH="${pwd}/node_modules/.bin/protoc-gen-ts_proto"
GRPC_TOOLS_NODE_PROTOC="${pwd}/node_modules/.bin/grpc_tools_node_protoc"

# echo ${PROTOC_GEN_TS_PATH}
# echo ${GRPC_TOOLS_NODE_PROTOC}

# protos目录
PROTO_PATH="src/grpc/protos"
ABSOLUTE_PROTO_PATH="${pwd}/${PROTO_PATH}"
# 编译输出目录
OUT_DIR="${pwd}/src/grpc/compiled-protos"

mkdir ${OUT_DIR}

cd ${ABSOLUTE_PROTO_PATH}

# 根据proto文件名获取绝对路径，接受一个参数，proto文件名称，如：project.proto
getAbsolutePath () {
  FILE_PATH="${pwd}/${PROTO_PATH}/$1"
}

# 编译的核心代码，接收一个参数，为输入的proto文件的绝对路径
compile () {
  ${GRPC_TOOLS_NODE_PROTOC} \
    --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PATH}" \
    --ts_proto_out=${OUT_DIR} \
    --ts_proto_opt="outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,snakeToCamel=false" \
    --proto_path=${ABSOLUTE_PROTO_PATH} \
    --ts_proto_opt=esModuleInterop=true \
    "$1"
}

# 循环编译protos目录下所有文件
compileProtos () {
  # loop over all the available proto files and compile them into respective dir
  for f in ./*.proto; do

    # 生成proto文件绝对路径
    path=${f#*/}
    # echo ${path}
    getAbsolutePath ${path}
    # echo ${FILE_PATH}

    handleUserProto ${path}
    compile ${FILE_PATH}

  done
}

# 用户服务需要protobufjs库google/api中的两个文件，其无法自动引入，这里将两个文件从protobufjs库复制到grpc/protos目录下
handleUserProto () {
  if [[ "$1" =~ "user.proto" ]]; then
    node_modules="${pwd}/node_modules"

    p="${ABSOLUTE_PROTO_PATH}/google/api"
    annotations="${p}/annotations.proto"
    http="${p}/http.proto"

    mkdir "google"
    mkdir "google/api"
    touch ${annotations}
    touch ${http}

    cp "${node_modules}/protobufjs/google/api/annotations.proto" ${annotations}
    cp "${node_modules}/protobufjs/google/api/http.proto" ${http}
  fi
}

# 如果传入一个参数，将其作为proto文件名，只编译这一个，否则循环编译protos目录下所有文件
if [[ $1 ]]; then
  getAbsolutePath $1
  # echo ${FILE_PATH}

  handleUserProto $1
  compile ${FILE_PATH}
else
  compileProtos
fi

