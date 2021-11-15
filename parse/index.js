/*
 * @Author: 刘林
 * @Date: 2021-11-15 12:57:44
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-15 13:04:11
 */
const { parse } = require('@babel/parser');

const code = `
  n*n
`

const ast = parse(`code`, { errorRecovery: true });
console.log(ast);