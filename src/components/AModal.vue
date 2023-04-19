<script setup>
const props = defineProps(['open', 'close'])
</script>
<template>
  <div class="modal-wrapper" v-if="props.open">
    <div class="modal">

      <div class="modal__inner">
        <button class="modal__close" @click.prevent="close()">X</button>
        <div class="modal__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-wrapper {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgb(128, 128, 128, 0.7);
}

.modal {
  width: 20%;
  height: 50%;
  min-width: 300px;
  background-color: #fff;
  position: relative;

  &__inner {
    padding: 10px;
    height: 100%;
  }

  &__close {
    position: absolute;
    right: 15px;
    border: none;
    background-color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  &__content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>