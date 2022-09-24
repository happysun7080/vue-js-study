// Inject를 이용한 msg 데이터 수신

<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  inject: ["msg"],
};
</script>

<style>
</style>