<script setup>
import {ref, watch,computed} from 'vue'
import { user, isAuthenticated, logout } from '../auth.js'

const isOpen = ref(false)
const isTransitioning = ref(false)

watch(isOpen, (newVal) => {
  if (newVal) {
    isTransitioning.value = true
    document.body.style.overflow = 'hidden'
  } else {
    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
    document.body.style.overflow = ''
  }
})

const handleLogout = () => {
  logout()
}

const searchTerm = ref('')

const sections = [
  { name: 'О нас', link: '/about' },
  { name: 'События', link: '/contacts' },
  { name: 'Статусы и сертификаты компании', link: '/about/statys' },
  { name: 'Благодарственные письма', link: '/about/blagodar_letter' },
  { name: 'Благодарности', link: '/about/blagodar_letter/blagodar' },
  { name: 'Работа в Руна С', link: '/about/rabota_runa' },
  { name: 'Вакансии', link: '/about/rabota_runa/vakansii' },
  { name: 'Политика в отношении обработки ПДн', link: '/about/politika' },
  { name: 'Согласие на обработку ПДн', link: '/about/soglasie' },
  { name: 'Новости', link: '/contacts' },
  { name: 'Календарь мероприятий', link: '/contacts' },
  { name: 'Программные продукты', link: '/contacts' },
  { name: 'Решения 1С для государственных учреждений', link: '/1c-gos' },
  { name: 'Решения 1С для здравоохранения', link: '/contacts' },
  { name: 'Сервисы 1С', link: '/contacts' },
  { name: 'Клиентские лицензии 1С', link: '/contacts' },
  { name: 'Лицензии на сервер 1С', link: '/contacts' },
  { name: 'Услуги', link: '/contacts' },
  { name: 'Сопровождение 1С', link: '/contacts' },
  { name: 'Информационно-технологическое сопровождение (1С:ИТС)', link: '/contacts' },
  { name: 'Абонентское обслуживание', link: '/contacts' },
  { name: 'Линия консультаций', link: '/contacts' },
  { name: 'Дополнительные услуги', link: '/contacts' },
  { name: 'Центр сертифицированного обучения 1С (ЦСО)', link: '/contacts' },
  { name: 'Семинары', link: '/contacts' },
  { name: 'Курсы и мини-семинары', link: '/contacts' },
  { name: 'Вебинары', link: '/contacts' },
  { name: 'Полезная информация', link: '/contacts' },
  { name: 'Ответы 1С  на вопросы о переходе на работу через Интернет', link: '/contacts' },
  { name: 'Тонкости учета', link: '/contacts' },
  { name: 'Актуальные релизы', link: '/contacts' },
  { name: 'Релизы БГУ 1.0', link: '/contacts' },
  { name: 'Релизы БГУ 2.0', link: '/contacts' },
  { name: 'Релизы ЗКГУ 3.1', link: '/contacts' },
  { name: 'Релизы КАМИН', link: '/contacts' },
  { name: 'Релизы Больничная аптека', link: '/contacts' },
  { name: 'Релизы Диетическое питание', link: '/contacts' },
  { name: 'Как узнать, работаете вы в типовой или измененной конфигурации', link: '/contacts' },
  { name: 'Учебный центр КУБиК', link: '/contacts' },
  { name: 'Курсы и практические занятия', link: '/contacts' },
  { name: 'Отзывы клиентов', link: '/contacts' },
  { name: 'Контакты', link: '/contacts' },
]

