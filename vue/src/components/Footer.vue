<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const pages = [
  {
    title: "Главная",
    pages: [
      "О нас", "События", "Программные продукты", "Услуги",
      "Полезная информация", "Учебный центр КУБиК", "Контакты"
    ]
  },
  {
    title: "Продукты",
    pages: [
      "1С:Бухгалтерия", "1С:Зарплата", "1С:Документооборот",
      "КУБиК:Управление", "Отчетность", "Поддержка"
    ]
  },
  {
    title: "Контакты",
    pages: [
      "Филиалы", "Телефоны", "Email", "Связаться с нами"
    ]
  }
];

const pageRoutesMap = {
  "О нас": "/about",
  "События": "/events",
  "Программные продукты": "/products",
  "Услуги": "/services",
  "Полезная информация": "/info",
  "Учебный центр КУБиК": "/training-center",
  "Контакты": "/contacts",

  "1С:Бухгалтерия": "/1c-buhgalteria",
  "1С:Зарплата": "/1c-zarplata",
  "1С:Документооборот": "/1c-dokumentoborot",
  "КУБиК:Управление": "/kubik-upravlenie",
  "Отчетность": "/otchetnost",
  "Поддержка": "/podderzhka",

  "Филиалы": "/filials",
  "Телефоны": "/phones",
  "Email": "/email",
  "Связаться с нами": "/contact-us",
};

const getRoute = (pageName) => {
  return pageRoutesMap[pageName] || '/';
};
</script>

<template>
  <footer class="bg-primary-dull text-white">
    <div class="container max-w-[1440px] mx-auto px-5 py-5">
      <div class="flex flex-col lg:flex-row justify-between gap-10  py-10 items-center">
        <div class="w-full lg:w-[235px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
          <div>
            <img src="../assets/img/logo.png" alt="logo" class="mb-2" />
          </div>
          <p class="text-[14px]">{{ t('footer.title') }}</p>
          <div class="mt-5 flex flex-wrap gap-3 max-md:flex-col max-md:items-center max-md:text-center">
            <button class="bg-white text-primary-dull border border-white rounded-2xl px-4 py-1 text-sm font-medium cursor-pointer">
              {{ t('footer.but') }}
            </button>
            <router-link to="/about">
            <button class="bg-transparent text-white border border-gray-500 rounded-2xl px-4 py-1 text-sm font-medium cursor-pointer">
              {{ t('footer.podrobnee') }}
            </button>
            </router-link>
          </div>
        </div>

        <div class="flex-1 flex flex-wrap gap-10 justify-center lg:justify-start">
          <div v-for="(page, idx) in pages" :key="idx" class="min-w-[150px]">
            <h5 class="mb-5 font-semibold text-base">{{ page.title }}</h5>
            <ul class="space-y-2 text-[13px]">
              <li v-for="(p, i) in page.pages" :key="i">
                <router-link :to="getRoute(p)" class="hover:underline">
                  {{ p }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="md:block w-[480px] max-lg:mt-10 hidden">
          <div class="bg-white h-[300px] text-black flex items-center justify-center">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A716316f5f695685e9bfb228310c054df0348904588e0d904595201685576439e&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="h-px w-full bg-primary3"></div>

    <div class="container max-w-[1440px] mx-auto px-5 py-8 flex flex-col lg:flex-row justify-between items-center gap-5">
      <p class="text-white text-[14px] font-medium text-center lg:text-left">
        {{ t('footer.copyr') }}
      </p>
      <div class="flex gap-2.5">
        <img src="../assets/img/vk.svg" alt="vk" class="w-6 h-6 cursor-pointer">
        <img src="../assets/img/tg.svg" alt="tg" class="w-6 h-6 cursor-pointer">
        <img src="../assets/img/ok.svg" alt="ok" class="w-6 h-6 cursor-pointer">
      </div>
    </div>
  </footer>
</template>

<style scoped>
p, li {
  color: #E6E6E6;
  font-size: 14px;
  font-weight: 400;
}

li {
  font-size: 13px;
}

button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 12px;
}

h5 {
  font-weight: 600;
}
</style>
