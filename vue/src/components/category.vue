<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="mt-[100px] px-4 sm:px-6 lg:px-8 xl:px-0">
    <div class="container mx-auto">
      <h2 class="text-[36px] font-medium mb-10  text-[#030303]">{{ t('category.title') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-1.png"
                 class="w-full h-full object-cover"
                 alt="Сопровождение 1С">
          </div>
          <div class="text w-full h-[175px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[85%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">{{ t('category.sections.card1.title') }}</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  {{ t('category.sections.card1.text') }}
                </p>
              </div>
              <router-link to="/1c-gos">
                <button class="cursor-pointer self-center">
                  <img src="../assets/img/arrow-right.png"
                       class="w-6 h-6"
                       alt="Подробнее">
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-2.png"
                 class="w-full h-full object-cover"
                 alt="Обновление 1С">
          </div>
          <div class="text w-full h-[175px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[85%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">{{ t('category.sections.card2.title') }}</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  {{ t('category.sections.card2.text') }}
                </p>
              </div>
              <router-link to="/1c-zdravoohrana">
                <button class="cursor-pointer self-center">
                  <img src="../assets/img/arrow-right.png"
                       class="w-6 h-6"
                       alt="Подробнее">
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-3.png"
                 class="w-full h-full object-cover"
                 alt="Настройка 1С">
          </div>
          <div class="text w-full h-[175px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[85%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">{{ t('category.sections.card3.title') }}</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  {{ t('category.sections.card3.text') }}
                </p>
              </div>

              <router-link to="/1c-services">
              <button class="cursor-pointer self-center">
                <img src="../assets/img/arrow-right.png"
                     class="w-6 h-6"
                     alt="Подробнее">
              </button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-4.png"
                 class="w-full h-full object-cover"
                 alt="Обучение 1С">
          </div>
          <div class="text w-full h-[175px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[85%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">{{ t('category.sections.card4.title') }}</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  {{ t('category.sections.card4.text') }}
                </p>
              </div>
              <router-link to="/news">
                <button class="cursor-pointer self-center">
                  <img src="../assets/img/arrow-right.png"
                       class="w-6 h-6"
                       alt="Подробнее">
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