// Provide를 이용한 메시지 전달

<template>
  <Component></Component>
</template>

<script>
import Component from "./Component.vue";
import { provide } from "vue";

export default {
  provide: {
    msg: "메시지",
  },
  components: {
    Component,
  },
};
</script>

<style>
</style>