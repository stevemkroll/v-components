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
        @click="toggle_menu()"
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
          :class="{ active: true }"
          >USD</a
        >
        <a class="dropdown-item" href="javascript:void(0)">CAD</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "money",
  data() {
    return {
      show_menu: false
    };
  },
  computed: {
    ...mapGetters(["currency_code"])
  },
  methods: {
    toggle_menu() {
      this.show_menu = !this.show_menu;
    }
  }
};
</script>
