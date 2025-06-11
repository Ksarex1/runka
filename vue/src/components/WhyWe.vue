<template>
  <section class="mt-27">
    <div class="container">
      <div class="text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2.5">
          Почему выбирают Руна С
        </h2>
        <p class="mb-7 max-sm:mb-2 text-gray-500 max-sm:text-[14px]">
          Мы помогаем расти бизнесу с 2002 года
        </p>
      </div>

      <div class="slider-container">
        <Swiper
            :modules="[Autoplay, Pagination]"
            :slides-per-view="3"
            :space-between="30"
            :loop="false"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :breakpoints="{
            0: { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            640: { slidesPerView: 3 }
          }"
            class="mySwiper relative"
        >
          <SwiperSlide v-for="(item, index) in slides" :key="index">
            <div class="slide-item">
              <img :src="item.image" alt="Slide" class="slide-image max-sm:scale-75" />
              <p class="slide-title text-primary3">{{ item.title }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';

// Стили Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Картинки
import slide1 from '../assets/img/slide1.png';
import slide2 from '../assets/img/slide2.png';
import slide3 from '../assets/img/slide3.png';

// Данные
const slides = [
  { image: slide1, title: 'Опыт 10+ лет' },
  { image: slide2, title: 'Индивидуальный подход' },
  { image: slide3, title: 'Быстрое внедрение' },
  { image: slide1, title: 'Повтор 1' },
  { image: slide2, title: 'Повтор 2' },
];
</script>

<style scoped>
.slider-container {
  max-width: 1200px;
  margin: auto;
}

.mb-10 {
  margin-bottom: 20px;
}

.slide-item {
  text-align: center;
}

.slide-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: auto;
  border-radius: 8px;
}

.slide-title {
  margin-top: 10px;
  font-weight: 600;
}

::v-deep .swiper-pagination {
  margin-top: 30px; /* Установи нужное значение */
  position: static; /* Чтобы она не была position: absolute */
  text-align: center;
}


@media (max-width: 640px) {
  .mb-10 {
    margin-bottom: 10px;
  }
}
</style>