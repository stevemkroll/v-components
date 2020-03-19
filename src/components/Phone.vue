<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text"><small>1+</small></span>
    </div>
    <input
      type="text"
      class="form-control text-left"
      :value="phone | phone"
      placeholder="###-###-####"
      maxlength="12"
      @keydown="e => clean(e)"
      @input="e => update_phone(e)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "phone",
  computed: {
    ...mapGetters(["phone"])
  },
  methods: {
    ...mapActions(["update_phone"]),
    clean(event) {
      let validExp = /^[0-9]|\bbackspace\b/;
      let validKey = new RegExp(validExp).test(event.key.toLowerCase());
      if (!validKey) {
        event.preventDefault();
      }
    }
  }
};
</script>

<style lang="css" scoped>
input::placeholder {
  opacity: 0.5;
}
</style>
