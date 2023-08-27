#! /usr/bin/env node

const program = require("commander");
const chalk = require("chalk");

program
  .command("create <app-name>")
  .description("create a new project")
  .option("-f, --force", "overwrite target directory if it exists")
  .action((name, cmd) => {
    console.log(name, cmd);
    require("../command/create")(name, cmd);
  });

// program
//   .command("config [value]")
//   .description("inspect and modify the config")
//   .option("-g, --get <path>", "get value from option")
//   .option("-s, --set <path> <value>")
//   .option("-d, --delete <path>", "delete value from option")
//   .action((value, cmd) => {
//     console.log(value, cmd);
//   });

program
  .usage(`<command> [option]`)
  .version(`cloud-cli@${require("../../../package.json").version}`);

program.on("--help", function () {
  console.log();
  console.log(`Run ${chalk.cyan("cloud <command> --help")} show details`);
  console.log();
});

// 解析用户执行命令的参数
program.parse(process.argv); // 这个需要放在最后面？
