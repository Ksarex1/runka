<script>
import news1 from '../assets/img/news-1.png';
import news2 from '../assets/img/news-2.png';
import news3 from '../assets/img/news-3.png';
import news4 from '../assets/img/news-4.png';

export default {
  name: "News",
  data() {
    return {
      newsList: [
        {
          title: 'С Праздником Весны!',
          text: 'Дорогие, милые, трепетные, самые прекрасные, добрые, умные...',
          date: 'Jan 30, 2025',
          image: news1
        },
        {
          title: 'Предложение на 2025 год от Клуба Уникальных Бухгалтеров и Консультантов «Будь в курсе»',
          text: '',
          date: 'Jan 30, 2025',
          image: news2
        },
        {
          title: 'С Новым 2025 годом и Рождеством!',
          text: 'Дорогие коллеги, партнёры и сотрудники! Поздравляем с...',
          date: 'Jan 30, 2025',
          image: news3
        },
        {
          title: 'Проверка информационной базы',
          text: 'В ноябре и декабре всем клиентам мы предлагаем проверку...',
          date: 'Jan 30, 2025',
          image: news4
        }
      ]
    }
  }
}
</script>

<template>
  <section class="mt-[100px]">
    <div class="container">
      <h2 class="text-[36px] font-medium mb-10 text-[#030303]">Последние новости</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-10">
        <div
            v-for="(news, index) in newsList"
            :key="index"
            class="drop-shadow-xl relative w-full sm:w-[320px] lg:w-[330px] xl:w-[342px] h-[365px]"
        >
          <div class="w-full h-[210px] overflow-hidden">
            <img :src="news.image" class="w-full h-full object-cover" alt="Новость">
          </div>
          <div class="text w-full h-[170px] px-4 py-5 bg-white">
            <div class="flex justify-between flex-col h-full">
              <div>
                <h4 class="font-medium text-[18px] xl:text-[18px] text-[#030303]">{{ news.title }}</h4>
                <p
                    v-if="news.text"
                    class="font-normal text-[16px] xl:text-[13px] md:text-[14px] sm:text-[12px] text-[#5F687A] mt-2"
                >
                  {{ news.text }}
                </p>
              </div>
              <div class="bottom flex justify-between">
                <h5 class="font-medium text-[#030303] text-[16px] md:text-[15px] sm:text-[14px]">{{ news.date }}</h5>
                <button class="text-[#005DFF] font-bold text-[16px] md:text-[15px] sm:text-[14px] cursor-pointer">
                  Подробнее ->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 640px) {
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 10px;
  }
  h4 {
    font-size: 14px;
  }
  h5,
  button {
    font-size: 13px;
  }
}
</style>
