/*
 * @Author: your name
 * @Date: 2021-12-28 03:48:17
 * @LastEditTime: 2021-12-29 06:38:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/router.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routes as topic } from "./module/topic/router";
import {
  PERMISSION_MAP,
  init as permissionInit,
  getPermissionByRole,
} from "./config/permissions";
import config from "./config/config";
import store from "./store";
import { compose } from "./util/compose";

Vue.use(VueRouter);

permissionInit();
const getRole = () => store.state.user.role;

const getPermission = (permission) => {
  // * 1 getRole
  // * 2 getPermissionByRole
  // * 3 permission boolean value
  const a = (obj) => obj[permission];
  // return compose((obj) => obj[permission], getPermissionByRole, getRole);
  // return a(getPermissionByRole(getRole()));
  return compose(a, getPermissionByRole, getRole)();
};

console.log(getPermission(PERMISSION_MAP.ABOUT_PAGE));
export default new VueRouter({
  routes: [
    ...topic,
    {
      path: "/",
      redirect: "/hot",
    },
    {
      name: "about",
      path: "/about",
      component: () => import("./module/topic/views/UAbout.vue"),
      beforeEnter(to, from, next) {
        getPermission(PERMISSION_MAP.ABOUT_PAGE) ? next() : next("403");
      },
    },
    {
      name: "403",
      path: "/403",
      component: () => import("./module/topic/views/403.vue"),
    },
  ],
});
