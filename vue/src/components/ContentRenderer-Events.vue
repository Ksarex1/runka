<template>
  <Header/>
  <div data-aos="">
    <main>

  <section class="mt-[70px] mb-[70px]">
    <div class="container flex flex-col">
      <div class="head">
        <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px]">События</h2>
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
              <router-link to="/news"><Button1 id="butt" v-if="route.path === '/news'">Новости</Button1></router-link>
              <router-link to="/news"><Button2 id="butt" v-if="route.path !== '/news'">Новости</Button2></router-link>

              <router-link to="/calendar"><Button1 id="butt" v-if="route.path === '/calendar'">Календарь мероприятий</Button1></router-link>
              <router-link to="/calendar"><Button2 id="butt" v-if="route.path !== '/calendar'">Календарь мероприятий</Button2></router-link>

            </div>
          </transition>
        </div>

        <div class="buttons hidden lg:flex mt-[21px] md:w-[100%]">
          <router-link to="/news"><Button1 id="butt" v-if="route.path === '/news'">Новости</Button1></router-link>
          <router-link to="/news"><Button2 id="butt" v-if="route.path !== '/news'">Новости</Button2></router-link>

          <router-link to="/calendar"><Button1 class="ml-[20px]" id="butt" v-if="route.path === '/calendar'">Календарь мероприятий</Button1></router-link>
          <router-link to="/calendar"><Button2 class="ml-[20px]" id="butt" v-if="route.path !== '/calendar'">Календарь мероприятий</Button2></router-link>
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