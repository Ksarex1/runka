<script>
export default {
  name: "News"
}
</script>

<template>
<section class="mt-[100px]">
  <div class="container">
    <h2 class="text-[36px] font-medium mb-10  text-[#030303]">Последние новости</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      <!-- Карточка 1 -->
      <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[342px] h-[365px]">
        <div class="w-full h-[210px] overflow-hidden">
          <img src="../assets/img/news-1.png"
               class="w-full h-full object-cover"
               alt="Сопровождение 1С">
        </div>
        <div class="text w-full h-[165px] px-4 py-5 bg-white">
          <div class="flex justify-between flex-col h-full">
            <div>
              <h4 class="font-medium text-[18px] xl:text-[18px] text-[#030303]">С Праздником Весны!</h4>
              <p class="font-normal text-[16px] xl:text-[13px] md:text-[14px] sm:text-[12px] text-[#5F687A] mt-2">
                Дорогие, милые, трепетные, самые прекрасные, добрые, умные...
              </p>
            </div>
            <div class="bottom flex justify-between">
              <h5 class="font-medium text-[#030303] text-[16px] md:text-[15px] sm:text-[14px]">Jan 30, 2025</h5>
              <button class="text-[#005DFF] font-bold text-[16px] md:text-[15px] sm:text-[14px]">
                Подробнее ->
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- Карточка 2 -->
      <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[342px] h-[365px]">
        <div class="w-full h-[210px] overflow-hidden">
          <img src="../assets/img/news-2.png"
               class="w-full h-full object-cover"
               alt="Сопровождение 1С">
        </div>
        <div class="text w-full h-[165px] px-4 py-5 bg-white">
          <div class="flex justify-between flex-col h-full">
            <div>
              <h4 class="font-medium text-[18px] xl:text-[18px] text-[#030303]">Предложение на 2025 год от Клуба Уникальных Бухгалтеров и Консультантов «Будь в курсе»</h4>
            </div>
            <div class="bottom flex justify-between">
              <h5 class="font-medium text-[#030303] text-[16px] md:text-[15px] sm:text-[14px] font-medium">Jan 30, 2025</h5>
              <button class="text-[#005DFF] font-bold text-[16px] md:text-[15px] sm:text-[14px]">
                Подробнее ->
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- Карточка 3 -->
      <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[342px] h-[365px]">
        <div class="w-full h-[210px] overflow-hidden">
          <img src="../assets/img/news-3.png"
               class="w-full h-full object-cover"
               alt="Сопровождение 1С">
        </div>
        <div class="text w-full h-[165px] px-4 py-5 bg-white">
          <div class="flex justify-between flex-col h-full">
            <div>
              <h4 class="font-medium text-[18px] xl:text-[18px] text-[#030303]">С Новым 2025 годом и Рождеством!</h4>
              <p class="font-normal text-[16px] xl:text-[13px] md:text-[14px] sm:text-[12px] text-[#5F687A] mt-2">
                Дорогие коллеги, партнёры и сотрудники! Поздравляем с...
              </p>
            </div>
            <div class="bottom flex justify-between">
              <h5 class="font-medium text-[#030303] text-[16px] md:text-[15px] sm:text-[14px]">Jan 30, 2025</h5>
              <button class="text-[#005DFF] font-bold text-[16px] md:text-[15px] sm:text-[14px]">
                Подробнее ->
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- Карточка 4 -->
      <div class="relative w-full sm:w-[320px] lg:w-[330px] xl:w-[342px] h-[365px]">
        <div class="w-full h-[210px] overflow-hidden">
          <img src="../assets/img/news-4.png"
               class="w-full h-full object-cover"
               alt="Сопровождение 1С">
        </div>
        <div class="text w-full h-[165px] px-4 py-5 bg-white">
          <div class="flex justify-between flex-col h-full">
            <div>
              <h4 class="font-medium text-[18px] xl:text-[18px] text-[#030303]">Проверка информационной базы</h4>
              <p class="font-normal text-[16px] xl:text-[13px] md:text-[14px] sm:text-[12px] text-[#5F687A] mt-2">
                В ноябре и декабре всем клиентам мы предлагаем проверку...
              </p>
            </div>
            <div class="bottom flex justify-between">
              <h5 class="font-medium text-[#030303] text-[16px] md:text-[15px] sm:text-[14px]">Jan 30, 2025</h5>
              <button class="text-[#005DFF] font-bold text-[16px] md:text-[15px] sm:text-[14px]">
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
  h2{
    font-size: 30px;
  }
  p{
    font-size: 10px;
  }

  h4{
    font-size: 14px;
  }

  h5, button{
    font-size: 13px;
  }

}
</style>