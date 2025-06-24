<template>
  <Header/>
  <div data-aos="">
    <main>

  <section class="mt-[70px] mb-[70px]">
    <div class="container flex flex-col">
      <div class="head">
        <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px]">О нас</h2>
        <div class="lg:hidden mt-[21px] relative z-50">
          <button @click="menuOpen = !menuOpen" class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded shadow transition">
            <svg
                class="w-6 h-6 transform transition-transform duration-300"
                :class="{ 'rotate-90': menuOpen }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <p>{{ menuOpen ? 'Закрыть меню' : 'Открыть меню' }}</p>
          </button>

          <transition name="slide-fade">
            <div
                v-if="menuOpen"
                class="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 text-black"
            >
              <router-link to="/about/statys"><Button1 id="butt" v-if="sections[0].name_razdel === 'Статусы и сертификаты компании'">Статусы и сертификаты компании</Button1></router-link>
              <router-link to="/about/statys"><Button2 id="butt" v-if="sections[0].name_razdel !== 'Статусы и сертификаты компании'">Статусы и сертификаты компании</Button2></router-link>

              <router-link to="/about/blagodar_letter"><Button2 id="butt" v-if="sections[0].name_razdel !== 'Благодарственные письма'">Благодарственные письма</Button2></router-link>
              <router-link to="/about/blagodar_letter"><Button1 id="butt" v-if="sections[0].name_razdel === 'Благодарственные письма'">Благодарственные письма</Button1></router-link>

              <router-link to="/about/blagodar_letter/blagodar"><Button1 id="butt" v-if="sections[0].name_razdel === 'Благодарности'">Благодарности</Button1></router-link>
              <router-link to="/about/blagodar_letter/blagodar"><Button2 id="butt" v-if="sections[0].name_razdel !== 'Благодарности'">Благодарности</Button2></router-link>

              <router-link to="/about/rabota_runa"><Button1 id="butt" v-if="sections[0].name_razdel === 'Работа в Руна С'">Работа в Руна С</Button1></router-link>
              <router-link to="/about/rabota_runa"><Button2 id="butt" v-if="sections[0].name_razdel !== 'Работа в Руна С'">Работа в Руна С</Button2></router-link>

              <router-link to="/about/rabota_runa/vakansii"><Button1 id="butt" v-if="sections[0].name_razdel === 'Вакансии'">Вакансии</Button1></router-link>
              <router-link to="/about/rabota_runa/vakansii"><Button2 id="butt" v-if="sections[0].name_razdel !== 'Вакансии'">Вакансии</Button2></router-link>

              <router-link to="/about/politika"><Button1 id="butt" v-if="sections[0].name_razdel === 'Политика в отношении обработки ПДн'">Политика в отношении обработки ПДн</Button1></router-link>
              <router-link to="/about/politika"><Button2 id="butt" v-if="sections[0].name_razdel !== 'Политика в отношении обработки ПДн'">Политика в отношении обработки ПДн</Button2></router-link>

              <router-link to="/about/soglasie"><Button1 id="butt" v-if="sections[0].name_razdel === 'Согласие на обработку ПДн'">Согласие на обработку ПДн</Button1></router-link>
              <router-link to="/about/soglasie"><Button2 id="butt" v-if="sections[0].name_razdel !== 'Согласие на обработку ПДн'">Согласие на обработку ПДн</Button2></router-link>
            </div>
          </transition>
        </div>

        <div class="buttons hidden lg:flex justify-between mt-[21px] md:w-[100%]">
          <router-link to="/about/statys"><Button1 class="md:w-[90%]" v-if="sections[0].name_razdel === 'Статусы и сертификаты компании'">Статусы и сертификаты компании</Button1></router-link>
          <router-link to="/about/statys"><Button2 class="md:w-[90%]" v-if="sections[0].name_razdel !== 'Статусы и сертификаты компании'">Статусы и сертификаты компании</Button2></router-link>

          <li class="group relative">
            <router-link to="/about/blagodar_letter"><Button1 class="button md:w-[90%]" v-if="sections[0].name_razdel === 'Благодарственные письма' || sections[0].name_razdel === 'Благодарности'">Благодарственные письма ▼</Button1></router-link>
            <router-link to="/about/blagodar_letter"><Button2 class="button md:w-[90%]" v-if="sections[0].name_razdel !== 'Благодарственные письма' && sections[0].name_razdel !== 'Благодарности'">Благодарственные письма ▼</Button2></router-link>
            <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-35 z-50">
              <router-link to="/about/blagodar_letter/blagodar"><p class="mt-2">Благодарности</p></router-link>
            </ul>
          </li>

          <li class="group relative">
            <router-link to="/about/rabota_runa"><Button1 class="button md:w-[90%]" v-if="sections[0].name_razdel === 'Работа в Руна С' || sections[0].name_razdel === 'Вакансии'">Работа в Руна С ▼</Button1></router-link>
            <router-link to="/about/rabota_runa"><Button2 class="button md:w-[90%]" v-if="sections[0].name_razdel !== 'Работа в Руна С' && sections[0].name_razdel !== 'Вакансии'">Работа в Руна С ▼</Button2></router-link>
            <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-35 z-50">
              <router-link to="/about/rabota_runa/vakansii"><p class="mt-2">Вакансии</p></router-link>
            </ul>
          </li>

          <router-link to="/about/politika"><Button1 class="md:w-[90%]" v-if="sections[0].name_razdel === 'Политика в отношении обработки ПДн'">Политика в отношении обработки ПДн</Button1></router-link>
          <router-link to="/about/politika"><Button2 class="md:w-[90%]" v-if="sections[0].name_razdel !== 'Политика в отношении обработки ПДн'">Политика в отношении обработки ПДн</Button2></router-link>

          <router-link to="/about/soglasie"><Button1 class="md:w-[90%]" v-if="sections[0].name_razdel === 'Согласие на обработку ПДн'">Согласие на обработку ПДн</Button1></router-link>
          <router-link to="/about/soglasie"><Button2 class="md:w-[90%]" v-if="sections[0].name_razdel !== 'Согласие на обработку ПДн'">Согласие на обработку ПДн</Button2></router-link>
        </div>
      </div>

      <div class="osnova mt-[40px] pt-[43px] border-t border-t-[#E9E9E9] border-t-[1px] flex flex-col">
        <h2 class="h2-razdel md:text-[30px] sm:text-[26px] font-bold mb-[4px]">{{sections[0].name_razdel}}</h2>
        <div class="sections-container flex flex-col gap-4">
          <div v-for="section in sections" :key="section.title" class="section">
            <h2 class="title text-[20px] text-[#030303] mt-[40px] font-500 mb-[25px]">{{ section.title }}</h2>
            <p v-html="section.text" class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]"></p>



            <ul v-if="section.list && section.list.length" class="list-disc pl-5 mb-4">
              <li class="li-spisok" v-for="(item, idx) in section.list" :key="idx">{{ item }}</li>
            </ul>

            <p v-html="section.text2" class="text2 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]"></p>

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

          <div
              v-if="selectedImage" :data-aos="null"
              class="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center"
              @click.self="closeImage"
          >
            <div class="relative max-w-full max-h-full">
              <img
                  :src="selectedImage"
                  class="object-contain max-h-[95vh] max-w-[95vw] rounded shadow-2xl border-4 border-white"
              />
              <button
                  @click="closeImage"
                  class="absolute -top-4 -right-4 bg-[#005DFF] text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700"
              >
                &times;
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>

  </section>
    </main>
  </div>

  <Footer/>
</template>

<script>
import content from "@/assets/data/About-content.json";
import { ref } from "vue";
import { watch } from "vue";
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
    const menuOpen = ref(false);
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

    return { sections, selectedImage, openImage, closeImage, menuOpen };

  },




};
</script>

<style scoped>
main{
  padding-top: 30px;
}
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1536px) {
  .list-disc li{
    font-size: 20px;
  }
}

@media (max-width: 1280px) {
  .list-disc li{
    font-size: 18px;
  }
}

@media (max-width: 1024px) {
  .list-disc li{
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .list-disc li{
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .list-disc li, .text1, .text2{
    font-size: 14px;
  }

  .h2-razdel{
    font-size: 20px;
  }

  #butt{
    font-size: 14px;
  }
}


</style>