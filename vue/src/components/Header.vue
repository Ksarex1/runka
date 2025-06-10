<script>
export default {
  name: "Header"
}
</script>

<template>
  <section>
    <div class="container py-1.5 bg-primary">

      <div class="flex items-center text-white">
        <img src="../assets/img/1c.png" alt="1с">

        <span class="flex items-center text-sm">
          <img src="../assets/img/Ringer.svg" alt="phone">
          <p>+7 (963) 232-82-23</p>
        </span>

        <span class="flex items-center text-sm">
          <img src="../assets/img/Email.svg" alt="email">
          <p>info@runa-s.ru</p>
        </span>

        <span class="flex items-center text-sm">
          <img src="../assets/img/Location.svg" alt="phone">
          <p>г. Н. Новгород, ул. Нестерова, дом 9, офис 804</p>
        </span>

        <select name="" id="" class="bg-white text-primary-black">
          <option value="">русский</option>
          <option value="">english</option>
        </select>

        <div>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>