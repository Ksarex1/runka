<script>
import button1 from "@/components/button-1.vue";
import button2 from "@/components/button-2.vue";
export default {
  name: "About",
  components: {
    button1, button2
  }
}
</script>

<template>
  <section class="mt-[300px] bg-[#EFF3FA] py-[100px] px-4 sm:px-8 md:px-20 lg:px-[100px]">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
      <div class="w-full lg:w-[49%]">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">Подробнее О Компании</h2>
        <p class="mt-5 mb-6 sm:mt-[20px] sm:mb-[30px] text-base sm:text-[16px] text-[#5F687A]">
          Компания «Руна С» основана в 2002 году консультантами по бюджетному учету, имеющими опыт внедрения бюджетных проектов с 1997 года.
        </p>
        <img src="../assets/img/about-1.png" alt="О компании 1" class="w-full">
      </div>
      <div class="w-full lg:w-[49%]">
        <img src="../assets/img/about-2.png" alt="О компании 2" class="w-full">
        <p class="mt-6 mb-8 sm:mt-[30px] sm:mb-[45px] text-base sm:text-[16px] text-[#5F687A]">
          Постоянное повышение квалификации позволяет нам быть всегда в центре событий, происходящих в бюджетной сфере. Наши специалисты разговаривают с бухгалтерами на одном языке.
        </p>
        <div class=" buttons flex flex-row gap-4">
          <button1 id="button-1">Заказать консультацию</button1>
          <button2 id="button-2" class="ml-6">Подробнее</button2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#button-1{
  width: 258px;
  height: 49px;
}

#button-2{
  width: 142px;
  height: 49px;
}

@media (max-width: 640px) {
  section{
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 100px;
  }

  .buttons{
    flex-direction: column;
    align-items: center;
  }

  #button-1{
    width: 200px;
    height: 40px;
    font-size: 11px;
  }

  #button-2{
    width: 150px;
    height: 40px;
    font-size: 11px;
    margin-left: 5px;
  }

  p{
    font-size: 14px;
  }

  h2{
    font-size: 22px;
  }
}


</style>