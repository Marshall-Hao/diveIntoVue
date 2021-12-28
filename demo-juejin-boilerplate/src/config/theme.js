/*
 * @Author: your name
 * @Date: 2021-12-29 04:29:12
 * @LastEditTime: 2021-12-29 04:31:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/config/theme.js
 */
import config from "./config";
export const init = () => {
  config.regist("theme", {
    blue: {
      primary: "#007fff",
      highlight: "#00a6ff",
    },
    red: {
      primary: "#A83733",
      highlight: "rgb(195,75,73)",
    },
  });
};
