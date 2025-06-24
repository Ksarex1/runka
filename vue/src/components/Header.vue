<script setup>
import {ref, watch, computed, inject} from 'vue'
import {user, isAuthenticated, logout} from '../auth.js'
import { useI18n } from 'vue-i18n'
import defaultAvatar from '../assets/img/profileImg.jpg'

const { t, locale } = useI18n()
const isOpen = ref(false)
const isTransitioning = ref(false)
const cart = inject('cart')

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

const summProducts = () => {
  return cart.value.reduce((acc, item) => acc + item.count, 0)
}

const searchTerm = ref('')

const sections = [
  {name: t('header.about'), link: '/about'},
  {name: t('header.events'), link: '/contacts'},
  {name: t('header.sections.about.statuses'), link: '/about/statys'},
  {name: t('header.sections.about.letters'), link: '/about/blagodar_letter'},
  {name: t('header.sections.about.jobs'), link: '/about/rabota_runa'},
  {name: t('header.sections.about.policy'), link: '/about/politika'},
  {name: t('header.sections.about.consent'), link: '/about/soglasie'},
  {name: t('header.sections.events.news'), link: '/contacts'},
  {name: t('header.sections.events.calendar'), link: '/contacts'},
  {name: t('header.sections.products.gov'), link: '/1c-gos'},
  {name: t('header.sections.products.healthcare'), link: '/contacts'},
  {name: t('header.sections.products.licenses'), link: '/contacts'},
  {name: t('header.sections.products.server'), link: '/contacts'},
  {name: t('header.sections.services.support'), link: '/1c-sopr/ITS'},
  {name: t('header.sections.services.training'), link: '/cso'},
  {name: t('header.sections.info.answers'), link: '/otveti-1c'},
  {name: t('header.sections.info.releases'), link: '/act-reliz'},
  {name: t('header.sections.info.configs'), link: '/configure'},
  {name: t('header.sections.kubik.webinars'), link: '/kubik/vebinar'},
  {name: t('header.sections.kubik.courses'), link: '/kubik/kyrsi'},
  {name: t('header.contacts'), link: '/contacts'},
]

