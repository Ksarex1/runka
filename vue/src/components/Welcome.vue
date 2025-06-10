<script>

</script>

<template>
  <section class="h-full py-15">
    <div class="container">
      <div class="grid grid-cols-12 gap-6 flex items-center">
        <div class="col-span-5">
          <h1 class="mb-4 text-[50px]">Точные решения<br> для эффективной бухгалтерии</h1>
          <p class="text-[18px] text-primary3 mb-15">Мы решаем самые трудные задачи автоматизации в государственных учреждениях самыми простыми способами. Мы готовы взять на себя решение любых задач от самых простых и до самых сложных</p>
          <div class="flex gap-5">
            <button class="px-10 bg-primary2 text-white rounded-xl py-2 cursor-pointer hover:bg-primary transition">Подробнее</button>
            <button class="px-10 bg-white text-primary3 rounded-xl py-2 cursor-pointer border hover:bg-gray-200 transition">Подробнее</button>
          </div>
        </div>
        <div class="col-span-7 ">
          <img src="../assets/img/welcomeIMg.png" alt="welcome" class="w-full h-auto">
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
button{
  font-weight: 600;
  font-size: 18px;
}
h1{
  font-weight: 600;
  line-height: 60px;
}
p{
  font-weight: 500;
}
img{
  max-width: 100%;
}
section{
  background-image: url('../assets/img/welcome.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>