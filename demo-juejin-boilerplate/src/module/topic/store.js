/*
 * @Author: your name
 * @Date: 2021-12-21 04:54:30
 * @LastEditTime: 2021-12-21 06:33:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/module/topic/store.js
 */
import { fetchItems } from "./api/api";

export const LIST_TYPE = {
  TOP: "top",
  HOT: "hot",
  NEW: "new",
};
export const store = {
  namespace: true,
  state: {
    activeType: LIST_TYPE.TOP,
    top: {
      items: [],
      pageInfo: {},
    },
    hot: {
      items: [],
      pageInfo: {},
    },
    new: {
      items: [],
      pageInfo: {},
    },
  },
  mutations: {
    SET_ACTIVE_TYPE: (state, { type }) => {
      state.activeType = type;
    },
    SET_LIST: (state, { items, pageInfo }) => {
      state[state.activeType].pageInfo = pageInfo;

      items.forEach((item) => {
        item && state[state.activeType].items.push(item);
      });
    },
  },
  actions: {
    FETCH_LIST_DATA: ({ commit, state }, { type }) => {
      commit("SET_ACTIVE_TYPE", { type });

      const after = state[type].pageInfo.endCursor || 0;

      return fetchItems({ type, after }).then(({ items, pageInfo }) =>
        commit("SET_LIST", { items, pageInfo })
      );
    },
  },
};
