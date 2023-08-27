const axios = require("axios");

axios.interceptors.response.use((res) => {
  return res.data;
});

async function fetchRepoList() {
  //   return axios.get("https://api.github.com/orgs/cloud/repos");
  return require("../config/repo.json");
}

async function fetchTagList(repo) {
  //   return axios.get(`https://api.github.com/repos/cloud/${repo}/tags`);
  return require("../config/repo.json").find((value, index) => value.name === repo).tags;
}

module.exports = {
  fetchRepoList,
  fetchTagList,
};
