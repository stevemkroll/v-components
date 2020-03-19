export const phone_state = {
  state: {
    phone: ""
  },
  getters: {
    phone: state => {
      return state.phone;
    }
  },
  mutations: {
    phone_add_digit: (state, payload) => {
      if (state.phone != "0") {
        state.phone = state.phone + payload;
      } else {
        state.phone = payload;
      }
    },
    phone_remove_digit: state => {
      let len = state.phone.length;
      state.phone = state.phone.slice(0, len - 1);
    }
  },
  actions: {
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
    update_phone: async (store, event) => {
      try {
        await store.dispatch("validate_character", event.data);
        switch (event.inputType) {
          case "insertText":
            store.commit("phone_add_digit", event.data);
            break;
          case "deleteContentBackward":
          case "deleteSoftLineBackward":
          case "deleteWordBackward":
            store.commit("phone_remove_digit");
            break;
          default:
            event.target.value = store.state.phone;
        }
      } catch {
        event.target.value = store.state.phone;
      }
    }
  }
};
