<template>
  <Header/>
  <div data-aos="">
    <main>

  <section class="mt-[70px] mb-[70px]">
    <div class="container flex flex-col">
      <div class="head">
        <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px]">Программные продукты</h2>
        <div class="lg:hidden mt-[21px] relative z-50">
          <button @click="menuOpen = !menuOpen" class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded shadow transition">
            <svg
                class="w-6 h-6 transform transition-transform duration-300"
                :class="{ 'rotate-90': menuOpen }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <p>{{ menuOpen ? 'Закрыть меню' : 'Открыть меню' }}</p>
          </button>

          <transition name="slide-fade">
            <div
                v-if="menuOpen"
                class="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 text-black"
            >
              <router-link to="/1c-gos"><Button1 id="butt" v-if="route.path === '/1c-gos'">Решения 1С для гос. учреждений</Button1></router-link>
              <router-link to="/1c-gos"><Button2 id="butt" v-if="route.path !== '/1c-gos'">Решения 1С для гос. учреждений</Button2></router-link>

              <router-link to="/1c-zdravoohrana" v-if="route.path === '/1c-zdravoohrana'"><Button1 id="butt">Решения 1С для здравоохранения</Button1></router-link>
              <router-link to="/1c-zdravoohrana" v-if="route.path !== '/1c-zdravoohran'"><Button2 id="butt">Решения 1С для здравоохранения</Button2></router-link>

              <router-link to="/blagodar"><Button1 id="butt">Сервисы 1С</Button1></router-link>
              <router-link to="/blagodar"><Button2 id="butt">Сервисы 1С</Button2></router-link>

              <router-link to="/rabota_runa"><Button1 id="butt">Клиентские лицензии 1С</Button1></router-link>
              <router-link to="/rabota_runa"><Button2 id="butt">Клиентские лицензии 1С</Button2></router-link>

              <router-link to="/politika"><Button1 id="butt">Лицензии на сервер 1С</Button1></router-link>
              <router-link to="/politika"><Button2 id="butt">Лицензии на сервер 1С</Button2></router-link>

            </div>
          </transition>
        </div>

        <!-- Десктопное меню -->
        <div class="buttons hidden lg:flex justify-between mt-[21px] md:w-[100%]">
          <router-link to="/1c-gos"><Button1 id="butt" v-if="route.path === '/1c-gos'">Решения 1С для гос. учреждений</Button1></router-link>
          <router-link to="/1c-gos"><Button2 id="butt" v-if="route.path !== '/1c-gos'">Решения 1С для гос. учреждений</Button2></router-link>

          <router-link to="/1c-zdravoohrana"><Button1 id="butt" v-if="route.path === '/1c-zdravoohrana'">Решения 1С для здравоохранения</Button1></router-link>
          <router-link to="/1c-zdravoohrana"><Button2 id="butt" v-if="route.path !== '/1c-zdravoohrana'">Решения 1С для здравоохранения</Button2></router-link>

          <router-link to="/blagodar"><Button1 id="butt" v-if="route.path !== '/1c-gos'">Сервисы 1С</Button1></router-link>
          <router-link to="/blagodar"><Button2 id="butt">Сервисы 1С</Button2></router-link>

          <router-link to="/rabota_runa"><Button1 id="butt" v-if="route.path !== '/1c-gos'">Клиентские лицензии 1С</Button1></router-link>
          <router-link to="/rabota_runa"><Button2 id="butt">Клиентские лицензии 1С</Button2></router-link>


          <router-link to="/politika"><Button1 id="butt" v-if="route.path !== '/1c-gos'">Лицензии на сервер 1С</Button1></router-link>
          <router-link to="/politika"><Button2 id="butt">Лицензии на сервер 1С</Button2></router-link>
        </div>
      </div>

      <section class="osnova mt-[40px] pt-[43px] border-t border-t-[#E9E9E9] border-t-[1px]">
          <div class="container">
            <div class="head flex justify-between items-center flex-wrap gap-4">
              <h2 class="font-medium text-[30px]">
                Решения 1С для государственных учреждений
              </h2>
              <div class="params flex flex-wrap gap-4 items-center">
                <div class="relative input">
              <span class="absolute left-3 top-1/2 -translate-y-1/2">
                <img src="@/assets/img/Search.svg"/>
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
                    :to="{ name: 'ProductDetail', params: { id: card.id } }"
                    class="flex flex-col items-center justify-between h-full"
                >
                  <img :src="card.img" :alt="card.title" class="w-full h-auto object-contain"/>
                  <div class="w-full">
                    <p class="text-gray-600 text-sm">{{ card.title }}</p>
                  </div>
                </router-link>
                <div class="flex justify-between items-center w-full mt-3.5">
                  <h4 class="text-xl font-bold">от {{ card.price }} ₽</h4>
                  <div v-if="isAuthenticated">
                    <div v-if="!isInCart(card)">
                      <img @click="handleAddToCart(card)" src="../assets/img/cart-1.svg" alt="">
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
    </div>

  </section>
    </main>

    <Footer/>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button2 from "@/components/button-2.vue";
import Button1 from "@/components/button-1.vue";
import {inject} from 'vue'
import {isAuthenticated} from '../auth.js'

export default {
  name: "ContentPrograms",
  components: {
    Header,
    Footer,
    Button1,
    Button2,
  },
  props: {
    cards: Object,
  },

  inject: ['addToCart', 'cart', 'removeFromCart', 'updateCartItemQuantity'],

  setup() {
    const route = useRoute();
    const menuOpen = ref(false);
    return { menuOpen, route };
  },

  data() {
    return {
      isAuthenticated,
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
    };
  },

  methods: {
    isInCart(product) {
      return this.cart.some(item => item.id === product.id);
    },
    getCartItem(product) {
      return this.cart.find(item => item.id === product.id);
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
};

</script>

<style scoped>
.filter-wrapper select {
  font-size: 16px;
  cursor: pointer;
  appearance: none;
}

.filter-wrapper option {
  font-size: 14px;
}
main{
  padding-top: 30px;
}
.group{
  list-style: none;
}

.list-disc li{
  color: #5F687A;
  font-size: 20px;
}

h2{
  display: inline-block;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1536px) {
  .list-disc li{
    font-size: 20px;
  }
}

@media (max-width: 1280px) {
  .list-disc li{
    font-size: 18px;
  }
}

@media (max-width: 1024px) {
  .list-disc li{
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .list-disc li{
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .list-disc li, .text1, .text2{
    font-size: 14px;
  }

  .h2-razdel{
    font-size: 20px;
  }

  #butt{
    font-size: 14px;
  }
}


</style>