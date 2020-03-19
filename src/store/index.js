import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { phone_state } from "./modules/phone.js";

export default new Vuex.Store({
  strict: true,
  modules: {
    phone_state
  }
});
