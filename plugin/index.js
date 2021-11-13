/*
 * @Author: 刘林
 * @Date: 2021-11-13 09:47:28
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-13 10:34:37
 */


// 1.将let,const的变量自动变成var
module.exports = () => {
  return {
    visitor: {
      VariableDeclaration(path) {
        const isConstOrLet = ['const', 'let'].includes(path.node.kind);
        if (isConstOrLet) {
          path.node.kind = 'var';
        }
      }
    }
  }
}

