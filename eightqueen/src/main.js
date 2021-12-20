/*
 * @Author: your name
 * @Date: 2021-12-06 04:56:12
 * @LastEditTime: 2021-12-20 23:02:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/eightqueen/src/main.js
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import store from "./store";
import router from "./route/index.js";

export const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus); // * use plugings with app.use
app.mount("#app");
