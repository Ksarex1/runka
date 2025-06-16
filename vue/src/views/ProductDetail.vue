<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import cards from '../assets/data/product-gos.js';
import Header from '../components/Header.vue';

const route = useRoute();
const productId = Number(route.params.id);

// Находим нужный товар
const product = computed(() => cards.find(item => item.id === productId));
</script>

<template>
  <Header />
  <main>
    <section >
      <div class="container mx-auto px-4 relative">
        <div>
          <router-link to="/gos_ychr"><img src="../assets/img/arrow-left-circle.svg" alt="back" class="absolute top-20 cursor-pointer"></router-link>
        </div>
        <h2 class="font-medium text-3xl mb-10">Программные продукты</h2>

        <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <img
                :src="product.img"
                :alt="product.title"
                class="w-full max-w-full object-contain"
            />
          </div>

          <div>
            <div class="flex gap-1 mb-2">
              <div v-for="n in product.rating" :key="n">
                <img class="w-6 h-6" src="../assets/img/Star.svg" alt="rating" />
              </div>
            </div>
            <h3 class="text-2xl md:text-3xl font-semibold mb-4">{{ product.title }}</h3>
            <p class="text-base md:text-lg mb-8 text-primary3 font-medium">{{ product.desc }}</p>
            <p class="text-lg md:text-xl mb-2">
              Цена: от <strong class="text-2xl md:text-3xl">{{ product.price }} ₽</strong>
            </p>
            <div>
              <button class="text-[18px] py-3 px-8 bg-primary2 text-white rounded-2xl font-bold mt-9 cursor-pointer hover:bg-blue-700 transition">Добавить в корзину</button>
            </div>
          </div>
        </div>

        <div v-else>
          <p>Товар не найден</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  padding-top: 100px;
}
</style>
