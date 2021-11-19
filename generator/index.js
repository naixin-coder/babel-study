/*
 * @Author: 刘林
 * @Date: 2021-11-19 10:58:58
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-19 11:09:24
 */
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse');
const generate = require('@babel/generator');

const a = "var a = 1;";
const b = "var b = 2;";
const astA = parse(a, { sourceFilename: "a.js" });
const astB = parse(b, { sourceFilename: "b.js" });
const ast = {
  type: "Program",
  body: [].concat(astA.program.body, astB.program.body),
};

const { code, map } = generate.default(
  ast,
  { sourceMaps: true },
  {
    "a.js": a,
    "b.js": b,
  }
);

console.log(code, map)