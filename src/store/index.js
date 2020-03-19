import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { money_state } from "./modules/money.js";
import { phone_state } from "./modules/phone.js";

export default new Vuex.Store({
  strict: true,
  modules: {
    money: money_state,
    phone: phone_state
  }
});
