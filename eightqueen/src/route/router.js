/*
 * @Author: your name
 * @Date: 2021-12-20 05:43:13
 * @LastEditTime: 2021-12-20 23:08:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/eightqueen/src/route/router.js
 */
import app from "../main";

class RouterTable {
  constructor(routes) {
    this._pathMap = new Map();
    this.init(routes);
  }
  init(routes) {
    const addRoute = (router) => {
      this._pathMap.set(router.path, route);
    };
    routes.forEach((route) => {
      addRoute(route);
    });
  }
  match(path) {
    let find;
    for (const key of this._pathMap.keys()) {
      if (path === key) {
        find = key;
        break;
      }
    }
    return this._pathMap.get(find);
  }
}
import Html5Mode from "./history/html5";

export default class Router {
  constructor({ routes = [] }) {
    this.routerTable = new RouterTable(routes);
    this.history = new Html5Mode(this);
  }
}

Router.install = function () {
  app.mixin({
    beforeCreate() {
      if (this.$options.router !== undefined) {
        this._routerRoot = this;
        this._router = this.$options.router;
      }
    },
  });
};
