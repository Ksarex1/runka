<script>
import img1 from "../assets/img/card-img-1.png"
import img2 from "../assets/img/card-img-2.png"
import img3 from "../assets/img/card-img-3.png"
import img4 from "../assets/img/card-img-4.png"
export default {
  name: "category",
  data() {
    return {
      categories: [
        {
          title: 'Решения 1С для госучреждений',
          text: 'Решения 1С для госучреждений — это специализированные продукты для учета...',
          img: img1,
          link: '/1c-gos',
          alt: 'Сопровождение 1С'
        },
        {
          title: 'Решения 1С для здравоохранения',
          text: 'Решения 1С для здравоохранения — это программные продукты для автоматизации медицинских...',
          img: img2,
          link: '/1c-zdravoohrana',
          alt: 'Обновление 1С'
        },
        {
          title: 'Cервисы 1С',
          text: 'Сервисы 1С — это дополнительные онлайн-инструменты и сервисы, расширяющие...',
          img: img3,
          link: '/1c-services',
          alt: 'Настройка 1С'
        },
        {
          title: 'Учебный центр КУБиК',
          text: 'Учебный центр КУБиК — это центр профессионального обучения, специализирующийся на...',
          img: img4,
          link: '/news',
          alt: 'Обучение 1С'
        }
      ]
    }
  }
}
</script>

<template>
  <section class="mt-[100px] px-4 sm:px-6 lg:px-8 xl:px-0">
    <div class="container mx-auto">
      <h2 class="text-[36px] font-medium mb-10 text-[#030303]">Популярные категории</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <div
            v-for="(category, index) in categories"
            :key="index"
            class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]"
        >
          <div class="w-full h-[210px] overflow-hidden">
            <img :src="category.img" class="w-full h-full object-cover" :alt="category.alt">
          </div>
          <div class="text w-full h-[155px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[85%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">{{ category.title }}</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">{{ category.text }}</p>
              </div>
              <router-link :to="category.link">
                <button class="cursor-pointer self-center">
                  <img src="../assets/img/arrow-right.png" class="w-6 h-6" alt="Подробнее">
                </button>
              </router-link>
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

  .text {
    height: 135px;
  }
}
</style>
