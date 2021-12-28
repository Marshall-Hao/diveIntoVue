/*
 * @Author: your name
 * @Date: 2021-12-29 05:01:16
 * @LastEditTime: 2021-12-29 06:19:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/config/permissions.js
 */
import config from "./config.js";
export const PERMISSION_MAP = {
  ABOUT_PAGE: "ABOUT_PAGE",
};

export const init = () => {
  config.regist("permission", {
    CEO: {
      [PERMISSION_MAP.ABOUT_PAGE]: true,
    },
    COO: {
      [PERMISSION_MAP.ABOUT_PAGE]: false,
    },
  });
};

export const getPermissionByRole = (role) => {
  return config.get("permission")[role];
};
