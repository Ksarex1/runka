<template>
  <Header/>
  <section class="mt-[70px] mb-[70px]">
    <div class="container flex flex-col">
      <div class="head">
        <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px]">О нас</h2>
        <div class="buttons flex justify-between mt-[21px]">
          <router-link to="/statys"><Button1 v-if="sections[0].name_razdel === 'Статусы и сертификаты компании'">Статусы и сертификаты компании</Button1></router-link>
            <router-link to="/statys"><Button2 v-if="sections[0].name_razdel !== 'Статусы и сертификаты компании'">Статусы и сертификаты компании</Button2></router-link>
          <li class="group relative">
            <router-link to="/blagodar_letter"><Button1 class="button" v-if="sections[0].name_razdel === 'Благодарственные письма' || sections[0].name_razdel === 'Благодарности'">Благодарственные письма ▼</Button1></router-link>
            <router-link to="/blagodar_letter"><Button2 class="button" v-if="sections[0].name_razdel !== 'Благодарственные письма' && sections[0].name_razdel !== 'Благодарности'">Благодарственные письма ▼</Button2></router-link>
            <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-35 z-50">
              <router-link to="/blagodar"><p class="mt-2">Благодарности</p></router-link>
            </ul>
          </li>
          <li class="group relative">
            <router-link to="/rabota_runa"><Button1 class="button" v-if="sections[0].name_razdel === 'Работа в Руна С' || sections[0].name_razdel === 'Вакансии'">Работа в Руна С ▼</Button1></router-link>
            <router-link to="/rabota_runa"><Button2 class="button" v-if="sections[0].name_razdel !== 'Работа в Руна С' && sections[0].name_razdel !== 'Вакансии'">Работа в Руна С ▼</Button2></router-link>
            <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-35 z-50">
              <router-link to="/vakansii"><p class="mt-2">Вакансии</p></router-link>
            </ul>
          </li>
          <router-link to="/politika"><Button1 v-if="sections[0].name_razdel === 'Политика в отношении обработки ПДн'">Политика в отношении обработки ПДн</Button1></router-link>
          <router-link to="/politika"><Button2 v-if="sections[0].name_razdel !== 'Политика в отношении обработки ПДн'">Политика в отношении обработки ПДн</Button2></router-link>

          <router-link to="/soglasie"><Button1 v-if="sections[0].name_razdel === 'Согласие на обработку ПДн'">Согласие на обработку ПДн</Button1></router-link>
          <router-link to="/soglasie"><Button2 v-if="sections[0].name_razdel !== 'Согласие на обработку ПДн'">Согласие на обработку ПДн</Button2></router-link>
        </div>
      </div>

      <div class="osnova mt-[40px] pt-[43px] border-t border-t-[#E9E9E9] border-t-[1px] flex flex-col">
        <h2 class="text-[30px] font-bold mb-[4px]">{{sections[0].name_razdel}}</h2>
        <div class="sections-container flex flex-col gap-4">
          <div v-for="section in sections" :key="section.title" class="section">
            <h2 class="text-[20px] text-[#030303] mt-[40px] font-500 mb-[25px]">{{ section.title }}</h2>
            <p v-html="section.text" class="text-[#5F687A] text-[20px]"></p>



            <!-- Списки -->
            <ul v-if="section.list && section.list.length" class="list-disc pl-5 mb-4">
              <li class="text-[#5F687A] text-[20px]" v-for="(item, idx) in section.list" :key="idx">{{ item }}</li>
            </ul>

            <p v-html="section.text2" class="text-[#5F687A] text-[20px]"></p>

            <!-- Картинки -->
            <div v-if="section.images.length" class="flex flex-wrap gap-4 mt-[40px]">
              <img
                  v-for="(img, index) in section.images"
                  :key="index"
                  :src="img"
                  :alt="section.title + ' ' + (index + 1)"
                  class="w-[200px] h-auto rounded shadow cursor-pointer transition hover:scale-105"
                  @click="openImage(img)"
              />
            </div>
          </div>

          <!-- Модальное окно -->
          <div v-if="selectedImage" class="fixed inset-0 bg-[#030303] bg-opacity-30 flex items-center justify-center z-50" @click.self="closeImage">
            <div class="relative">
              <img :src="selectedImage" class="max-h-[90vh] max-w-[90vw] rounded shadow-xl" />
              <button @click="closeImage" class="absolute top-2 right-2 text-white text-3xl font-bold">&times;</button>
            </div>
          </div>
      </div>
    </div>
    </div>
  </section>

  <Footer/>
</template>

<script>
import content from "@/assets/data/About-content.json";
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Button2 from "@/components/button-2.vue";
import Footer from "@/components/Footer.vue";
import Button1 from "@/components/button-1.vue";

export default {
  name: "ContentRenderer",
  components: {Button1, Footer, Button2, Header},
  props: {
    pageKey: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const selectedImage = ref(null);
    const openImage = (img) => selectedImage.value = img;
    const closeImage = () => selectedImage.value = null;

    const sections = ref([]);

    if (content[props.pageKey]) {
      sections.value = content[props.pageKey].map(item => ({
        ...item,
        list: Array.isArray(item.list) ? item.list : [],
        images: item.images.map(img =>
            new URL(`../assets/img/${img}`, import.meta.url).href
    )
    }));
    }

    return { sections, selectedImage, openImage, closeImage };
  }
};
</script>

<style scoped>
.group{
  list-style: none;
}

.list-disc li{
  color: #5F687A;
  font-size: 20px;
}

h2{
  display: inline-block;
}


</style>