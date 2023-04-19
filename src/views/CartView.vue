<script setup>
import AOrder from '../components/AOrder.vue';
import CartCard from '../components/CartCard.vue';
import AModal from '../components/AModal.vue';

import { useCartStore } from '@/stores/cart';
import { useModalCartStore} from '@/stores/modalCart'

const store = useCartStore();
const modalStore = useModalCartStore();
</script>
<template>
  <div class="cart">
    <div class="cart__inner container">
      <h3 class="cart__empty" v-if="!store.getCart.value.length">Корзина пуста, добавьте что нибудь</h3>
      <div class="cart-content" v-else>
        <div class="cart__list cart-list">
          <CartCard class="cart-list__item" v-for="(cartCard, index) in store.getCart.value" :key="index"
            :cart-card-data="cartCard" />
        </div>
        <AOrder class="cart__order"></AOrder>
      </div>
    </div>
    <AModal :open="modalStore.getModalCart.value" :close="modalStore.closeModalCart">Заказ успешно оформлен</AModal>
  </div>
</template>
<style lang="scss" scoped>
.cart {
  &__empty {
    text-align: center;
    margin-top: 160px;
    font-size: 28px;
  }

  &__list {
    flex: 2;
    padding-right: 30px;

    @media (max-width: 570px) {
      padding: 0;
    }
  }

  &__order {
    flex: 1;
    margin-top: 20px;
  }
}

.cart-content {
  display: flex;

  @media (max-width: 570px) {
    flex-direction: column;
  }
}
</style>