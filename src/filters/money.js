import Vue from "vue";

export const money = Vue.filter("money", function(value) {
  let len = value.length;
  switch (len) {
    case 1:
      if (value === "0") {
        return "0.00";
      } else {
        return "0.0" + value;
      }
    case 2:
      return "0." + value;
    default:
      return value.slice(0, len - 2) + "." + value.slice(len - 2, len);
  }
});