const filteredSections = () => {
  if (!searchTerm.value.trim()) return []
  return sections.filter(s =>
      s.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
}


</script>

<template>
  <header class="flex flex-col fixed top-0 left-0 w-full z-200 bg-white ">
    <div v-if="isOpen || isTransitioning"
         class="max-[1400px]:flex flex-col bg-white p-4 absolute top-0 right-0 z-105 px-10 lg:w-2/6 items-end h-screen
            transition-transform duration-300 ease-in-out transform max-lg:w-4/6"
         :class="isOpen ? 'translate-x-0' : 'translate-x-full'">

      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke="#005DFF"
           class="w-8 h-8 mb-3 " @click="isOpen = false">
        <path stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
      </svg>

      <ul class="flex flex-col gap-4 text-end border-t border-gray-400 w-full pt-5">
        <router-link to="/about"><li class="text-[#030303]">О нас</li></router-link>
        <li class="text-[#030303]">События</li>
        <li class="text-[#030303]">Продукты</li>
        <li class="text-[#030303]">Услуги</li>
        <li class="text-[#030303]">Контакты</li>
      </ul>
    </div>
    <div class="bg-primary w-full flex justify-center">
      <div class="container py-1.5">

        <div class="flex items-center text-white justify-between">

          <div>
            <img src="../assets/img/1c.png" alt="1с">
          </div>

          <div class="flex gap-8">
            <div class="flex gap-6">
          <span class="max-[460px]:hidden flex items-center text-sm">
            <img src="../assets/img/Ringer.svg" alt="phone" class="mr-1.5">
            <p>+7 (963) 232-82-23</p>
          </span>

              <span class="sm:flex items-center text-sm hidden">
            <img src="../assets/img/Email.svg" alt="email" class="mr-1.5">
            <p>info@runa-s.ru</p>
          </span>

              <span class="xl:flex items-center text-sm hidden">
            <img src="../assets/img/Location.svg" alt="phone" class="mr-1.5">
            <p>г. Н. Новгород, ул. Нестерова, дом 9, офис 804</p>
          </span>
            </div>

            <div class="custom-select relative sm:flex items-center hidden">
              <select class="bg-white text-primary-black w-30 appearance-none pl-7 text-sm cursor-pointer">
                <option value="">русский</option>
                <option value="">english</option>
              </select>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <template v-if="isAuthenticated">
              <router-link to="/me">
                <img src="@/assets/img/profileImg.jpg" class="w-8 h-8 rounded-full" alt="avatar" />
              </router-link>
              <router-link to="/cart">
                <img src="@/assets/img/Cart.svg" class="w-6 h-6" alt="cart" />
              </router-link>
              <button @click="logout" class="cursor-pointer text-sm text-white bg-red-500 py-1.25 px-4 rounded-lg hover:bg-red-900 ml-3">Выйти</button>
            </template>
            <template v-else>
              <router-link to="/login" class="text-sm bg-white text-black font-medium px-5 py-1 rounded-lg shadow-2xl hover:bg-gray-300 transition">Войти</router-link>
              <router-link to="/register" class="text-sm  text-white border border-white font-medium px-5 py-1 rounded-lg shadow-2xl hover:bg-blue-900 hover:text-white transition">Регистрация</router-link>
            </template>
          </div>

        </div>

      </div>
    </div>

    <div class=" w-full flex justify-center shadow-xl/20">
      <div class="container py-1.5 flex justify-between py-4">



        <div>
          <router-link to="/">
            <img src="../assets/img/logo.png" alt="logo">
          </router-link>
        </div>

        <div class="flex items-center">

          <ul class="main flex gap-9 max-[1400px]:hidden">
            <li class="group relative">
              <router-link to="/about"><p>О нас</p></router-link>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-50 z-50 list">
                <router-link to="/about/statys"><p class="mt-2">Статусы и сертификаты компании</p></router-link>
                <router-link to="/about/blagodar_letter"><p>Благодарственные письма</p></router-link>
                <router-link to="/about/rabota_runa"><p>Работа в Руна С</p></router-link>
                <router-link to="/about/politika"><p>Политика в отношении обработки ПДн</p></router-link>
                <router-link to="/about/soglasie"><p>Согласие на обработку ПДн</p></router-link>
              </ul>
            </li>
            <li class="group relative">
              <p>События</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <p>Новости</p>
                <p>Календарь мероприятий</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Программные продукты</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <router-link to="/1c-gos"><p>Решения 1С для государственных учреждений</p></router-link>
                <p>Решения 1С для здравоохранения</p>
                <p>Сервисы 1С</p>
                <p>Клиентские лицензии 1С</p>
                <p>Лицензии на сервер 1С</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Услуги</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <p>Сопровождение 1С</p>
                <p>Центр сертифицированного обучения 1С (ЦСО)</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Полезная информация</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <p>Ответы 1С  на вопросы о переходе на работу через Интернет</p>
                <p>Тонкости учета</p>
                <p>Актуальные релизы</p>
                <p>Как узнать, работаете вы в типовой или измененной конфигурации</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Учебный центр КУБиК</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <p>Вебинары</p>
                <p>Курсы и практические занятия</p>
                <p>Отзывы клиентов</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Контакты</p>
            </li>
          </ul>
        </div>

        <div class="flex gap-10">
          <div class="relative w-64">
            <input
                v-model="searchTerm"
                type="text"
                placeholder="Поиск..."
                class="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
            <ul
                v-if="filteredSections().length > 0"
                class="absolute z-50 bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto w-full shadow-lg"
            >
              <li
                  v-for="section in filteredSections()"
                  :key="section.link"
                  class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                <router-link :to="section.link">{{ section.name }}</router-link>
              </li>
            </ul>
          </div>
          <button class="max-[1400px]:block hidden" @click="isOpen=!isOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

      </div>

    </div>
    <div v-if="isOpen"
         class="fixed inset-0 z-100 bg-[#030303]/55 backdrop-blur-[2px]"
         @click="isOpen = false">
    </div>
  </header>


</template>

<style>
.list p{
  color: #717171;
}
.list p:hover{
  color: #333333;
}
body{
  position: relative;
}
.custom-select::after {
  content: '';
  position: absolute;
  top: 60%;
  left: 5px;
  transform: translateY(-50%);
  width: 1.3rem;
  height: 1.3rem;
  background-image: url('../assets/img/Sort.svg');
  z-index: 100;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
}

p {
  font-weight: 500;
}

button {
  letter-spacing: 0.03em;
}

li p {
  color: #1B1B1B;
  font-weight: 600;
  font-size: 14px;
}

.search {
  position: relative;
  border: 1px solid #3e3e3e;
  overflow: hidden;
  font-size: 12px;
}

input::placeholder {
  font-size: 12px;
}

.search input {
  padding-left: 40px;
  padding-right: 1rem;
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  line-height: 2.5rem;
}

.search::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  background-image: url('../assets/img/Search.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  z-index: 100;
}

select {
  border: 2px solid #003693;
}

select:focus {
  border: 2px solid #3e3e3e;
  outline: none;
}

li {
  position: relative;
}

.main li::after {
  content: '';
  position: absolute;
  right: -1.1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  background-image: url('../assets/img/Sort.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
}
.main li:last-child::after {
  content: none;
}
ul p {
  cursor: pointer;
}
</style>