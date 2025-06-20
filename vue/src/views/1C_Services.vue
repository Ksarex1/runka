<script>
import cards from "../assets/data/product-services.js"
import ContentRendererPrograms from "@/components/ContentRenderer-Programs.vue";
import {isAuthenticated} from '../auth.js'

export default {
  name: "Gos_ychr",
  inject: ['addToCart', 'cart', 'removeFromCart', 'updateCartItemQuantity'],
  components: { ContentRendererPrograms },

  data() {
    return {
      isAuthenticated,
      cards: cards,
      selectSort: [
        { value: 'price', name: 'По цене (по возрастанию)' },
        { value: 'price1', name: 'По цене (по убыванию)' },
        { value: 'rating', name: 'По рейтингу (по возрастанию)' },
        { value: 'rating1', name: 'По рейтингу (по убыванию)' }
      ],
      selectFilter: [
        { value: 'do', name: 'До 20к' },
        { value: 'posle', name: 'Дороже 20к' }
      ],
      selectedSort: "",
      currentSearch: '',
      selectedFilter: ''
    }
  },

  methods: {
    isInCart(product) {
      return Array.isArray(this.cart) && this.cart.some(item => item.id === product.id);
    },

    getCartItem(product) {
      return Array.isArray(this.cart) ? this.cart.find(item => item.id === product.id) : null;
    },

    handleAddToCart(product) {
      if (!this.isInCart(product)) {
        this.addToCart({ ...product, count: 1 });
      }
    },

    incrementQuantity(product) {
      const cartItem = this.getCartItem(product);
      if (cartItem) {
        this.updateCartItemQuantity(cartItem.id, cartItem.count + 1);
      }
    },

    decrementQuantity(product) {
      const cartItem = this.getCartItem(product);
      if (cartItem) {
        if (cartItem.count > 1) {
          this.updateCartItemQuantity(cartItem.id, cartItem.count - 1);
        } else {
          this.removeFromCart(cartItem.id);
        }
      }
    }
  },

  computed: {
    sortedCards() {
      if (!this.selectedSort) return this.cards;

      const sortField = this.selectedSort.replace('1', '');
      const isDescending = this.selectedSort.endsWith('1');

      return [...this.cards].sort((a, b) => {
        if (typeof a[sortField] === 'number') {
          return isDescending ? b[sortField] - a[sortField] : a[sortField] - b[sortField];
        }
        return isDescending
            ? b[sortField].localeCompare(a[sortField])
            : a[sortField].localeCompare(b[sortField]);
      });
    },

    searchCards() {
      return this.sortedCards.filter(item =>
          item.title.toLowerCase().includes(this.currentSearch.toLowerCase()) ||
          item.price.toString().includes(this.currentSearch)
      );
    },

    filterCards() {
      return this.searchCards.filter(item => {
        return this.selectedFilter === '' ||
            (this.selectedFilter === 'do' && item.price <= 20000) ||
            (this.selectedFilter === 'posle' && item.price > 20000);
      });
    }
  }
}
</script>

<template>
  <ContentRendererPrograms>
    <section>
      <div class="container">
        <div class="head flex justify-between items-center flex-wrap gap-4">
          <h2 class="font-medium text-[30px]">
            Решения 1С для государственных учреждений
          </h2>
          <div class="params flex flex-wrap gap-4 items-center">
            <div class="relative input">
              <span class="absolute left-3 top-1/2 -translate-y-1/2">
                <img src="@/assets/img/Search.svg" alt="search-icon"/>
              </span>
              <input
                  v-model="currentSearch"
                  type="text"
                  placeholder="Поиск по товарам..."
                  class="pl-10 pr-4 py-2 border w-[247px] h-[29px] rounded-[12px]"
              />
            </div>

            <select
                class="sort w-[204px] h-[29px] border rounded-[12px]"
                v-model="selectedSort"
            >
              <option value="">Сортировать по...</option>
              <option
                  v-for="option in selectSort"
                  :key="option.value"
                  :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>

            <div class="filter-wrapper relative">
              <img
                  src="@/assets/img/filter.svg"
                  alt="filter-icon"
                  class="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <select
                  v-model="selectedFilter"
                  class="pl-8 pr-2 text-sm border border-gray-300 rounded appearance-none bg-white w-[140px] h-[32px]"
              >
                <option value="">Фильтры</option>
                <option
                    v-for="option in selectFilter"
                    :key="option.value"
                    :value="option.value"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          <h2 class="col-span-full text-center text-xl sm:text-2xl py-10" v-if="filterCards.length === 0">
            Результатов нет :(
          </h2>

          <div
              v-for="card in filterCards"
              :key="card.img"
              class="bg-white hover:bg-gray-50 transition-colors duration-300 cursor-pointer rounded-lg border border-gray-300 shadow-xl p-8 flex flex-col items-center justify-between h-[416px]"
          >
            <router-link
                :to="{ name: 'ProductDetailServices', params: { id: card.id } }"
                class="flex flex-col items-center justify-between h-full"
            >
              <img :src="card.img" :alt="card.title" class="w-full h-auto object-contain"/>
              <div class="w-full">
                <div class="flex gap-1 mb-2">
                  <img
                      v-for="m in card.rating"
                      :key="m"
                      src="../assets/img/Star.svg"
                      alt="rate"
                      class="w-4 h-4"
                  >
                </div>
                <p class="text-gray-600 text-sm">{{ card.title }}</p>
              </div>
            </router-link>

            <div class="flex justify-between items-center w-full mt-3.5">
              <h4 class="text-xl font-bold">от {{ card.price }} ₽</h4>
              <div v-if="isAuthenticated">
                <div v-if="!isInCart(card)">
                  <img
                      @click="handleAddToCart(card)"
                      src="../assets/img/cart-1.svg"
                      alt="add to cart"
                      class="cursor-pointer"
                  />
                </div>

                <div v-else class="flex items-center gap-3">
                  <button
                      @click="decrementQuantity(card)"
                      class="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300 text-xl font-bold"
                      type="button"
                  >
                    −
                  </button>
                  <span>{{ getCartItem(card).count }}</span>
                  <button
                      @click="incrementQuantity(card)"
                      class="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300 text-xl font-bold"
                      type="button"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  </ContentRendererPrograms>
</template>

<style scoped>
select{
  border: #717171 1px solid;
}
.filter-wrapper select {
  font-size: 16px;
  cursor: pointer;
  appearance: none;
}

.filter-wrapper option {
  font-size: 14px;
}
</style>
