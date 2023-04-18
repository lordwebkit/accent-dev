import { ref, computed } from 'vue'
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const getCart = computed(() => cart)

  function addToCart(product) {
    const persense = cart.value.map(cartCard => cartCard.id).indexOf(product.id)
    if (persense === -1) {
      cart.value.push({ ...product, quantity: 1 })
    } else {
      cart.value[persense].quantity++
    }
  }

  function incrementCartCard(product) {
    if (product.quantity < 10) product.quantity++
  }

  function decrementCartCard(product) {
    if (product.quantity > 1) product.quantity--
  }

  return { getCart, addToCart, incrementCartCard, decrementCartCard }
})

