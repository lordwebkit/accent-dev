<script setup>
import ABtn from './ABtn.vue';
import { useCartStore } from '@/stores/cart';

const store = useCartStore();
</script>
<template>
  <div class="shop-card" :id="this.productData.id">
    <div class="shop-card__inner">
      <img class="shop-card__image" :src="`./src/assets${this.productData.image}`" alt="shop card image">
      <p class="shop-card__price">
        Цена: {{ this.productData.regular_price.value + " " + this.productData.regular_price.currency }}
      </p>
      <p class="shop-card__title">Товар: {{ this.productData.title }}</p>
      <p class="shop-card__brand">Бренд: {{ this.productData.brand }}</p>
      <ABtn class="shop-card__btn" @click.prevent="store.addToCart(this.productData)">Добавить в корзину</ABtn>
    </div>
  </div>
</template>
<script>
export default {
  props: ['productData']
}
</script>
<style lang="scss" scoped>
.shop-card {
  width: 250px;
  height: 385px;
  background-color: rgb(136, 121, 119);
  border-radius: 10px;
  color: #fff;

  @media (max-width: 1175px) {
    width: 220px;
    height: 355px;
  }

  @media (max-width: 970px) {
    width: 190px;
    height: 300px;
  }

  @media (max-width: 870px) {
    width: 165px;
    height: 275px;
  }

  @media (max-width: 364px) {
    width: 80%;
    height: 10%;
  }

  &__inner {
    padding: 8px;
  }

  &__image {
    width: 100%;
  }

  &__btn {
    margin-top: 8px;
  }

  &__price,
  &__title,
  &__brand {
    @media (max-width: 970px) {
      font-size: 16px;
    }
  }
}
</style>