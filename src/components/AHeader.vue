<script setup>
import { useCartStore } from '../stores/cart';
const store = useCartStore();
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
            <span v-if="store.getQuantityCartCard" class="header-nav-cart__amount">{{ store.getQuantityCartCard }}</span>
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
    @media (max-width: 970px) {
      font-size: 16px;
    }
  }
}

.header-nav-cart {
  display: flex;
  align-items: center;
  position: relative;

  &__icon {
    margin-left: 10px;
    width: 35px;
    @media (max-width: 970px) {
      width: 30px;
    }
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
    @media (max-width: 970px) {
      width: 20px;
      height: 20px;
      right: -8px;
      bottom: -7px;
      font-size: 14px;
    }
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