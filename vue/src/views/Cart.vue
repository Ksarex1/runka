<script setup>
import Header from "@/components/Header.vue";
import CartItem from "@/components/CartItem.vue";
import { inject } from 'vue'
import {computed, ref} from "vue";
const cartItems = inject('cart')

const clearCart = () => {
  cartItems.value = [];
};

const addProduct = (id) => {
  const product = cartItems.value.find(item => item.id === id);
  if (product) product.count += 1;
};
const minusProduct = (id) => {
  const product = cartItems.value.find(item => item.id === id);
  if (product) product.count -= 1;
  if(product.count<=0){
    cartItems.value = cartItems.value.filter(item => item.id !== id);
  }
};

const deleteProduct = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
};
const totalPrice = computed(() =>
    cartItems.value.reduce((sum, product) => sum + product.price * product.count, 0)
);

</script>

<template>
  <Header/>
  <main>
  <div data-aos="fade-up">
  <section class="bg-[#f0f6ff] flex mt-17 mb-30">
    <div class="container">
      <h2 class="text-[32px] md:text-[45px] font-bold mb-10">Корзина</h2>

      <div class="max-w-full bg-white shadow rounded-lg overflow-hidden">

        <div class="hidden md:grid grid-cols-4 bg-blue-600 text-white h-16 px-6 font-medium text-[16px] items-center">
          <div>ТОВАР</div>
          <div class="text-center">ЦЕНА</div>
          <div class="text-center">КОЛИЧЕСТВО</div>
          <div class="text-right">СТОИМОСТЬ</div>
        </div>
        <div v-if="cartItems.length>0" v-for="(product,index) in cartItems" :key="product.id">
          <CartItem :product="product"
                    @deleteProduct="deleteProduct(product.id)" @addProduct="addProduct(product.id)" @minusProduct="minusProduct(product.id)"/>
        </div>
        <div v-else>
          <p class="text-center my-5">Товаров нет</p>
        </div>


        <div class="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 px-6 pb-6">
          <button :disabled="cartItems.length === 0"
                  class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer w-full md:w-auto">
            Оформить заказ
          </button>
          <p class="text-lg font-bold">Итого: {{totalPrice}} р.</p>
        </div>
      </div>

      <div class="mt-4 text-right">
        <button class="text-sm border rounded px-4 py-1 hover:bg-gray-200 cursor-pointer" @click="clearCart"

        >Очистить
        </button>
      </div>
    </div>
  </section>
  </div>
  </main>
</template>

<style scoped>
button:disabled {
  background-color: #9c9cf6;
  cursor: not-allowed;
}
main{
  padding-top: 40px;
}
</style>
