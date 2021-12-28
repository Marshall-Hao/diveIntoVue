/*
 * @Author: your name
 * @Date: 2020-04-30 13:54:10
 * @LastEditTime: 2021-12-29 05:52:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/app.js
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import router from "./router";
import intersect from "./directive/intersect";

import { init as themeInit } from "./config/theme";
import { init as permissionInit } from "./config/permissions";
Vue.directive("intersect", intersect);

themeInit();
permissionInit();
const app = new Vue({
  store,
  router,
  render: (h) => h(App),
});

app.$mount("#app");
