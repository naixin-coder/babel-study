/*
 * @Author: 刘林
 * @Date: 2021-11-12 06:35:35
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-12 06:56:40
 */

// 命令执行 npx babel src --out-dir lib

const show = (a, b) => {
  Object.assign(a, b)
}

show({ a: 1 }, { b: 2 })

Promise.resolve().finally();