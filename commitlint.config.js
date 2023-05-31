/*
 * @Author: minchao920917 499790879@qq.com
 * @Date: 2023-05-31 23:07:17
 * @LastEditors: Do not edit
 * @Description: 
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [commit => commit.includes('init')],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'refactor',
        'style',
        'docs',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'types',
        'wip',
      ],
    ],
  },
}
