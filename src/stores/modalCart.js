import { computed, ref } from 'vue'
import { defineStore } from "pinia";
import { useCartStore } from "@/stores/cart";
const cart = useCartStore();
import router from '@/router';

export const useModalCartStore = defineStore('modalCart', () => {
  const modalCart = ref(false);
  const getModalCart = computed(() => modalCart)
  function openModalCart() {
    modalCart.value = true
  }
  function closeModalCart() {
    modalCart.value = false;
    cart.clearCart();
    router.push({ path: '/' })
  }

  return { getModalCart, openModalCart, closeModalCart }
})