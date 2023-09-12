const { fetchRepoList, fetchVersionList, fetchUtilList, getDuwnloadUrl, downloadRepo } = require("../../utils/request");
const Inquirer = require("inquirer");
const { wrapLoading } = require("../../utils/utils");
const util = require("util");
const path = require("path");
const { existsSync } = require("fs-extra");

class Creator {
  constructor(projectName, targetDir, options) {
    this.name = projectName;
    this.target = targetDir;
    this.options = options;
    this.downloadGitRepo = downloadRepo;
  }

  async fetchRepo() {
    let repos = await wrapLoading(fetchRepoList, "Waiting fetch template");
    if (!repos) return;

    // const showRepos = repos.map((item) => item.name);

    let { repo } = await Inquirer.prompt({
      name: "repo",
      type: "list",
      choices: repos,
      message: "Please choose a template to create project:",
    });

    return repo;
  }

  async fetchVersion(repo) {
    let versions = await wrapLoading(fetchVersionList, "Waiting fetch version", repo);
    if (!versions) return;

    const { version } = await Inquirer.prompt({
      name: "version",
      type: "list",
      choices: versions,
      message: "Please choose a version to create project:",
    });

    return version
  }

  async fetchUtils(repo, version) {
    let utils = await wrapLoading(fetchUtilList, "Waiting fetch util", repo, version);
    if (!utils) return;

    const { util } = await Inquirer.prompt({
      name: "util",
      type: "checkbox",
      choices: utils,
      message: "Please choose utils to create project:",
    });

    return util
  }

  async download(repo, version) {
    // 下载路径
    let requestUrl = await getDuwnloadUrl(repo, version);
    await wrapLoading(
      this.downloadGitRepo,
      "waiting download ...",
      { repo, version, requestUrl }
    );
  }


  async generate(cacheDir, options) {

  }

  async create() {
    // 先去拉去当前组织下的模版
    let repo = await this.fetchRepo();
    // 通过模板找到版本号
    let version = await this.fetchVersion(repo);
    // 选择项目中依赖的工具
    let utils = await this.fetchUtils(repo, version)
    // 下载
    const cacheDir = await this.download(repo, version);
    // 生成最终项目
    await this.generate(cacheDir, utils)
  }
}

module.exports = Creator;
