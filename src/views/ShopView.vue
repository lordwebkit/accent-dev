<script setup>
import AFilter from '@/components/AFilter.vue';
import ShopCard from '@/components/ShopCard.vue';
import { ref, computed } from 'vue'
import { useProductsStore } from '@/stores/products';

const store = useProductsStore();
store.productsReq();

const currentPage = ref(1);
const productsPerPage = ref(6);

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage.value;
  const end = start + productsPerPage.value;
  return store.getProducts.slice(start, end);
})

const pageCount = computed(() => {
  const pageCount = Math.ceil(store.getProducts.length / productsPerPage.value)
  return pageCount > 1 ? pageCount : 0
})

const pages = computed(() => {
  let pages = []
  for (let i = 1; i <= pageCount.value; i++) {
    pages.push(i)
  }
  return pages
})
</script>
<template>
  <div class="shop">
    <div class="shop__inner container">
      <AFilter class="shop__filter" />
      <div class="shop-content">
        <div class="shop-content__list">
          <ShopCard class="shop-content__item" v-for="product in displayedProducts" v-bind:key="product.id"
            :productData="product" />
        </div>
        <ul class="shop-content__pagination shop-pagination">
          <li class="shop-pagination__item" v-for="(page, index) in pages" :key="index">
            <a class="shop-pagination__link" :class="{ 'shop-pagination__link--active': currentPage === index + 1 }"
              href="#" @click.prevent="currentPage = index + 1">{{ index + 1 }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shop {
  &__inner {
    display: flex;
    padding-bottom: 10px;

    @media (max-width: 559px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__filter {
    margin-top: 20px;
    flex: 1;
  }
}

.shop-content {
  flex: 2;

  &__list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 50px 0;

    @media (max-width: 1370px) {
      padding: 20px 0 0 20px;
    }

    @media (max-width: 559px) {
      padding-left: 0;
      max-width: 345px;
    }

    @media (max-width: 364px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__item {
    &:not(:nth-child(n + 3)) {
      margin-bottom: 25px;
    }

    &:not(:nth-child(3n)) {
      margin-right: 25px;
    }

    @media (max-width: 1175px) {
      &:not(:nth-child(n + 3)) {
        margin-bottom: 20px;
      }

      &:not(:nth-child(3n)) {
        margin-right: 20px;
      }
    }

    @media (max-width: 795px) {
      &:not(:nth-child(n + 3)) {
        margin-bottom: 15px;
      }

      &:not(:nth-child(3n)) {
        margin-right: 15px;
      }
    }

    @media (max-width: 725px) {
      margin-right: 15px;

      &:nth-child(2n) {
        margin-right: 0;
      }

      &:not(:nth-child(n + 4)) {
        margin-bottom: 15px;
      }
    }

    @media (max-width: 364px) {
      margin-bottom: 15px;

      &:nth-child(n) {
        margin-right: 0;
      }
    }
  }

  &__pagination {
    display: flex;
    justify-content: flex-end;
  }
}

.shop-pagination {
  margin-top: 15px;

  &__item {
    list-style: none;
    width: 15px;
  }

  &__link {
    text-decoration: none;
    color: gray;
    font-weight: bold;

    &--active {
      color: black;
    }

    &:hover {
      cursor: pointer;
      color: black
    }
  }
}
</style>
