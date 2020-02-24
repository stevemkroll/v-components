<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">$</span>
    </div>
    <input
      type="text"
      class="form-control"
      :value="amount | money"
      @keydown="e => keepFormat(e, amount)"
      @input="e => update_amount(e)"
    />
    <div class="input-group-append">
      <button
        class="btn input-group-text rounded-right dropdown-toggle"
        type="button"
        @click="e => toggle_menu(e)"
      >
        {{ currency_code }}
      </button>
      <div
        class="dropdown-menu dropdown-menu-right"
        :class="{ show: show_menu }"
      >
        <a
          class="dropdown-item"
          href="javascript:void(0)"
          :class="{ active: currency_code === 'USD' ? true : false }"
          @click="e => update_currency_code(e)"
          >USD</a
        >
        <a
          class="dropdown-item"
          href="javascript:void(0)"
          :class="{ active: currency_code === 'CAD' ? true : false }"
          @click="e => update_currency_code(e)"
          >CAD</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "money",
  computed: {
    ...mapGetters(["currency_code", "show_menu", "amount"])
  },
  methods: {
    ...mapActions(["update_currency_code", "toggle_menu", "update_amount"]),
    keepFormat(event, amount) {
      let exp = /^[0-9]/;
      console.log(event);
      let valid = new RegExp(exp).test(event.key);
      if (
        (amount === "0" && amount.length === 1 && !valid) ||
        (amount === "0" && amount.length === 1 && event.key === "0")
      ) {
        event.preventDefault();
      }
    }
  },
  filters: {
    money(amount) {
      let len = amount.length;
      switch (len) {
        case 1:
          if (amount === "0") {
            return "0.00";
          } else {
            return "0.0" + amount;
          }
        case 2:
          return "0." + amount;
        default:
          return amount.slice(0, len - 2) + "." + amount.slice(len - 2, len);
      }
    }
  }
};
</script>
