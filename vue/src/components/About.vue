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
  <section class="mt-[300px] bg-[#EFF3FA] py-[100px] px-[100px]">
    <div class="container flex items-center justify-between">
      <div class="w-[49%]">
        <h2 class="text-[36px] font-bold">Подробнее О Компании</h2>
        <p class="mt-[20px] mb-[30px] text-[20px] text-[#5F687A]">Компания «Руна С» основана в 2002 году консультантами по бюджетному учету, имеющими опыт внедрения бюджетных проектов с 1997 года.</p>
        <img src="../assets/img/about-1.png" alt="О компании 1">
      </div>
      <div class="w-[49%]">
        <img src="../assets/img/about-2.png" alt="О компании 2">
          <p class="mt-[30px] mb-[45px] text-[20px] text-[#5F687A]">Постоянное повышение квалификации позволяет нам быть всегда в центре событий, происходящих в бюджетной сфере. Наши специалисты разговаривают с бухгалтерами на одном языке.</p>
          <div class="flex">
            <button1 style="width: 258px; height: 49px;">Заказать консультацию</button1>
            <button2 style="width: 142px; height: 49px;" class="ml-6">Подробнее</button2>
          </div>
      </div>
    </div>
  </section>
</template>