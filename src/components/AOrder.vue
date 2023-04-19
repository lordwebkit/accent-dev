<script setup>
import ABtn from './ABtn.vue';
import { useCartStore } from '@/stores/cart'
const store = useCartStore();

</script>
<template>
  <div class="order">
    <div class="order-inner">
      <h3 class="order__title">Оформление заказа</h3>
      <form class="order__form">
        <div class="order__field">
          <label class="order__label" for="order-name">Ваше имя</label>
          <input class="order__input" type="text" name="name" id="order-name" placeholder="Иван" required>
        </div>
        <div class="order__field">
          <label class="order__label" for="order-name">Ваш номер телефона</label>
          <input class="order__input" type="tel" name="name" id="order-phone" placeholder="+7(999) 999-99-99" required>
        </div>
        <p class="order__price">Итоговая цена: <span class="order__price-number">{{ store.getTotalPrice.toFixed(2) }} USD</span></p>
        <ABtn class="order__put" @click.prevent="">
          Оформить заказ
        </ABtn>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.order {
  &__form {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__label {
    @media (max-width: 970px) {
      font-size: 16px;
    }
  }

  &__input {
    padding: 5px;
    height: 40px;
    @media (max-width: 1040px) {
      margin-top: 10px;
    }
    @media (max-width: 970px) {
      font-size: 16px;
      height: 35px;
    }
  }

  &__field {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    @media (max-width: 1040px) {
      flex-direction: column;
    }
  }

  &__price {
    margin-bottom: 10px;
    @media (max-width: 970px) {
      font-size: 17px;
    }
  }

  &__price-number {
    @media (max-width: 660px) {
      display: block;
    }
  }
}
</style>