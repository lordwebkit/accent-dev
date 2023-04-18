<script setup>
import { useCartStore } from '../stores/cart';
const store = useCartStore();
const cart = store.getCart.value
</script>

<template>
  <header class="header">
    <div class="header-inner container">
      <nav class="header-nav">
        <router-link to="/" class="header-nav__link">Главная</router-link>
        <router-link to="/cart" class="header-nav__link header-nav-cart">
          Корзина
          <img class="header-nav-cart__icon" src="../assets/icons/cart.svg" alt="bag icon">
          <transition name="fade">
            <span v-if="cart.length" class="header-nav-cart__amount">{{ cart.length }}</span>
          </transition>
        </router-link>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  background-color: gray;
  padding: 15px 10px;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__link {
    text-decoration: none;
    color: #fff;
  }
}

.header-nav-cart {
  display: flex;
  align-items: center;
  position: relative;

  &__icon {
    margin-left: 10px;
    width: 35px;
  }

  &__amount {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s ease;
    width: 25px;
    height: 25px;
    background-color: #fff;
    color: #887977;
    border-radius: 50%;
    position: absolute;
    right: -10px;
    bottom: -9px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>