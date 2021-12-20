/*
 * @Author: your name
 * @Date: 2021-12-20 20:35:51
 * @LastEditTime: 2021-12-20 22:31:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/eightqueen/src/route/history/base.js
 */
export default class HistoryBase {
  constructor({ routerTable }) {
    this.routerTable = routerTable;
  }
  transitionTo(target) {
    const route = this.routerTable.match(target);

    this.current = route;
  }
}
