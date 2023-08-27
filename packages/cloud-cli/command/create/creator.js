const { fetchRepoList, fetchTagList } = require("../../utils/request");
const Inquirer = require("inquirer");
const { wrapLoading } = require("../../utils/utils");
const downloadGitRepo = require("download-git-repo");
const util = require("util");
const path = require("path");
const fs = require("fs-extra");

class Creator {

  downloadCacheDir = path.resolve(process.cwd(),  "downloadCache")

  constructor(projectName, targetDir, options) {
    this.name = projectName;
    this.target = targetDir;
    this.options = options;
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  async fetchRepo() {
    let repos = await wrapLoading(fetchRepoList, "Waiting fetch template");
    if (!repos) return;

    repos = repos.map((item) => item.name);

    let { repo } = await Inquirer.prompt({
      name: "repo",
      type: "list",
      choices: repos,
      message: "Please choose a template to create project:",
    });

    return repo;
  }

  async fetchTag(repo) {
    let tags = await wrapLoading(fetchTagList, "Waiting fetch tag", repo);
    if (!tags) return;

    tags = tags.map((item) => item.name);

    let { tag } = await Inquirer.prompt({
      name: "tag",
      type: "list",
      choices: tags,
      message: "Please choose a tag to create project:",
    });
    return tag;
  }

  async fetchUtils(tag) {
    let utils = tag.utils;
    if (!utils) return;

    utils = utils.map((item) => item.name);

    // ***
  }

  async generate(cacheDir, options) {

  }

  async download(repo, tag) {
    // 下载路径
    let requestUrl = tag.url;

    // 查找缓存
    const cacheDir = path.join(this.downloadCacheDir, `${repo}@${tag}`)
    if (fs.existsSync(cacheDir)) {
      return cacheDir;
    } else {
      await wrapLoading(
        this.downloadGitRepo,
        "waiting download ...",
        requestUrl,
        cacheDir
      );
    }
    
    return cacheDir;
  }

  async create() {
    // 先去拉去当前组织下的模版
    let repo = await this.fetchRepo();
    // 通过模板找到版本号
    let tag = await this.fetchTag(repo);
    // 选择项目中依赖的工具
    let utils = await this.fetchUtils(tag)
    // 下载
    const cacheDir = await this.download(repo, tag);
    // 生成最终项目
    await this.generate(cacheDir, utils)
  }
}

module.exports = Creator;
