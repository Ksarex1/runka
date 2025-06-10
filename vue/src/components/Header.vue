<script>
export default {
  name: "Header"
}
</script>

<template>
  <section class="bg-primary">
    <div class="container py-1.5">

      <div class="flex items-center text-white justify-between">

        <div>
          <img src="../assets/img/1c.png" alt="1с">
        </div>

        <div class="flex gap-8">
          <div class="flex gap-10">
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
          <button class="bg-white text-primary-dull px-6.25 py-1 rounded-md cursor-pointer">Войти</button>
          <button class="text-white px-6.25 py-1 rounded-md border-white border cursor-pointer">Регистрация</button>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>

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

</style>