/*
 * @Author: your name
 * @Date: 2020-05-23 18:33:51
 * @LastEditTime: 2021-12-29 19:53:14
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/util/vue.js
 */
function isDef(x) {
  return x !== undefined && x !== null;
}

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function getFirstComponentChild(children) {
  console.log(children);
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        console.log(c);
        return c;
      }
    }
  }
}

export { isDef, remove, getComponentName, getFirstComponentChild };
