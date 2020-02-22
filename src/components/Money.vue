<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">$</span>
    </div>
    <input
      type="text"
      class="form-control"
      aria-label="Amount (to the nearest dollar)"
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
    ...mapGetters(["currency_code", "show_menu"])
  },
  methods: {
    ...mapActions(["update_currency_code", "toggle_menu"])
  }
};
</script>
