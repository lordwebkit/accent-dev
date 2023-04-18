<script setup>
import ABtn from './ABtn.vue';
</script>
<template>
  <div class="shop-card" :id="this.productData.id">
    <div class="shop-card__inner">
      <img class="shop-card__image" :src="`./src/assets${this.productData.image}`" alt="shop card image">
      <p class="shop-card__price">
        price: {{ this.productData.regular_price.value + " " +  this.productData.regular_price.currency}}
      </p>
      <p class="shop-card__title">product: {{ this.productData.title }}</p>
      <p class="shop-card__brand">brand: {{ this.productData.brand }}</p>
      <ABtn>Add to cart</ABtn>
    </div>
  </div>
</template>
<script>
export default {
  props: ['productData']
}
</script>
<style lang="scss">
.shop-card {
  width: 250px;
  height: 375px;
  background-color: rgb(136, 121, 119);
  border-radius: 10px;
  color: #fff;

  &__inner {
    padding: 5px;
  }

  &__image {
    width: 100%;
  }
}
</style>