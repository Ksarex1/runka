<template>
  <section class="mt-27">
    <div class="container">

      <div class="text-center">
        <h2 class="text-4xl font-bold mb-2.5">{{ t('why_choose.title') }}</h2>
        <p class="mb-10 text-gray-500">{{ t('why_choose.subtitle') }}</p>
      </div>

      <div class="slider-container">
        <Swiper
            :slides-per-view="1"
            :space-between="20"
            :loop="false"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            class="mySwiper"
        >
          <SwiperSlide v-for="(group, index) in slideGroups" :key="index">
            <div class="slide-group">
              <div v-for="(item, idx) in group" :key="idx" class="slide-item">
                <img :src="item.image" alt="Slide" class="slide-image max-sm:scale-75" />
                <p class="slide-title text-primary3">{{ item.title }}</p>
              </div>
            </div>
          </SwiperSlide>

          <div class="swiper-pagination" slot="pagination"></div>
        </Swiper>

      </div>

    </div>
  </section>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination]);

import slide1 from '../assets/img/slide1.png';
import slide2 from '../assets/img/slide2.png';
import slide3 from '../assets/img/slide3.png';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const slides = [
  { image: slide1, title: 'Опыт 10+ лет' },
  { image: slide2, title: 'Индивидуальный подход' },
  { image: slide3, title: 'Быстрое внедрение' },
  { image: slide1, title: 'Повтор 1' },
  { image: slide2, title: 'Повтор 2' },
  { image: slide3, title: 'Повтор 3' },
  { image: slide1, title: 'Повтор 1' },
  { image: slide2, title: 'Повтор 2' },
  { image: slide3, title: 'Повтор 3' },
];

const slideGroups = ref([]);

function groupSlides(chunkSize) {
  const groups = [];
  for (let i = 0; i < slides.length; i += chunkSize) {
    groups.push(slides.slice(i, i + chunkSize));
  }
  slideGroups.value = groups;
}

function updateGroupsBasedOnWidth() {
  const width = window.innerWidth;
  if (width <= 400) {
    groupSlides(2);
  } else {
    groupSlides(3);
  }
}

onMounted(() => {
  updateGroupsBasedOnWidth();
  window.addEventListener('resize', updateGroupsBasedOnWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateGroupsBasedOnWidth);
});
</script>


<style scoped>
.slider-container {
  max-width: 1200px;
  margin: auto;
}

.slide-group {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}

.slide-item {
  flex: 1;
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

.swiper-pagination {
  margin-top: 20px;
  position: relative;
}


</style>
