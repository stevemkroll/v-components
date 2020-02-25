<template>
  <div id="app">
    <div class="vh-100 bg-light overflow-hidden">
      <div class="row h-100">
        <div class="col-10 col-md-6 col-lg-4 mx-auto my-auto">
          <small><strong class="text-muted">Cheddar</strong></small>
          <money />
          {{ amount | money }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import money from "@/components/Money.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    money
  },
  computed: {
    ...mapGetters(["amount"])
  }
};
</script>
