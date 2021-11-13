/*
 * @Author: 刘林
 * @Date: 2021-11-12 13:15:10
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-12 13:46:10
 */

const presets = [
  [
    "@babel/preset-env",
    {
      "targets": {
        "edge": "17",
        "firefox": "60",
        "chrome": "67",
        "safari": "11.1"
      },
      "useBuiltIns": "usage",
      "corejs": "3.6.5"
    }
  ]
];
const plugins = [
  [
    "@babel/plugin-transform-arrow-functions"
  ]
];
module.exports = { presets, plugins }