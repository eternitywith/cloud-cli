module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:markdown/recommended',
    './node_modules/gts/',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off', // 允许非空断言
    '@typescript-eslint/no-explicit-any': 'off', // 允许any
    '@typescript-eslint/ban-ts-comment': 'off', // 允许使用如//@ts-ignore等来绕过类型检查
    'node/no-unpublished-import': 'off', // 识别devDependencies的模块导入(gts限制)
    // 实现Google TypeScript Style Guide的命名规范
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: [
          'variable',
          'parameter',
          'function',
          'classMethod',
          'classProperty',
          'typeAlias',
          'typeMethod',
          'typeProperty',
        ],
        format: ['camelCase'],
      },
      {
        selector: ['variable'],
        modifiers: ['global', 'exported'],
        format: ['UPPER_CASE'],
      },
      {
        selector: ['class', 'interface', 'enum', 'enumMember', 'typeParameter'],
        format: ['PascalCase'],
      },
    ],
  },
}
