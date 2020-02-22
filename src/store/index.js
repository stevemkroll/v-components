import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currency_code: "USD",
    show_menu: false
  },
  getters: {
    currency_code: state => {
      return state.currency_code;
    },
    show_menu: state => {
      return state.show_menu;
    }
  },
  mutations: {
    update_currency_code: (state, payload) => {
      state.currency_code = payload;
    },
    toggle_menu: (state, payload) => {
      state.show_menu = payload;
    }
  },
  actions: {
    update_currency_code: async (store, event) => {
      await store.commit("update_currency_code", event.target.text);
      store.dispatch("toggle_menu");
    },
    toggle_menu: store => {
      store.commit("toggle_menu", !store.state.show_menu);
    }
  }
});
