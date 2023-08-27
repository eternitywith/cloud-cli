#!/bin/sh


function sendDingTalkNotice() {
  local text="#### GitLab CI/CD \n - 项目: NexSight \n - 服务: ${CI_PROJECT_NAME} \n - 构建分支: ${CI_COMMIT_REF_NAME} \n - stage: ${CI_JOB_STAGE} \n - job: ${CI_JOB_NAME} \n - 修改内容: ${CI_COMMIT_MESSAGE} \n - tag: ${CI_COMMIT_TAG} \n - tag备注: ${CI_COMMIT_TAG_MESSAGE} \n - image: ${IMAGE} \n - 构建状态: ${JOB_STATUS} \n - 编译时间: $(TZ=UTC-8 date "+%Y-%m-%d %H:%M:%S") \n - 提交者: ${GITLAB_USER_NAME} \n\n\n [流水线: ${CI_PIPELINE_ID}](${CI_PROJECT_URL}/pipelines/${CI_PIPELINE_ID}) \n"
  curl POST "$1" -H 'Content-Type: application/json' -d "{\"msgtype\": \"markdown\", \"markdown\": {\"title\": \"GitLab CI/CD\", \"text\": \"${text}\"}, \"at\": {\"isAtAll\": true}}"

}

function except() {
  if [ "$?" -ne "0" ];then
    JOB_STATUS="失败"
    sendDingTalkNotice $1
    exit 1
  fi
}


function build() {
 
  docker build --tag $1 . || except $2
  docker push $1 || except $2
  if [ $CI_COMMIT_TAG ]; then
    sendDingTalkNotice $2
  fi
  
}



build_flag=0
case $1 in
  build)
    build_flag=1
    ;;
  *)
    echo "无效的参数:$1"
    exit 1
    ;;
esac

if [ ${build_flag} -ne 0 ]; then
  build $2 $3
fi
