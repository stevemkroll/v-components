<template>
  <div id="app">
    <div class="vh-100 bg-light overflow-hidden">
      <div class="row h-100">
        <div class="col-10 col-md-6 col-lg-4 mx-auto my-auto">
          <small><strong class="text-muted">Money</strong></small>
          <money />
          <br />
          <small><strong class="text-muted">Phone #</strong></small>
          <phone />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import money from "@/components/Money.vue";
import phone from "@/components/Phone.vue";

export default {
  name: "app",
  components: {
    money,
    phone
  }
};
</script>
