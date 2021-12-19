import { createStore } from "vuex";

export default createStore({
  state: {
    count1: 0,
    count2: 1,
  },
  getters: {
    doubleCount: (state) => state.count1 * 2,
  },
  mutations: {
    addCount: (state, payload = 1) => {
      return (state.count1 += payload);
    },
  },
  actions: {
    asyncAddCount({ commit }) {
      setTimeout(() => {
        commit("addCount");
      }, 1500);
    },
  },
  modules: {},
});
