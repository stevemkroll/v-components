import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currency_code: "USD"
  },
  getters: {
    currency_code: state => {
      return state.currency_code;
    }
  },
  mutations: {},
  actions: {}
});
