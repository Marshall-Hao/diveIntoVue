/*
 * @Author: your name
 * @Date: 2021-12-29 04:27:17
 * @LastEditTime: 2021-12-29 04:28:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/config/config.js
 */
class Config {
  constructor() {
    this._config = {};
  }
  regist(type, value) {
    this._config[type] = value;
  }
  get(type) {
    return this._config[type];
  }
}

export default new Config();
