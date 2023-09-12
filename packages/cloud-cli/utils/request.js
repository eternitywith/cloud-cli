const axios = require("axios");
const npmFetch = require('npm-registry-fetch')
const { resolve, join } = require('path')
const chalk = require('chalk')
const { createWriteStream, ensureDir, existsSync, remove } = require('fs-extra')
const tar = require('tar');

axios.interceptors.response.use((res) => {
  return res.data;
});

const org = 'aq-cloud-cli'
const registry = 'https://registry.npmjs.org/'
const npmAuth = {
  username: 'eternitywith',
  password: 'lonely521LOVEfly'
}
const fetchOption = {
  registry,
  ...npmAuth
}
const perfix = 'template-'

const generateDir = resolve(__dirname, '../generate')

// 缓存目录
const downloadCacheDir = resolve(process.cwd(), ".downloadCache")
// 压缩包缓存目录
const gzCacheDir = join(downloadCacheDir, 'gz')

// 仓库信息缓存
const repoMap = new Map()

/**
 * 获取远程模板列表
 * @returns object[]
 */
async function fetchTemplates() {
  const result = await npmFetch.json(`/-/org/${org}/package`, fetchOption)
  // console.log("fetchTemplates", result)
  const templates = Object.keys(result).map((r) => r.split('/')[1]).filter((r) => r.startsWith(perfix))
  return templates
}

/**
 * 获取提示给用户的模版列表数据
 * @returns object[]
 */
async function fetchRepoList() {
  const templates = await fetchTemplates()
  const showTemplates = templates.map((t) => ({ name: t.slice(perfix.length), value: t }))
  // console.log('showTemplates', showTemplates)
  return showTemplates
}

/**
 * 获取某个模板的远程版本列表
 * @param {string} repo 
 * @returns string[]
 */
async function fetchVersions(repo) {
  const packageName = `@${org}/${repo}`
  console.log('packageName', packageName, repoMap.has(repo))
  console.log('repoMap', repoMap)
  const result = repoMap.has(repo) ? repoMap.get(repo) : await npmFetch.json(`/${packageName}`, fetchOption)
  // 缓存一下
  repoMap.set(repo, result)
  console.log('repoMap', repoMap)
  // console.log('fetchVersions', result)
  return Object.keys(result.versions)
}

/**
 * 获取提示给用户的版本列表数据
 * @param {object} repo 
 * @returns object[]
 */
async function fetchVersionList(repo) {
  const versions = await fetchVersions(repo)
  const showVersions = versions.sort((a, b) => b - a)

  return showVersions.map((v, i) => {
    if (i === 0) {
      return { name: `${v} ${chalk.red('(latest)')}`, value: v }
    } else {
      return { name: v, value: v }
    }
  })
}

/**
 * 某个模版的工具选项列表
 * @param {string} repo 
 * @param {string} version 
 * @returns object[]
 */
async function fetchUtils(repo, version) {
  const configPath = join(generateDir, `${repo}/config.js`)
  return require(configPath).UTIL_OPTIONS
}

/**
 * 获取提示给用户的工具选项列表数据
 * @param {object} repo 
 * @param {object} version 
 * @returns object[]
 */
async function fetchUtilList(repo, version) {
  const utils = await fetchUtils(repo, version)
  const showUtils = utils.map((v) => ({
    ...v,
    name: `${v.name} ${chalk.yellow(`(${v.description})`)}`,
    value: v.name
  }))

  return showUtils
}

/**
 * 通过仓库和版本号获取下载地址
 * @param {string} repo 
 * @param {string} version 
 * @returns string
 */
async function getDuwnloadUrl(repo, version) {
  if (!repoMap.has(repo)) {
    await fetchVersions(repo)
  }

  const info = repoMap.get(repo).versions[version]

  return info.dist.tarball
}

/**
 * 下载模板压缩包
 * @param {string} url 下载地址
 * @param {string} file 下载到目标的文件地址
 * @returns 
 */
async function downloadRepoGz(url, file) {
  console.log('url', url)
  return new Promise(async (resolve, reject) => {
    axios({
      method: 'get',
      url,
      responseType: 'stream'
    }).then((response) => {
      console.log('response', response.data)
      // 创建可写流
      console.log('file', file)
      const writer = createWriteStream(file);
      // 将响应数据流写入文件
      response.data.pipe(writer);
      // 写入完成
      writer.on('finish', async () => {
        resolve(file)
      });
      // 写入失败
      writer.on('error', (error) => {
        console.error('写入文件失败:', error);
        if (existsSync(file)) remove(file)
        reject(error)
      });
    }).catch((error) => {
      console.error('文件下载失败:', error);
      reject(error)
    })
  });
}

/**
 * 将压缩包解压到目录
 * @param {string} file 压缩包地址
 * @param {string} dir 目标目录
 * @returns 
 */
async function tarRepoGz(file, dir) {
  if (!existsSync(file)) return
  await ensureDir(dir);
  await tar.x({
    file: file,
    cwd: dir
  }).then(async () => {
    console.success('解压缩完成');
  }).catch(error => {
    console.error('解压缩失败:', error);
    if (existsSync(dir)) remove(dir)
  });
}

/**
 * 下载模板并解压缓存
 * @param {object} option 
 * @returns 
 */
async function downloadRepo({ repo, version, requestUrl }) {
  // 判断模板的缓存目录是否存在
  await ensureDir(downloadCacheDir);
  const templateCacheDir = join(downloadCacheDir, `${repo}/${version}`)
  if (existsSync(templateCacheDir)) return
  // 判断模板对应的tgz文件是否存在
  await ensureDir(gzCacheDir);
  const gzFilePath = join(gzCacheDir, `${repo}-${version}.tgz`)
  if (!existsSync(gzFilePath)) {
    // 下载压缩包
    await downloadRepoGz(requestUrl, gzFilePath)
  }
  // 解压
  await tarRepoGz(gzFilePath, templateCacheDir)
}

module.exports = {
  fetchRepoList,
  fetchVersionList,
  fetchUtilList,
  getDuwnloadUrl,
  downloadRepo,
};
