/*
 * @Author: your name
 * @Date: 2021-12-20 20:36:07
 * @LastEditTime: 2021-12-20 22:18:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/eightqueen/src/route/history/html5.js
 */
import BaseHistory from "./base";

export default class Html5History extends BaseHistory {
  constructor(options) {
    super(options);

    this.initListner();
  }

  initListner() {
    window.addEventListener("popstate", () => {
      this.transitionTo(this.getCurrentLocation());
    });
  }

  get getCurrentLocation() {
    let path = decodeURI(window.location.pathname) ?? "/";
    return path + window?.location?.search + window?.location?.hash;
  }
}
