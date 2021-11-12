"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

/*
 * @Author: 刘林
 * @Date: 2021-11-12 06:35:35
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-12 06:54:23
 */
const show = function show(a, b) {
  Object.assign(a, b);
};

show({
  a: 1
}, {
  b: 2
});
Promise.resolve().finally();