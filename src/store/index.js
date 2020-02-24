import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amount: "0",
    currency_code: "USD",
    show_menu: false
  },
  getters: {
    currency_code: state => {
      return state.currency_code;
    },
    show_menu: state => {
      return state.show_menu;
    },
    amount: state => {
      return state.amount;
    }
  },
  mutations: {
    update_currency_code: (state, payload) => {
      state.currency_code = payload;
    },
    toggle_menu: (state, payload) => {
      state.show_menu = payload;
    },
    amount_add_digit: (state, payload) => {
      if (state.amount != "0") {
        state.amount = state.amount + payload;
      } else {
        state.amount = payload;
      }
    },
    amount_remove_digit: state => {
      let len = state.amount.length;
      if (len > 1) {
        state.amount = state.amount.slice(0, len - 1);
      } else {
        state.amount = "0";
      }
    }
  },
  actions: {
    update_currency_code: async (store, event) => {
      await store.commit("update_currency_code", event.target.text);
      store.dispatch("toggle_menu");
    },
    toggle_menu: store => {
      store.commit("toggle_menu", !store.state.show_menu);
    },
    validate_character: (_, char) => {
      return new Promise((resolve, reject) => {
        let exp = /^[0-9]|\b(null)\b$/;
        let valid = new RegExp(exp).test(char);
        if (valid === true) {
          resolve();
        } else {
          reject();
        }
      });
    },
    prevent_null: store => {
      return new Promise((resolve, reject) => {
        if (store.state.amount.length > 0 && store.state.amount != "0") {
          resolve();
        } else {
          reject();
        }
      });
    },
    prevent_leading_zero: (store, character) => {
      return new Promise((resolve, reject) => {
        let amt = store.state.amount;
        let len = amt.length;
        if (len === 1 && amt === "0" && character === "0") {
          reject();
        } else {
          resolve();
        }
      });
    },
    update_amount: async (store, event) => {
      try {
        // console.log(event.inputType);
        await store.dispatch("validate_character", event.data);
        switch (event.inputType) {
          case "insertText":
            await store.dispatch("prevent_leading_zero", event.data);
            store.commit("amount_add_digit", event.data);
            break;
          case "deleteContentBackward":
          case "deleteSoftLineBackward":
          case "deleteWordBackward":
            await store.dispatch("prevent_null");
            store.commit("amount_remove_digit");
            break;
          default:
            event.target.value = store.state.amount;
        }
      } catch {
        event.target.value = store.state.amount;
      }
    }
  }
});