const filteredSections = () => {
  if (!searchTerm.value.trim()) return []
  return sections.filter(s =>
      s.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
}

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<template>
  <header class="flex flex-col fixed top-0 left-0 w-full z-200 bg-white ">
    <!-- Мобильное меню -->
    <div v-if="isOpen || isTransitioning"
         class="max-[1400px]:flex flex-col bg-white p-4 absolute top-0 right-0 z-105 px-10 lg:w-2/6 items-end h-screen
            transition-transform duration-300 ease-in-out transform max-lg:w-4/6"
         :class="isOpen ? 'translate-x-0' : 'translate-x-full'">

      <svg xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke="#005DFF"
           class="w-8 h-8 mb-3 " @click="isOpen = false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>

      <div class="border-t border-gray-400 pt-5">
        <div class="relative w-90%">
          <input
              v-model="searchTerm"
              type="text"
              :placeholder="t('header.search')"
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

        <ul class="flex flex-col gap-4 text-end w-full pt-5">
          <router-link to="/about">
            <li class="text-[#030303]">{{ t('header.about') }}</li>
          </router-link>
          <router-link to="/">
            <li class="text-[#030303]">{{ t('header.events') }}</li>
          </router-link>
          <router-link to="/1c-gos">
            <li class="text-[#030303]">{{ t('header.products') }}</li>
          </router-link>
          <router-link to="/">
            <li class="text-[#030303]">{{ t('header.services') }}</li>
          </router-link>
          <router-link to="/contacts">
            <li class="text-[#030303]">{{ t('header.contacts') }}</li>
          </router-link>
        </ul>
      </div>
    </div>

    <!-- Верхняя полоса -->
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
                <p>{{ t('header.adress') }}</p>
              </span>
            </div>

            <div class="custom-select relative sm:flex items-center hidden">
              <select
                  v-model="locale"
                  @change="changeLanguage($event.target.value)"
                  class="bg-white text-primary-black w-30 appearance-none pl-7 text-sm cursor-pointer"
              >
                <option value="ru">русский</option>
                <option value="en">english</option>
              </select>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <template v-if="isAuthenticated">
              <router-link to="/me">
                <p>{{ t('header.account') }}</p>
              </router-link>
              <router-link to="/cart" class="relative">
                <div
                    class="absolute bg-white w-5 h-5 text-center flex items-center justify-center rounded-2xl -right-4 -bottom-2"
                    v-if="cart.length > 0">
                  <h5 class="text-primary2 text-[12px] m-0 p-0 font-medium">
                    {{ summProducts() }}
                  </h5>
                </div>
                <img src="@/assets/img/Cart.svg" class="w-6 h-6" alt="cart"/>
              </router-link>
              <button @click="logout"
                      class="cursor-pointer text-sm text-white bg-red-500 py-1.25 px-4 rounded-lg hover:bg-red-900 ml-3">
                {{ t('header.logout') }}
              </button>
            </template>
            <template v-else>
              <router-link to="/login"
                           class="text-sm bg-white text-black font-medium px-5 py-1 rounded-lg shadow-2xl hover:bg-gray-300 transition">
                {{ t('header.login') }}
              </router-link>
              <router-link to="/register"
                           class="max-sm:hidden text-sm text-white border border-white font-medium px-5 py-1 rounded-lg shadow-2xl hover:bg-blue-900 hover:text-white transition">
                {{ t('header.register') }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Основное меню -->
    <div class="w-full flex justify-center shadow-xl/20">
      <div class="container py-1.5 flex justify-between py-4">
        <div>
          <router-link to="/">
            <img src="../assets/img/logo.png" alt="logo">
          </router-link>
        </div>

        <div class="flex items-center">
          <ul class="main flex gap-9 max-[1400px]:hidden">
            <li class="group relative">
              <router-link to="/about"><p>{{ t('header.about') }}</p></router-link>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-50 z-50 list">
                <router-link to="/about/statys"><p class="mt-2">{{ t('header.sections.about.statuses') }}</p></router-link>
                <router-link to="/about/blagodar_letter"><p>{{ t('header.sections.about.letters') }}</p></router-link>
                <router-link to="/about/rabota_runa"><p>{{ t('header.sections.about.jobs') }}</p></router-link>
                <router-link to="/about/politika"><p>{{ t('header.sections.about.policy') }}</p></router-link>
                <router-link to="/about/soglasie"><p>{{ t('header.sections.about.consent') }}</p></router-link>
              </ul>
            </li>
            <li class="group relative">
              <router-link to="/news"><p>{{ t('header.events') }}</p></router-link>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <router-link to="/news"><p>{{ t('header.sections.events.news') }}</p></router-link>
                <router-link to="/calendar"><p>{{ t('header.sections.events.calendar') }}</p></router-link>
              </ul>
            </li>
            <li class="group relative">
              <router-link to="/1c-gos"><p>{{ t('header.products') }}</p></router-link>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <router-link to="/1c-gos"><p>{{ t('header.sections.products.gov') }}</p></router-link>
                <router-link to="/1c-zdravoohrana"><p>{{ t('header.sections.products.healthcare') }}</p></router-link>
                <router-link to="/1c-client-license"><p>{{ t('header.sections.products.licenses') }}</p></router-link>
                <router-link to="/1c-server-license"><p>{{ t('header.sections.products.server') }}</p></router-link>
              </ul>
            </li>
            <li class="group relative">
              <router-link to="/1c-sopr/ITS"><p>{{ t('header.services') }}</p></router-link>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <router-link to="/1c-sopr/ITS"><p>{{ t('header.sections.services.support') }}</p></router-link>
                <router-link to="/cso"><p>{{ t('header.sections.services.training') }}</p></router-link>
              </ul>
            </li>
            <li class="group relative">
              <router-link to="/kubik"><p>{{ t('header.sections.kubik.info') }}</p></router-link>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50 list">
                <router-link to="/kubik/vebinar"><p>{{ t('header.sections.kubik.webinars') }}</p></router-link>
                <router-link to="/kubik/kyrsi"><p>{{ t('header.sections.kubik.courses') }}</p></router-link>
              </ul>
            </li>
            <li class="group relative">
              <router-link to="/contacts"><p>{{ t('header.contacts') }}</p></router-link>
            </li>
          </ul>
        </div>

        <div class="flex gap-10">
          <div class="relative w-64 max-sm:hidden">
            <input
                v-model="searchTerm"
                type="text"
                :placeholder="t('header.search')"
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
/* Ваши существующие стили остаются без изменений */
.list p {
  color: #717171;
}

.list p:hover {
  color: #333333;
}

body {
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