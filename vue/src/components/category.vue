<script>
export default {
  name: "category"
}
</script>

<template>
  <section class="mt-[100px] px-4 sm:px-6 lg:px-8 xl:px-0">
    <div class="container mx-auto">
      <h2 class="text-[36px] font-medium mb-10  text-[#030303]">Популярные категории</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <!-- Карточка 1 -->
        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-1.png"
                 class="w-full h-full object-cover"
                 alt="Сопровождение 1С">
          </div>
          <div class="text w-full h-[155px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[65%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">Сопровождение 1С</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting...
                </p>
              </div>
              <button class="cursor-pointer self-center">
                <img src="../assets/img/arrow-right.png"
                     class="w-6 h-6"
                     alt="Подробнее">
              </button>
            </div>
          </div>
        </div>

        <!-- Карточка 2 -->
        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-2.png"
                 class="w-full h-full object-cover"
                 alt="Обновление 1С">
          </div>
          <div class="text w-full h-[155px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[65%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">Сопровождение 1С</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting...
                </p>
              </div>
              <button class="cursor-pointer self-center">
                <img src="../assets/img/arrow-right.png"
                     class="w-6 h-6"
                     alt="Подробнее">
              </button>
            </div>
          </div>
        </div>

        <!-- Карточка 3 -->
        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-3.png"
                 class="w-full h-full object-cover"
                 alt="Настройка 1С">
          </div>
          <div class="text w-full h-[155px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[65%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">Сопровождение 1С</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting...
                </p>
              </div>
              <button class="cursor-pointer self-center">
                <img src="../assets/img/arrow-right.png"
                     class="w-6 h-6"
                     alt="Подробнее">
              </button>
            </div>
          </div>
        </div>

        <!-- Карточка 4 -->
        <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[320px] h-[365px]">
          <div class="w-full h-[210px] overflow-hidden">
            <img src="../assets/img/card-img-4.png"
                 class="w-full h-full object-cover"
                 alt="Обучение 1С">
          </div>
          <div class="text w-full h-[155px] px-4 py-5 border border-[#5F687A] rounded-b-[10px] bg-white">
            <div class="flex justify-between h-full">
              <div class="w-[65%]">
                <h4 class="font-bold text-[18px] xl:text-[18px] text-[#030303]">Сопровождение 1С</h4>
                <p class="font-normal text-[13px] xl:text-[13px] text-[#5F687A] mt-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting...
                </p>
              </div>
              <button class="cursor-pointer self-center">
                <img src="../assets/img/arrow-right.png"
                     class="w-6 h-6"
                     alt="Подробнее">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 640px) {
  h2{
    font-size: 30px;
  }
  p{
    font-size: 10px;
  }

  h4{
    font-size: 14px;
  }

  .text{
    height: 135px;
  }
}
</style>