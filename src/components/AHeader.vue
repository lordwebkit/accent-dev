<template>
  <header class="header">
    <div class="header-inner container">
      <nav class="header-nav">
        <router-link to="/" class="header-nav__link">Главная</router-link>
        <router-link to="/cart" class="header-nav__link">Корзина</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.header {
  background-color: gray;
  padding: 20px 10px;
}

.header-nav {
  display: flex;
  justify-content: space-between;

  &__link {
    text-decoration: none;
    color: #fff;
  }
}
</style>