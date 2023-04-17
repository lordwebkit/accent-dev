<template>
  <div class="shop">
    <div class="shop__inner container">
      <AFilter class="shop__filter" />
      <div class="shop-content">
        <div class="shop-content__list">
          <ShopCard v-for="product in displayedProducts" v-bind:key="product.id" :productData="product" />
        </div>
        <ul class="shop-content__pagination shop-pagination">
          <li class="shop-pagination__item" v-for="(page, index) in pages" :key="index">
            <a class="shop-pagination__link" :class="{ 'shop-pagination__link--active': currentPage === index + 1 }" href="#" @click.prevent="currentPage = index + 1">{{ index + 1 }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import AFilter from '@/components/AFilter.vue';
import ShopCard from '@/components/ShopCard.vue';
import { useProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia';


const store = useProductsStore();
store.getProducts();

const { productsData } = storeToRefs(store)

const currentPage = ref(1);
const productsPerPage = ref(6);

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage.value;
  const end = start + productsPerPage.value;
  return productsData.value.slice(start, end);
})

const pageCount = computed(() => {
  const pageCount = Math.ceil(productsData.value.length / productsPerPage.value)
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
<style lang="scss" scoped>
.shop {
  &__inner {
    display: flex;
    height: calc(100vh - 63px);
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
    justify-content: space-around;
    height: 90%;
    padding: 20px 50px 0;
  }

  &__pagination {
    display: flex;
    justify-content: flex-end;
  }
}

.shop-pagination {
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
