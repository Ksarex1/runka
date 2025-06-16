<script setup>
import { ref, provide } from 'vue'
const cart = ref([])

const addToCart = (product) => {
  const existing = cart.value.find(p => p.id === product.id)
  if (existing) {
    existing.count++
  } else {
    cart.value.push({ ...product, count: 1 })
  }
}
const removeFromCart = (id) => {
  cart.value = cart.value.filter(item => item.id !== id)
}

const updateCartItemQuantity = (id, newCount) => {
  const item = cart.value.find(i => i.id === id)
  if (item) {
    item.count = newCount
  }
}

provide('cart', cart)
provide('addToCart', addToCart)
provide('removeFromCart', removeFromCart)
provide('updateCartItemQuantity', updateCartItemQuantity)
</script>

<template>

  <router-view/>

</template>

<style>
</style>