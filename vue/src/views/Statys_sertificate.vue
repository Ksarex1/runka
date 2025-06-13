<script>
import Header from "@/components/Header.vue";
import Button1 from "@/components/button-1.vue";
import Button2 from "@/components/button-2.vue";
import Footer from "@/components/Footer.vue";
import ContentRenderer from "@/components/ContentRenderer.vue";

export default {
  components: {
    Header, Button1, Button2, Footer, ContentRenderer
  },
  name: "Statys_sertificate",
}
</script>

<template>
<Header/>
  <section class="mt-[70px] mb-[70px]">
    <div class="container flex flex-col">
      <div class="head">
        <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px]">О нас</h2>
        <div class="buttons flex justify-between mt-[21px]">
          <Button1>Статусы и сертификаты компании</Button1>
          <li class="group relative">
            <router-link to="/"><Button2>Благодарственные письма ▼</Button2></router-link>
            <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-35 z-50">
              <p class="mt-2">Благодарности</p>
            </ul>
          </li>
          <li class="group relative">
            <router-link to="/"><Button2>Работа в Руна С ▼</Button2></router-link>
            <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-35 z-50">
              <p class="mt-2">Вакансии</p>
            </ul>
          </li>
          <Button2>Политика в отношении обработки ПДн</Button2>
          <Button2>Согласие на обработку ПДн</Button2>
        </div>
      </div>

      <div class="osnova mt-[40px] pt-[43px] border-t border-t-[#E9E9E9] border-t-[1px] flex flex-col">
        <h2 class="text-[30px] font-bold mb-[4px]">Статусы и сертификаты компании</h2>
        <ContentRenderer pageKey="statys" />
      </div>
    </div>
  </section>

  <Footer/>
</template>

<style scoped>
ul, li{
  list-style: none;
}

h2{
  display: inline-block;
}


</style>