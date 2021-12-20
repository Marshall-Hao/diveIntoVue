/*
 * @Author: your name
 * @Date: 2021-12-20 03:59:28
 * @LastEditTime: 2021-12-21 00:50:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/eightqueen/src/route/index.js
 */
import { createRouter, createWebHistory } from "vue-router";
import Bar from "../pages/Bar.vue";
import Foo from "../pages/Foo.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/bar",
    name: "Bar",
    component: Bar,
    beforeEnter: (to, from, next) => {
      console.log("/Bar::beforEnter", to, from);
      next();
    },
  },
  {
    path: "/foo",
    name: "Foo",
    component: Foo,
    beforeEnter: (to, from, next) => {
      console.log("/Foo::beforEnter", to, from);
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("router.beforeEach", to, from);
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("router.beforeResolve", to, from);
  next();
});

router.afterEach((to, from) => {
  console.log("router.afterEach", to, from);
});
export default router;
