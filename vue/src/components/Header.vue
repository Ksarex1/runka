<script setup>

</script>

<template>
  <section class="flex flex-col">
    <div class="bg-primary w-full flex justify-center">
      <div class="container py-1.5">

        <div class="flex items-center text-white justify-between">

          <div>
            <img src="../assets/img/1c.png" alt="1с">
          </div>

          <div class="flex gap-8">
            <div class="flex gap-6">
          <span class="flex items-center text-sm">
            <img src="../assets/img/Ringer.svg" alt="phone" class="mr-1.5">
            <p>+7 (963) 232-82-23</p>
          </span>

              <span class="flex items-center text-sm">
            <img src="../assets/img/Email.svg" alt="email" class="mr-1.5">
            <p>info@runa-s.ru</p>
          </span>

              <span class="flex items-center text-sm">
            <img src="../assets/img/Location.svg" alt="phone" class="mr-1.5">
            <p>г. Н. Новгород, ул. Нестерова, дом 9, офис 804</p>
          </span>
            </div>

            <div class="custom-select relative">
              <select class="bg-white text-primary-black w-30 appearance-none pl-7 text-sm">
                <option value="">русский</option>
                <option value="">english</option>
              </select>
            </div>
          </div>

          <div class="gap-8 flex text-sm ">
            <button class="shadow-lg bg-white text-primary-black font-semibold px-6.25 py-1 rounded-md cursor-pointer hover:bg-gray-300 transition">Войти</button>
            <button class="shadow-lg text-white px-6.25 py-1 font-semibold rounded-md border-white border cursor-pointer hover:text-primary-black hover:bg-white transition">Регистрация</button>
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
          <ul class="flex gap-9">
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
              <ul class="absolute hidden group-hover:flex flex-col gap-2 bg-white text-black p-2 rounded shadow-lg mt-2 w-48 z-50">
                <p>Телефон</p>
                <p>Email</p>
                <p>Адрес</p>
              </ul>
            </li>
          </ul>
        </div>

        <div class="search rounded-xl border" style="position: relative">
          <input type="text" placeholder="Поиск..." class="rounded-xl py-0" />
        </div>
      </div>

    </div>

  </section>


</template>

<style>

.custom-select::after {
  content: '';
  position: absolute;
  top: 60%;
  left: 5px;
  transform: translateY(-50%);
  width: 1.3rem;
  height: 1.3rem;
  background-image: url('../assets/img/Sort.svg');
  z-index: 120;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
}
p{
  font-weight: 500;
}
button{
  letter-spacing: 0.03em;
}

li p{
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
  z-index: 120;
}
select{
  border: 2px solid #003693;
}
select:focus{
  border: 2px solid #3e3e3e;
  outline: none;
}
li {
  position: relative;
}

li::after {
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
ul p{
  cursor: pointer;
}
</style>