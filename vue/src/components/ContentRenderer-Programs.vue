<template>
  <Header/>
  <div data-aos="">
    <main>

      <section class="mt-[70px] mb-[70px]">
        <div class="container flex flex-col">
          <div class="head">
            <h2 class="text-[45px] font-bold border-b border-b-[#324962] border-b-[1px]">Программные продукты</h2>
            <div class="lg:hidden mt-[21px] relative z-50">
              <button @click="menuOpen = !menuOpen"
                      class="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded shadow transition">
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
                  <router-link to="/1c-gos">
                    <Button1 id="butt" v-if="route.path === '/1c-gos'">Решения 1С для гос. учреждений</Button1>
                  </router-link>
                  <router-link to="/1c-gos">
                    <Button2 id="butt" v-if="route.path !== '/1c-gos'">Решения 1С для гос. учреждений</Button2>
                  </router-link>

                  <router-link to="/1c-zdravoohrana" v-if="route.path === '/1c-zdravoohrana'">
                    <Button1 id="butt">Решения 1С для здравоохранения</Button1>
                  </router-link>
                  <router-link to="/1c-zdravoohrana" v-if="route.path !== '/1c-zdravoohrana'">
                    <Button2 id="butt">Решения 1С для здравоохранения</Button2>
                  </router-link>

                  <router-link to="/1c-services">
                    <Button1 id="butt" v-if="route.path === '/1c-services'">Сервисы 1С</Button1>
                  </router-link>
                  <router-link to="/1c-services">
                    <Button2 id="butt" v-if="route.path !== '/1c-services'">Сервисы 1С</Button2>
                  </router-link>

                  <router-link to="/1c-client-license">
                    <Button1 id="butt" v-if="route.path === '/1c-client-license'">Клиентские лицензии 1С</Button1>
                  </router-link>
                  <router-link to="/1c-client-license">
                    <Button2 id="butt" v-if="route.path !== '/1c-client-license'">Клиентские лицензии 1С</Button2>
                  </router-link>

                  <router-link to="/1c-server-license">
                    <Button1 id="butt" v-if="route.path === '/1c-server-license'">Лицензии на сервер 1С</Button1>
                  </router-link>
                  <router-link to="/1c-server-license">
                    <Button2 id="butt" v-if="route.path !== '/1c-server-license'">Лицензии на сервер 1С</Button2>
                  </router-link>

                </div>
              </transition>
            </div>

            <div class="buttons hidden lg:flex mt-[21px] md:w-[100%]">
              <router-link to="/1c-gos">
                <Button1 id="butt" v-if="route.path === '/1c-gos'">Решения 1С для гос. учреждений</Button1>
              </router-link>
              <router-link to="/1c-gos">
                <Button2 id="butt" v-if="route.path !== '/1c-gos'">Решения 1С для гос. учреждений</Button2>
              </router-link>
              <router-link to="/1c-zdravoohrana">
                <Button1 class="ml-[20px]" id="butt" v-if="route.path === '/1c-zdravoohrana'">Решения 1С для здравоохранения</Button1>
              </router-link>
              <router-link to="/1c-zdravoohrana">
                <Button2 class="ml-[20px]" id="butt" v-if="route.path !== '/1c-zdravoohrana'">Решения 1С для здравоохранения</Button2>
              </router-link>

              <router-link to="/1c-services">
                <Button1 class="ml-[20px]" id="butt" v-if="route.path === '/1c-services'">Сервисы 1С</Button1>
              </router-link>
              <router-link to="/1c-services">
                <Button2 class="ml-[20px]" id="butt" v-if="route.path !== '/1c-services'">Сервисы 1С</Button2>
              </router-link>

              <router-link to="/1c-client-license">
                <Button1 class="ml-[20px]" id="butt" v-if="route.path === '/1c-client-license'">Клиентские лицензии 1С</Button1>
              </router-link>
              <router-link to="/1c-client-license">
                <Button2 class="ml-[20px]" id="butt" v-if="route.path !== '/1c-client-license'">Клиентские лицензии 1С</Button2>
              </router-link>


              <router-link to="/1c-server-license">
                <Button1 class="ml-[20px]" id="butt" v-if="route.path === '/1c-server-license'">Лицензии на сервер 1С</Button1>
              </router-link>
              <router-link to="/1c-server-license">
                <Button2 class="ml-[20px]" id="butt" v-if="route.path !== '/1c-server-license'">Лицензии на сервер 1С</Button2>
              </router-link>
            </div>
          </div>

          <section class="osnova mt-[40px] pt-[43px] border-t border-t-[#E9E9E9] border-t-[1px]">
            <slot></slot>
          </section>
        </div>

      </section>
    </main>

    <Footer/>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {ref} from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button2 from "@/components/button-2.vue";
import Button1 from "@/components/button-1.vue";
import {inject} from 'vue'
import {isAuthenticated} from '../auth.js'

export default {
  name: "ContentPrograms",
  components: {
    Header,
    Footer,
    Button1,
    Button2,
  },
  props: {
    cards: Object,
  },

  inject: ['addToCart', 'cart', 'removeFromCart', 'updateCartItemQuantity'],

  setup() {
    const route = useRoute();
    const menuOpen = ref(false);
    return {menuOpen, route};
  },
}
</script>

<style scoped>
.filter-wrapper select {
  font-size: 16px;
  cursor: pointer;
  appearance: none;
}

.filter-wrapper option {
  font-size: 14px;
}

main {
  padding-top: 30px;
}

.group {
  list-style: none;
}

.list-disc li {
  color: #5F687A;
  font-size: 20px;
}

h2 {
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
  .list-disc li {
    font-size: 20px;
  }
}

@media (max-width: 1280px) {
  .list-disc li {
    font-size: 18px;
  }
}

@media (max-width: 1024px) {
  .list-disc li {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .list-disc li {
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .list-disc li, .text1, .text2 {
    font-size: 14px;
  }

  .h2-razdel {
    font-size: 20px;
  }

  #butt {
    font-size: 14px;
  }
}


</style>