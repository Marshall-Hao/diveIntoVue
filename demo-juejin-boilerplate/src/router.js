/*
 * @Author: your name
 * @Date: 2021-12-28 03:48:17
 * @LastEditTime: 2021-12-28 03:51:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/router.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routes as topic } from "./module/topic/router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    ...topic,
    {
      path: "/",
      redirect: "/hot",
    },
  ],
});
