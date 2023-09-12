# 该目录下存放对应模版的util选项和编译脚本

请为需要编译的template新建一个对应的目录(目录名称必须和template名称相同)，其中需要包括：

- config.js：里面配置并导出一个UTIL_OPTIONS，一个util选项列表。
- 每个util option对应一个编译脚本，用户选择某个util选项时，会执行对应的编译脚本。
