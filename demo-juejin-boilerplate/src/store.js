/*
 * @Author: your name
 * @Date: 2021-12-21 06:30:56
 * @LastEditTime: 2021-12-21 20:29:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/store.js
 */
import Vue from "vue";
import { Vuex } from "vuex";
import { store as topic } from "./module/topic/store";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    topic,
  },
});
