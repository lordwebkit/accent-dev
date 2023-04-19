<script setup>
import { useCartStore } from '@/stores/cart'
const store = useCartStore();
const props = defineProps(['cartCardData'])
</script>
<template>
  <div class="cart-card" :id="props.cartCardData.id">
    <div class="cart-card__inner">
      <img class="cart-card__image" :src="`./src/assets${props.cartCardData.image}`" alt="cart card image">
      <div class="cart-card__data">
        <p class="cart-card__price">
          Цена: {{ props.cartCardData.regular_price.value + " " + props.cartCardData.regular_price.currency }}
        </p>
        <p class="cart-card__title">Товар: {{ props.cartCardData.title }}</p>
        <p class="cart-card__brand">Бренд: {{ props.cartCardData.brand }}</p>
      </div>
      <div class="cart-card__amount cart-card-amount">
        <p class="cart-card-amount__text">Колличество:</p>
        <div class="cart-card-amount__quantity-wrapper">
          <button class="cart-card-amount__minus" @click.prevent="store.decrementCartCard(props.cartCardData)">-</button>
          <span class="cart-card-amount__quantity">{{ props.cartCardData.quantity }}</span>
          <button class="cart-card-amount__plus" @click.prevent="store.incrementCartCard(props.cartCardData)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart-card {
  width: 100%;
  height: 185px;
  background-color: rgb(136, 121, 119);
  border-radius: 10px;
  color: #fff;
  margin-top: 20px;
  display: flex;

  &__inner {
    padding: 8px 16px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 736px) {
      display: grid;
      grid-template-rows: 85px 85px;
    }
  }

  &__image {
    height: 100%;

    @media (max-width: 736px) {
      grid-row-start: 1;
      grid-row-end: 3;
    }

    @media (max-width: 332px) {
      height: 90%;
    }
  }

  &__btn {
    margin-top: 8px;
  }

  &__data {
    display: flex;
    justify-content: space-around;
    flex: 1;

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 60%;
    }

    @media (max-width: 736px) {
      grid-column-start: 2;
      grid-column-end: 3;
      height: 100%;
    }
  }

  &__price,
  &__title,
  &__brand {
    @media (max-width: 970px) {
      font-size: 16px;
    }
  }
}

.cart-card-amount {
  display: flex;
  align-items: center;

  @media (max-width: 970px) {
    flex-direction: column;
    justify-content: space-between;
    height: 55px;
  }

  @media (max-width: 736px) {
    justify-content: space-around;
  }

  &__quantity-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__quantity {
    font-size: 24px;

    @media (max-width: 970px) {
      font-size: 20px;
    }
  }

  &__text {
    @media (max-width: 970px) {
      font-size: 16px;
    }
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

    @media (max-width: 970px) {
      font-size: 16px;
      height: 16px;
      padding: 0 2px;
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

    @media (max-width: 970px) {
      font-size: 16px;
      height: 16px;
      padding: 0 3.5px;
    }
  }
}</style>