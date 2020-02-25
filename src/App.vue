<template>
  <div id="app">
    <div class="vh-100 bg-light overflow-hidden">
      <div class="row h-100">
        <div class="col-10 col-md-6 col-lg-4 mx-auto my-auto">
          <small><strong class="text-muted">Mine</strong></small>
          <money />
          {{ amount | money }}
          <br />
          <small><strong class="text-muted">FP-Money</strong></small>
          <fpmoney v-model="value" />
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import money from "@/components/Money.vue";
import { mapGetters } from "vuex";

import fpmoney from "fp-money/dist/fp-money-vue.js";
import "fp-money/dist/fp-money.css";
export default {
  name: "app",
  components: {
    money,
    fpmoney
  },
  computed: {
    ...mapGetters(["amount"])
  },
  data() {
    return {
      value: 0
    };
  }
};
</script>
