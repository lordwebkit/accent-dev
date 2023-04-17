<script setup>
import ACheckbox from './ACheckbox.vue';
import ABtn from './ABtn.vue';
</script>
<template>
  <div class="filter">
    <div class="filter-inner">
      <h3 class="filter__title">Бренды</h3>
      <div class="filter__brands">
        <div class="filter__brand filter-brand">
          <ACheckbox class="filter-brand__checkbox" />
          <p class="filter-brand__name">Brand 1</p>
        </div>
        <div class="filter__brand filter-brand">
          <ACheckbox class="filter-brand__checkbox" />
          <p class="filter-brand__name">Brand 2</p>
        </div>
        <div class="filter__brand filter-brand">
          <ACheckbox class="filter-brand__checkbox" />
          <p class="filter-brand__name">Brand 3</p>
        </div>
        <div class="filter__brand filter-brand">
          <ACheckbox class="filter-brand__checkbox" />
          <p class="filter-brand__name">Brand 4</p>
        </div>
      </div>
      <ABtn class="filter__put">Применить</ABtn>
      <button class="filter__undo">Сбросить</button>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
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