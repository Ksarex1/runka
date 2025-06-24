<template>
  <section class="mt-[100px]">
    <div class="container relative">

      <div class="mb-13 flex justify-between items-center flex-wrap gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-left">
          {{ t('rating.title') }}
        </h2>
        <div class="md:flex gap-2 hidden ">
          <button
              ref="prevEl"
              class="w-13 h-13 rounded-full border border-[#030303] bg-white text-[#030303] flex items-center justify-center hover:bg-gray-200 transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button
              ref="nextEl"
              class="w-13 h-13 rounded-full border border-blue-600 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

        </div>
      </div>

      <Swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="2"
          :space-between="20"
          :loop="false"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :navigation="{ prevEl: prevEl, nextEl: nextEl }"
          class="mySwiper"
          :breakpoints="breakpoints"
      >
        <SwiperSlide v-for="(item, index) in slides" :key="index">
          <div
              class="slide-item pt-15 px-13 border border-primary3 h-100 max-sm:px-5 "
              :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-primary-dull'"
          >
            <div class="flex justify-between mb-8.5 max-md:items-center max-sm:items-start">
              <div class="flex gap-5 max-sm:flex-col max-sm:items-start">
                <img
                    class="rounded-full w-25 h-25 max-sm:w-15 max-sm:h-15"
                    :src="item.avatar"
                    alt="people"
                />
                <div class="max-sm:text-left">
                  <p
                      class="text-[20px] author"
                      :class="index % 2 === 0 ? 'text-primary-black' : 'text-white'"
                  >
                    {{ item.author }}
                  </p>
                  <p
                      class="work"
                      :class="index % 2 === 0 ? 'text-primary-black' : 'text-white'"
                  >
                    {{ item.work }}
                  </p>
                </div>
              </div>

              <img :src="item.image" alt="comment" class="w-20 h-20 max-md:w-10 max-md:h-10 "/>
            </div>
            <div>
              <p
                  class="comm mb-7"
                  :class="index % 2 === 0 ? 'text-gray-700' : 'text-white'"
              >
                {{ item.comment }}
              </p>
              <div class="flex">
                <img
                    v-for="n in item.rating"
                    :key="n"
                    :src="star"
                    alt="звезда"
                    class="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()


import {ref, onMounted} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import slide1 from "@/assets/img/card-img-1.png";
import image1 from "@/assets/img/comment.png";
import star from "@/assets/img/Star.svg";

const prevEl = ref(null);
const nextEl = ref(null);

const slides = [
  {
    avatar: slide1,
    author: "Вавилова Е.В.",
    work: "Главный бухгалтер",
    comment:
        "Очень довольна сервисом! Всё быстро, понятно и удобно. Буду обращаться снова!",
    image: image1,
    rating: 5,
  },
  {
    avatar: slide1,
    author: "Смирнов И.К.",
    work: "Инженер",
    comment:
        "Отличное качество и внимание к деталям. Спасибо за вашу работу!",
    image: image1,
    rating: 4,
  },
  {
    avatar: slide1,
    author: "Николаева А.П.",
    work: "Маркетолог",
    comment:
        "Сначала сомневалась, но теперь рекомендую всем друзьям!",
    image: image1,
    rating: 3,
  },
  {
    avatar: slide1,
    author: "Иванов П.О.",
    work: "Разработчик",
    comment:
        "Всё супер, но хотелось бы побольше акций и скидок!",
    image: image1,
    rating: 4,
  },
  {
    avatar: slide1,
    author: "Петрова Е.А.",
    work: "HR-менеджер",
    comment:
        "Очень клиентоориентированная компания. Молодцы!",
    image: image1,
    rating: 5,
  },
];

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  900: {
    slidesPerView: 2
  }
};
</script>

<style>
.author {
  font-weight: 600;
}

.work {
  font-weight: 400;
}

.comm {
  font-style: italic;
  font-weight: 400;
  line-height: 152%;
}

</style>
