<script setup>
import AHeader from './components/AHeader.vue';
</script>

<template>
  <AHeader />
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 18px;
  font-family: Quicksand, sans-serif;

  @media (max-width: 425px) {
    font-size: 16px;
  }
}
.container {
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 425px) {
    padding: 0 10px;
  }
}
</style>
