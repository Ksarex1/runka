<script setup>
import { useRoute } from 'vue-router';
import { computed, inject } from 'vue';
import cards1 from '../assets/data/product-gos.js';
import cards2 from '../assets/data/product-zdravoohrana.js';
import cards3 from '../assets/data/product-services.js';
import { isAuthenticated } from '../auth.js';
import Header from '../components/Header.vue';

defineProps({
  id: {
    type: [String, Number],
    required: false
  }
});

const route = useRoute();
const productId = Number(route.params.id);

const cards = computed(() => {
  const firstSegment = route.path.split('/').filter(Boolean)[0];
  if (firstSegment === '1c-gos') return cards1;
  if (firstSegment === '1c-zdravoohrana') return cards2;
  if (firstSegment === '1c-services') return cards3;
  return [];
});

const product = computed(() => cards.value.find(item => item.id === productId) || null);

const cart = inject('cart');
const addToCart = inject('addToCart');
const updateCartItemQuantity = inject('updateCartItemQuantity');
const removeFromCart = inject('removeFromCart');

const isInCart = (product) => {
  return cart.value.some(item => item.id === product.id);
};

const getCartItem = (product) => {
  return cart.value.find(item => item.id === product.id);
};

const handleAddToCart = (product) => {
  if (!isInCart(product)) {
    addToCart({ ...product, count: 1 });
  }
};

const incrementQuantity = (product) => {
  const cartItem = getCartItem(product);
  if (cartItem) {
    updateCartItemQuantity(cartItem.id, cartItem.count + 1);
  }
};

const decrementQuantity = (product) => {
  const cartItem = getCartItem(product);
  if (cartItem) {
    if (cartItem.count > 1) {
      updateCartItemQuantity(cartItem.id, cartItem.count - 1);
    } else {
      removeFromCart(cartItem.id);
    }
  }
};

const parentRoute = computed(() => {
  const segments = route.path.split('/').filter(Boolean);
  return segments.length > 0 ? `/${segments[0]}` : '/';
});
</script>

<template>
  <Header />
  <main>
    <section>
      <div class="container mx-auto px-4 relative">
        <div>
          <router-link :to="parentRoute">
            <img src="../assets/img/arrow-left-circle.svg" alt="back" class="absolute top-20 cursor-pointer" />
          </router-link>
        </div>
        <h2 class="font-bold text-4xl mb-10">Программные продукты</h2>

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

            <div class="flex justify-between items-center w-full mt-3.5" v-if="isAuthenticated">
              <div v-if="!isInCart(product)">
                <button
                    class="bg-primary2 py-2 px-8 cursor-pointer text-white font-medium rounded-lg text-[18px] mt-9 hover:bg-blue-700 transition"
                    @click="handleAddToCart(product)"
                >
                  Добавить в корзину
                </button>
              </div>

              <div v-else class="flex items-center gap-3 mt-9">
                <button
                    @click="decrementQuantity(product)"
                    class="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300 text-xl font-bold"
                    type="button"
                >
                  −
                </button>
                <span>{{ getCartItem(product).count }}</span>
                <button
                    @click="incrementQuantity(product)"
                    class="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300 text-xl font-bold"
                    type="button"
                >
                  +
                </button>
              </div>
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
