<template>
  <div id="app">
    <div class="vh-100 bg-light overflow-hidden">
      <div class="row h-100">
        <div class="col-10 col-md-6 col-lg-4 mx-auto my-auto">
          <money />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import money from "@/components/Money.vue";
export default {
  name: "app",
  components: {
    money
  }
};
</script>
