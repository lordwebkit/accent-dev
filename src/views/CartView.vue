<script setup>
import CartCard from '../components/CartCard.vue';
import { useCartStore } from '@/stores/cart';

const store = useCartStore();
</script>
<template>
  <div class="cart">
    <div class="cart__inner container">
      <h3 class="cart__empty" v-if="!store.getCart.value.length">Корзина пуста, добавьте что нибудь</h3>
      <div class="cart-content" v-else>
        <CartCard class="cart-content__item" v-for="(cartCard, index) in store.getCart.value" :key="index" :cart-card-data="cartCard"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart {
  &__empty {
    text-align: center;
    margin-top: 160px;
    font-size: 28px;
  }
}

.cart-content {

}
</style>