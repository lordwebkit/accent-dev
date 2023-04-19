<script setup>
import ACheckbox from './ACheckbox.vue';
import ABtn from './ABtn.vue';
import { useFiltersStore } from '@/stores/filters'
import { useProductsStore } from '@/stores/products'
import { ref } from 'vue'

const store = useFiltersStore();
const storeProducts = useProductsStore();
let showAllBrands = ref(false);

store.filterBrandsReq();

function clearFilteredProducts() {
  store.clearFilterBrands();
  storeProducts.clearFilteredProducts();
}
</script>
<template>
  <div class="filter">
    <div class="filter-inner">
      <h3 class="filter__title">Бренды</h3>
      <div class="filter__brands">
        <div class="filter__brand filter-brand" v-for="(brand, index) in store.getFilterBrands" :key="index">
          <div class="filter-brand__inner" v-if="index < 5 || showAllBrands">
            <ACheckbox class="filter-brand__checkbox" :checkedId="brand.id" :checkboxChecked="brand.checked"
              :setCheckbox="store.setCheckedBrandFilter" :dataCode="brand.code" />
            <p class="filter-brand__name">{{ brand.title }}</p>
          </div>
        </div>
        <button class="filter-brand__show-all" @click.prevent="showAllBrands = !showAllBrands">{{ showAllBrands ? "Скрыть" : "Показать" }} все</button>
      </div>
      <ABtn class="filter__put" @click.prevent="storeProducts.setFilteredProducts(store.getFilterBrands)">Применить</ABtn>
      <button class="filter__undo" @click.prevent="clearFilteredProducts()">Сбросить</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.filter {
  max-width: 400px;

  @media (max-width: 1293px) {
    max-width: 350px;
  }

  @media (max-width: 1243px) {
    max-width: 300px;
  }

  @media (max-width: 1075px) {
    max-width: 250px;
  }

  @media (max-width: 1020px) {
    max-width: 200px;
  }

  @media (max-width: 775px) {
    max-width: 180px;
  }

  @media (max-width: 755px) {
    max-width: 150px;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__put {
    margin-bottom: 10px;
  }

  &__undo {
    border: none;
    background-color: #fff;
    cursor: pointer;
    margin: 0 auto;
    display: block;
    text-decoration: underline;

    @media (max-width: 1020px) {
      font-size: 14px;
    }
  }
}

.filter-brand {
  display: flex;

  &__name {
    margin-bottom: 10px;
    @media (max-width: 1020px) {
      font-size: 16px;
    }
  }

  &__inner {
    display: flex;
  }

  &__show-all {
    font-size: 16px;
    margin-bottom: 20px;
    border: none;
    background-color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>