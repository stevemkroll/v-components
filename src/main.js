import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "@/assets/main.scss";

Vue.config.productionTip = false;
import { money } from "./filters/money";
import { phone } from "./filters/phone";

Vue.use(phone, money);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
