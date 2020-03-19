<template>
  <div id="app">
    <div class="vh-100 bg-light overflow-hidden">
      <div class="row h-100">
        <div class="col-10 col-md-6 col-lg-4 mx-auto my-auto">
          <small><strong class="text-muted">Phone #</strong></small>
          <phone />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phone from "@/components/Phone.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    phone
  },
  computed: {
    ...mapGetters(["phone"])
  }
};
</script>
