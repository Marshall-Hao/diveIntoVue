/*
 * @Author: your name
 * @Date: 2021-12-28 03:45:04
 * @LastEditTime: 2021-12-28 03:47:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/module/topic/router.js
 */
import { LIST_TYPE } from "./store";

export const routes = [
  {
    name: LIST_TYPE.TOP,
    path: `/${LIST_TYPE.TOP}`,
    component: () => import("./views/UTopic.vue"),
    props: { type: LIST_TYPE.TOP },
  },
  {
    name: LIST_TYPE.TOP,
    path: `/${LIST_TYPE.NEW}`,
    component: () => import("./views/UTopic.vue"),
    props: { type: LIST_TYPE.NEW },
  },
  {
    name: LIST_TYPE.TOP,
    path: `/${LIST_TYPE.HOT}`,
    component: () => import("./views/UTopic.vue"),
    props: { type: LIST_TYPE.HOT },
  },
];
