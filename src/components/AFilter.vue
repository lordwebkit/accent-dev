<script setup>
import ACheckbox from './ACheckbox.vue';
import ABtn from './ABtn.vue';
import { useFiltersStore } from '@/stores/filters'
import { useProductsStore } from '@/stores/products'

const store = useFiltersStore();
const storeProducts = useProductsStore();

store.filterBrandsReq();
</script>
<template>
  <div class="filter">
    <div class="filter-inner">
      <h3 class="filter__title">Бренды</h3>
      <div class="filter__brands">
        <div class="filter__brand filter-brand" v-for="(brand, index) in store.getFilterBrands" :key="index">
          <ACheckbox class="filter-brand__checkbox" :checkedId="brand.id" :checkboxChecked="brand.checked"
            :setCheckbox="store.setCheckedBrandFilter" :dataCode="brand.code" />
          <p class="filter-brand__name">{{ brand.title }}</p>
        </div>
      </div>
      <ABtn class="filter__put" @click.prevent="storeProducts.setFilteredProducts(store.getFilterBrands)">Применить</ABtn>
      <button class="filter__undo" @click.prevent="storeProducts.clearFilteredProducts(store.clearFilterBrands)">Сбросить</button>
    </div>
  </div>
</template>
<style lang="scss">
.filter {
  max-width: 400px;

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
  }
}

.filter-brand {
  display: flex;
  margin-bottom: 10px;

  &__name {}
}
</style>