import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1,
  },
  getters: {},
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
  },
  actions: {},
  modules: {},
});
