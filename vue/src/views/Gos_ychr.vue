<script>
import cards from "../assets/data/product-gos.js"
import ContentRendererPrograms from "@/components/ContentRenderer-Programs.vue";

export default {
  name: "Gos_ychr",
  components: { ContentRendererPrograms },
  data() {
    return {
      cards,
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
    <section class="">
      <div class="container">
        <div class="head flex justify-between items-center flex-wrap gap-4">
          <h2 class="font-medium text-[30px]">
            Решения 1С для государственных учреждений
          </h2>
          <div class="params flex flex-wrap gap-4 items-center">
            <div class="relative input">
              <span class="absolute left-3 top-1/2 -translate-y-1/2">
                <img src="@/assets/img/Search.svg" />
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

        <div class="cards flex flex-wrap justify-between">
          <h2 class="mt-[50px] text-[22px]" v-if="filterCards.length === 0">
            Результатов нет :(
          </h2>
          <div
              class="card bg-white hover:bg-[#FAFAFA] transition-[0.3s] cursor-pointer mt-[50px] w-[342px] h-[416px] border rounded-[8px] border-[#C3C3C3] drop-shadow-xl p-[30px] flex flex-col items-center justify-around"
              v-for="card in filterCards"
              :key="card.id"
          >
            <router-link
                :to="{ name: 'ProductDetail', params: { id: card.id } }"
                class="flex flex-col items-center text-center"
            >
              <img :src="card.img" :alt="card.title" class="mb-4 max-h-[160px]" />
              <p class="text-[15px] text-[#5F687A]">{{ card.title }}</p>
              <div class="prices flex justify-between mt-[14px] items-center w-full px-4">
                <h4 class="text-[24px] font-bold">от {{ card.price }} ₽</h4>
                <img src="@/assets/img/cart-1.svg" class="cursor-pointer" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </ContentRendererPrograms>
</template>

<style scoped>
.filter-wrapper select {
  font-size: 16px;
  cursor: pointer;
  appearance: none;
}

.filter-wrapper option {
  font-size: 14px;
}
</style>
