<template>
  <Header/>
  <div data-aos="">
    <main>

  <section class="mt-[70px] mb-[70px]">
    <div class="container flex flex-col">
      <div class="head">
        <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px]">Полезная информация</h2>
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
              <router-link to="/otveti-1c"><Button1 id="butt" v-if="route.path === '/otveti-1c'">Ответы 1С  на вопросы о переходе на работу через Интернет</Button1></router-link>
              <router-link to="/otveti-1c"><Button2 id="butt" v-if="route.path !== '/otveti-1c'">Ответы 1С  на вопросы о переходе на работу через Интернет</Button2></router-link>

              <router-link to="/tonkosti"><Button1 id="butt" v-if="route.path === '/tonkosti'">Тонкости учета</Button1></router-link>
              <router-link to="/tonkosti"><Button2 id="butt" v-if="route.path !== '/tonkosti'">Тонкости учета</Button2></router-link>

              <router-link to="/act-reliz"><Button1 id="butt" v-if="route.path === '/act-reliz'">Актуальные релизы</Button1></router-link>
              <router-link to="/act-reliz"><Button2 id="butt" v-if="route.path !== '/act-reliz'">Актуальные релизы</Button2></router-link>

              <router-link to="/act-reliz/bgy1"><Button1 id="butt" v-if="route.path === '/act-reliz/bgy1'">Релизы БГУ 1.0</Button1></router-link>
              <router-link to="/act-reliz/bgy1"><Button2 id="butt" v-if="route.path !== '/act-reliz/bgy1'">Релизы БГУ 1.0</Button2></router-link>

              <router-link to="/act-reliz/bgy2"><Button1 id="butt" v-if="route.path === '/act-reliz/bgy2'">Релизы БГУ 2.0</Button1></router-link>
              <router-link to="/act-reliz/bgy2"><Button2 id="butt" v-if="route.path !== '/act-reliz/bgy2'">Релизы БГУ 2.0</Button2></router-link>

              <router-link to="/act-reliz/zkgy3"><Button1 id="butt" v-if="route.path === '/act-reliz/zkgy3'">Релизы ЗКГУ 3.1</Button1></router-link>
              <router-link to="/act-reliz/zkgy3"><Button2 id="butt" v-if="route.path !== '/act-reliz/zkgy3'">Релизы ЗКГУ 3.1</Button2></router-link>

              <router-link to="/act-reliz/camin"><Button1 id="butt" v-if="route.path === '/act-reliz/camin'">Релизы КАМИН</Button1></router-link>
              <router-link to="/act-reliz/camin"><Button2 id="butt" v-if="route.path !== '/act-reliz/camin'">Релизы КАМИН</Button2></router-link>

              <router-link to="/act-reliz/apteka"><Button1 id="butt" v-if="route.path === '/act-reliz/apteka'">Релизы Больничная аптека</Button1></router-link>
              <router-link to="/act-reliz/apteka"><Button2 id="butt" v-if="route.path !== '/act-reliz/apteka'">Релизы Больничная аптека</Button2></router-link>

              <router-link to="/act-reliz/diet"><Button1 id="butt" v-if="route.path === '/act-reliz/diet'">Релизы Диетическое питание</Button1></router-link>
              <router-link to="/act-reliz/diet"><Button2 id="butt" v-if="route.path !== '/act-reliz/diet'">Релизы Диетическое питание</Button2></router-link>

              <router-link to="/configure"><Button1 id="butt" v-if="route.path === '/configure'">Как узнать, работаете вы в типовой или измененной конфигурации</Button1></router-link>
              <router-link to="/configure"><Button2 id="butt" v-if="route.path !== '/configure'">Как узнать, работаете вы в типовой или измененной конфигурации</Button2></router-link>

            </div>
          </transition>
        </div>

        <div class="buttons hidden lg:flex justify-between mt-[21px] md:w-[100%]">
          <router-link to="/otveti-1c"><Button1 id="butt" class="w-[90%]" v-if="route.path === '/otveti-1c'">Ответы 1С  на вопросы о переходе на работу через Интернет</Button1></router-link>
          <router-link to="/otveti-1c"><Button2 id="butt" class="w-[90%]" v-if="route.path !== '/otveti-1c'">Ответы 1С  на вопросы о переходе на работу через Интернет</Button2></router-link>

          <router-link to="/tonkosti"><Button1 class="w-[90%]" id="butt" v-if="route.path === '/tonkosti'">Тонкости учета</Button1></router-link>
          <router-link to="/tonkosti"><Button2 class="w-[90%]" id="butt" v-if="route.path !== '/tonkosti'">Тонкости учета</Button2></router-link>

          <li class="group relative">
            <router-link to="/act-reliz"><Button1 class="button xl:w-[90%] md:w-[100%]" v-if="route.path === '/act-reliz' || route.path === '/act-reliz/bgy1' || route.path === '/act-reliz/bgy2' || route.path === '/act-reliz/zkgy3' || route.path === '/act-reliz/camin' || route.path === '/act-reliz/apteka' || route.path === '/act-reliz/diet'">Актуальные релизы ▼</Button1></router-link>
            <router-link to="/act-reliz"><Button2 class="button xl:w-[90%] md:w-[100%]" v-if="route.path !== '/act-reliz' && route.path !== '/act-reliz/bgy1' && route.path !== '/act-reliz/bgy2' && route.path !== '/act-reliz/zkgy3' && route.path !== '/act-reliz/camin' && route.path !== '/act-reliz/apteka' && route.path !== '/act-reliz/diet'">Актуальные релизы ▼</Button2></router-link>
            <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-40 z-50">
              <router-link to="/act-reliz/bgy1"><p class="mt-2">Релизы БГУ 1.0</p></router-link>
              <router-link to="/act-reliz/bgy2"><p class="mt-2">Релизы БГУ 2.0</p></router-link>
              <router-link to="/act-reliz/zkgy3"><p class="mt-2">Релизы ЗКГУ 3.1</p></router-link>
              <router-link to="/act-reliz/camin"><p class="mt-2">Релизы КАМИН</p></router-link>
              <router-link to="/act-reliz/apteka"><p class="mt-2">Релизы Больничная аптека</p></router-link>
              <router-link to="/act-reliz/diet"><p class="mt-2">Релизы Диетическое питание</p></router-link>
            </ul>
          </li>

          <router-link to="/configure"><Button1 class="w-[90%]" id="butt" v-if="route.path === '/configure'">Как узнать, работаете вы в типовой или измененной конфигурации</Button1></router-link>
          <router-link to="/configure"><Button2 class="w-[90%]" id="butt" v-if="route.path !== '/configure'">Как узнать, работаете вы в типовой или измененной конфигурации</Button2></router-link>
        </div>
      </div>

      <div class="osnova mt-[40px] pt-[43px] border-t border-t-[#E9E9E9] border-t-[1px]">
        <slot></slot>
      </div>
    </div>

  </section>
    </main>

    <Footer/>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button2 from "@/components/button-2.vue";
import Button1 from "@/components/button-1.vue";

export default {
  name: "ContentPrograms",
  components: {Button1, Button2, Header, Footer},

  setup() {
    const route = useRoute();
    const menuOpen = ref(false);
    return { menuOpen, route };

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