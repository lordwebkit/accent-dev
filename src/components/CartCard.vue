<script setup>
import { useCartStore } from '@/stores/cart'
const store = useCartStore();
const props = defineProps(['cartCardData'])
</script>
<template>
  <div class="cart-card" :id="props.cartCardData.id">
    <div class="cart-card__inner">
      <img class="cart-card__image" :src="`./src/assets${props.cartCardData.image}`" alt="cart card image">
      <p class="cart-card__price">
        Цена: {{ props.cartCardData.regular_price.value + " " + props.cartCardData.regular_price.currency }}
      </p>
      <p class="cart-card__title">Товар: {{ props.cartCardData.title }}</p>
      <p class="cart-card__brand">Бренд: {{ props.cartCardData.brand }}</p>
      <p class="cart-card__amount cart-card-amount">Колличество:
        <button class="cart-card-amount__plus" @click.prevent="store.incrementCartCard(props.cartCardData)">+</button>
        <span class="cart-card-amount__quantity">{{ props.cartCardData.quantity }}</span>
        <button class="cart-card-amount__minus" @click.prevent="store.decrementCartCard(props.cartCardData)">-</button>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart-card {
  width: 70%;
  height: 185px;
  background-color: rgb(136, 121, 119);
  border-radius: 10px;
  color: #fff;
  margin-top: 20px;
  display: flex;

  &__inner {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  &__image {
    height: 100%;
  }

  &__btn {
    margin-top: 8px;
  }
}

.cart-card-amount {
  display: flex;
  align-items: center;

  &__quantity {
    font-size: 24px;
  }

  &__plus {
    display: flex;
    align-items: center;
    height: 22px;
    font-size: 21px;
    padding: 0 5px;
    margin: 0 8px;
    border: 1px solid white;
    background-color: #887977;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: green;
    }
  }

  &__minus {
    display: flex;
    align-items: center;
    height: 22px;
    font-size: 25px;
    padding: 0 5px;
    margin: 0 9px;
    border: 1px solid white;
    background-color: #887977;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: red;
    }
  }
}
</style>