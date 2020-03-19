import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { money_state } from "./modules/money.js";

export default new Vuex.Store({
  strict: true,
  modules: {
    money_state
  }
});
