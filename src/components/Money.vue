<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">$</span>
    </div>
    <input
      type="text"
      class="form-control text-right"
      :value="amount | money"
      @click="e => setCursor(e)"
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
      let numExp = /^[0-9]/;
      let validExp = /^[0-9]|\bbackspace\b/;
      let numKey = new RegExp(numExp).test(event.key);
      let validKey = new RegExp(validExp).test(event.key.toLowerCase());
      if (
        (amount === "0" && !numKey) ||
        (amount === "0" && numKey && event.key === "0") ||
        (amount !== "0" && !validKey)
      ) {
        event.preventDefault();
      }
    },
    setCursor(event) {
      event.target.selectionStart = event.target.value.length;
    }
  }
};
</script>
