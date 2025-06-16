<script>
import cardImg1 from '../assets/img/card-img-gos-1.png';
import cardImg2 from '../assets/img/card-img-gos-2.png';
import cardImg3 from '../assets/img/card-img-gos-3.png';
import cardImg4 from '../assets/img/card-img-gos-4.png';
import cardImg5 from '../assets/img/card-img-gos-5.png';
import cardImg6 from '../assets/img/card-img-gos-6.png';
import cardImg7 from '../assets/img/card-img-gos-7.png';
import cardImg8 from '../assets/img/card-img-gos-8.png';
export default {
  name: "Gos_ychr",
  data(){
    return {
      cards: [
        {
          img: cardImg1,
          title: '«1С:Бухгалтерия государственного учреждения 8»',
          price: '22900',
        },
        {
          img: cardImg2,
          title: '«1С:Зарплата и кадры государственного учреждения 8»',
          price: '29900',
        },
        {
          img: cardImg3,
          title: '«1С-Рарус:Комплексный учет питания, ГСМ и автотранспорта»',
          price: '14900',
        },
        {
          img: cardImg4,
          title: '«Закупки. Дополнение к «1С:Бухгалтерия гос.учреждения 8»',
          price: '12900',
        },
        {
          img: cardImg5,
          title: 'Закупки. Дополнение к «1С:Бухгалтерия гос.учреждения 8»',
          price: '9900',
        },
        {
          img: cardImg6,
          title: 'Финансовое планирование. Дополнение к «1С:Бухгалтерия гос.учреждения 8» редакции 2.0',
          price: '35900',
        },
        {
          img: cardImg7,
          title: '"1С:Предприятие 8. Управление целевыми программами"',
          price: '44900',
        },
        {
          img: cardImg8,
          title: '«Закупки. Дополнение к «1С:Бухгалтерия гос.учреждения 8»',
          price: '19900',
        },
      ],
      selectSort: [
        {value: 'price', name: 'По цене (по возрастанию)'},
        {value: 'price1', name: 'По цене (по убыванию)'}
      ],
      selectFilter: [
        {value: 'do', name: 'До 20к'},
        {value: 'posle', name: 'Дороже 20к'}
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
        if (sortField === 'price') {
          const priceA = parseInt(a.price);
          const priceB = parseInt(b.price);
          return isDescending ? priceB - priceA : priceA - priceB;
        }

        return isDescending
            ? b[sortField].localeCompare(a[sortField])
            : a[sortField].localeCompare(b[sortField]);
      });
    },

    searchCards() {
      return this.sortedCards.filter(item => item.title.toLowerCase().includes(this.currentSearch.toLowerCase()) || item.price.toLowerCase().includes(this.currentSearch.toLowerCase()));
    },

    filterCards() {
      return this.searchCards.filter(item => {
        const filter =
            this.selectedFilter === '' ||
            (this.selectedFilter === 'do' && item.price <= 20000) ||
            (this.selectedFilter === 'posle' && item.price > 20000)

        return filter;
      })
    },
  }
}
</script>

<template>
<section class="mt-[100px]">
  <div class="container">
    <div class="head flex justify-between items-center">
      <h2 class="font-medium text-[30px]">Решения 1С для государственных учреждений</h2>
      <div class="params flex justify-between">
        <div class="relative input">
          <span class="absolute left-3 top-1/2 -translate-y-1/2"><img src="@/assets/img/Search.svg"></span>
          <input v-model="currentSearch" type="text" placeholder="Поиск по товарам..." class="pl-10 pr-4 py-2 border w-[247px] h-[29px] rounded-[12px]">
        </div>

        <select class="sort w-[204px] h-[29px] border rounded-[12px] ml-[20px]" v-model="selectedSort">
          <option value=""> Сортировать по...</option>
          <option
              v-for="option in selectSort"
              :key="option.value"
              :value="option.value">
            {{option.name}}
          </option>
        </select>

        <div class="filter-wrapper flex items-center flex-wrap relative">
          <img src="@/assets/img/filter.svg" class="w-4 h-4 absolute -left-4 ml-0 pointer-events-none" />

          <select
              v-model="selectedFilter"
              class="w-[140px] h-[32px] pl-8 pr-2 text-sm border border-gray-300 rounded appearance-none bg-white"
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
      <h2 class="mt-[50px] text-[22px]" v-if="filterCards.length === 0">Результатов нет :(</h2>
      <div class="card bg-white hover:bg-[#FAFAFA] hover:transition-[0.3s] transition-[0.3s] cursor-pointer mt-[50px] w-[342px] h-[416px] border rounded-[8px] border-[#C3C3C3] drop-shadow-xl p-[30px] flex flex-col items-center justify-around" v-for="card in filterCards" :key="card.img">
        <img :src="card.img" :alt="card.title">
        <div class="text">
          <p class="text-[15px] text-[#5F687A]">{{card.title}}</p>
          <div class="prices flex justify-between mt-[14px] items-center">
            <h4 class="text-[24px] font-bold">от {{card.price}} ₽</h4>
            <img src="@/assets/img/cart-1.svg" class=" cursor-pointer">
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.filter-wrapper {
  position: relative;
}

select{
  font-size: 14px;
  color: #5F687A;
}

.filter-wrapper img {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
}

.filter-wrapper select {
  font-size: 16px;
  cursor: pointer;
  appearance: none;
  border: none;
}

.filter-wrapper select option{
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Количество строк */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sort{
  padding-left: 5px;
}

</style>