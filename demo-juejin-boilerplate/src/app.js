/*
 * @Author: your name
 * @Date: 2020-04-30 13:54:10
 * @LastEditTime: 2021-12-21 20:27:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/app.js
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

const app = new Vue({
  store,
  render: (h) => h(App),
});

app.$mount("#app");
