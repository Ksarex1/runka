<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components:{Header, Footer},
  name: "Contacts"
}
</script>

<template>
<Header/>
  <section class="mt-[200px] mb-[50px]">
    <div class="container">
      <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px] text-[#030303]">Контакты</h2>
      <div class="osnova mt-[40px] pt-[43px] border-t border-t-[#E9E9E9] border-t-[1px] flex flex-col">
        <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]"><strong>Адрес:</strong> 603005, г. Нижний Новгород, ул. Нестерова, дом 9, офис 804</p><br>
        <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]"><strong>Телефоны: </strong></p>
        <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]">Поддержка на "Горячей линии": +7 929-044-73-03; +7 915-940-26-05</p>
        <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]">Менеджер по работе с клиентами:  +7 929-044-73-39</p>
        <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]">Продажи, контракты, лицензирование:  +7 963-232-82-23</p><br>
        <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]"><strong>E-mail:</strong> runa_post@mail.ru</p><br>
        <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]"><strong>Время работы: </strong>понедельник - пятница, с 9-00 до 18-00 (мск)</p><br><br>

        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9cfa78fd5344cc5158a4baffa15bca9e9e434b7a6a0adb559675d7e57eca60d7&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<style scoped>
h2{
  display: inline-block;
}
</style>