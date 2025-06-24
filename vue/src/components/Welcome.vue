<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="h-full py-15">
    <div class="container">
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 md:gap-6 md:items-center">

        <div class="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left mt-8 md:mt-0">
          <h1 class="mb-4 text-[32px] sm:text-[40px] md:text-[50px] leading-tight max-md:leading-10 text-[#030303]">
            {{ t('welcome.title') }}
          </h1>
          <p class="text-[16px] md:text-[18px] text-primary3 mb-6 md:mb-15">
            {{ t('welcome.paragraph') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 md:gap-5">
            <button class="px-10 bg-primary2 text-white rounded-xl py-2 cursor-pointer hover:bg-primary transition">{{ t('welcome.button1') }}</button>
            <button class="px-10 bg-white text-primary3 rounded-xl py-2 cursor-pointer border hover:bg-gray-200 transition block max-md:hidden">{{ t('welcome.button2') }}</button>
          </div>
        </div>

        <div class="md:col-span-7 flex justify-center">
          <img src="../assets/img/welcomeIMg.png" alt="welcome" class="max-md:w-45 h-auto min-md:w-90 min-lg:w-full ">
        </div>

      </div>
    </div>
  </section>
</template>



<style scoped>
button{
  font-weight: 600;
  font-size: 18px;
}
h1{
  font-weight: 600;
  line-height: 60px;
}
p{
  font-weight: 500;
}
img{
  max-width: 100%;
}
section{
  background-image: url('../assets/img/welcome.png');
  background-repeat: no-repeat;
  background-size: cover
}
@media (max-width: 620px) {
  h1{
    line-height: 40px;
  }
}
</style>