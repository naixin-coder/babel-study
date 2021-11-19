/*
 * @Author: 刘林
 * @Date: 2021-11-19 10:42:39
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-19 10:53:34
 */
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse');

const code = `
 const a = 1;
`
const ast = parse(code);
traverse.default(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "a" })) {
      path.node.name = 'x';
    }
    console.log(path.node);
  }
});