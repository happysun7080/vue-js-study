<template>
  <div id="date">
    {{ date }}
  </div>
  <div id="date2">
    {{ date2 }}
  </div>
</template>

<script>
export default {
  // Composition API
  setup() {
    const date = Date().toString();
    return {
      // date: date,
      date, // ES6의 단축 속성 이용
    };
  },

  // Options API
  data() {
    return {
      date2: Date().toString(),
    };
  },
};
</script>

<style>
</style>