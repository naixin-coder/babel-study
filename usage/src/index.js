/*
 * @Author: 刘林
 * @Date: 2021-11-12 13:13:54
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-12 13:46:37
 */
const sayBabel = () => {
  console.log('Babel !!');
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [...a, ...b];
  Promise.resolve().finally();
}