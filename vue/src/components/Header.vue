<script setup>
import {ref, watch} from 'vue'

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


</script>

<template>
  <section class="flex flex-col">
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
        <li class="text-[#030303]">О нас</li>
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

          <div class="gap-8 flex text-sm ">
            <router-link to="/login">
              <button
                  class="shadow-lg bg-white text-primary-black font-semibold px-6.25 py-1 rounded-md cursor-pointer hover:bg-gray-300 transition">
                Войти
              </button>
            </router-link>
            <router-link to="/register">
              <button
                  class="shadow-lg hidden lg:block text-white px-6.25 py-1 font-semibold rounded-md border-white border cursor-pointer hover:text-primary-black hover:bg-white transition">
                Регистрация
              </button>
            </router-link>
          </div>

        </div>

      </div>
    </div>

    <div class=" w-full flex justify-center shadow-xl/20">
      <div class="container py-1.5 flex justify-between py-4">



        <div>
          <img src="../assets/img/logo.png" alt="logo">
        </div>

        <div class="flex items-center">

          <ul class="main flex gap-9 max-[1400px]:hidden">
            <li class="group relative">
              <p>О нас</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-35 z-50">
                <p class="mt-2">О компании</p>
                <p>Наша миссия</p>
                <p>Команда</p>
              </ul>
            </li>
            <li class="group relative">
              <p>События</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50">
                <p>Актуальные события</p>
                <p>Архив</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Программные продукты</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50">
                <p>1C</p>
                <p>CRM</p>
                <p>ERP</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Услуги</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50">
                <p>Консультации</p>
                <p>Внедрение</p>
                <p>Поддержка</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Полезная информация</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50">
                <p>Статьи</p>
                <p>Гайды</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Учебный центр КУБиК</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50">
                <p>Курсы</p>
                <p>Расписание</p>
              </ul>
            </li>
            <li class="group relative">
              <p>Контакты</p>
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-[#030303] p-2 rounded shadow-lg mt-2 w-48 z-50">
                <p>Телефон</p>
                <p>Email</p>
                <p>Адрес</p>
              </ul>
            </li>
          </ul>
        </div>

        <div class="flex gap-10">
          <div class="search rounded-xl border max-sm:hidden block" style="position: relative">
            <input type="text" placeholder="Поиск..." class="rounded-xl py-0"/>
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
  </section>


</template>

<style>
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
  content: ''; /* Пустое содержимое */
  position: absolute;
  right: -1.1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem; /* Ширина иконки */
  height: 1rem; /* Высота иконки */
  background-image: url('../assets/img/Sort.svg'); /* Путь к иконке */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
}

ul p {
  cursor: pointer;
}
</style>