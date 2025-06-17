<script setup>
defineProps({
  product:Object,
})
</script>

<template>
  <div class="bg-gray-50 border-b border-gray-200 p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
    <div class="flex items-center gap-4">
      <img :src="product.img" alt="1С" class="w-20 h-20 object-contain" />
      <div>
        <p class="font-semibold text-[18px] md:text-[20px]">{{product.title}}</p>
        <button class="text-sm text-blue-600 hover:underline cursor-pointer" @click="$emit('deleteProduct')">Удалить</button>
      </div>
    </div>
    <div class="text-center font-semibold md:mt-0 mt-2">{{ product.price }} р.</div>
    <div class="flex justify-center items-center gap-1">
      <button class="bg-blue-600 text-white px-2 py-1 rounded cursor-pointer" @click="$emit('minusProduct')">-</button>
      <input type="text" :value="product.count" class="w-10 text-center border rounded" />
      <button class="bg-blue-600 text-white px-2 py-1 rounded cursor-pointer" @click="$emit('addProduct')">+</button>
    </div>
    <div class="text-right font-semibold text-lg">{{ product.count * product.price }} р.</div>
  </div>
</template>

<style scoped>

</style>