import { ref, computed } from 'vue'
import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const getCart = computed(() => cart)
  const getQuantityCartCard = computed(() => {
    return cart.value.reduce((acc, cartCard) => {
      return (acc + cartCard.quantity);
    }, 0)
  })
  const getTotalPrice = computed(() => {
    return cart.value.reduce((acc, cartCard) => {
      return (acc + (cartCard.regular_price.value * cartCard.quantity));
    }, 0);
  });

  function addToCart(product) {
    const persense = cart.value.map(cartCard => cartCard.id).indexOf(product.id)
    if (persense === -1) {
      cart.value = [...cart.value, { ...product, quantity: 1 }]
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

  function clearCart() {
    cart.value.length = 0;
  }

  return { getCart, getTotalPrice, getQuantityCartCard, addToCart, incrementCartCard, decrementCartCard, clearCart }
})

