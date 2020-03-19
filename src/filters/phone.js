import Vue from "vue";

export const phone = Vue.filter("phone", function(value) {
  let len = value.length;
  let newValue = "";
  switch (len) {
    case 0:
    case 1:
    case 2:
      newValue = value;
      break;
    case 3:
    case 4:
    case 5:
      newValue = value.slice(0, 3) + "-" + value.slice(3, len);
      break;
    default:
      newValue =
        value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6, len);
      break;
  }
  return newValue;
});
