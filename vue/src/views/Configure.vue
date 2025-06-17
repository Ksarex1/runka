<script>
import ContentRendererPoleznaya from "@/components/ContentRenderer-Poleznaya.vue";

export default {
  components: {ContentRendererPoleznaya},
  name: "Configure"
}
</script>

<template>
  <ContentRendererPoleznaya>
    <div class="text">
      <h2 class="h2-razdel md:text-[30px] sm:text-[26px] font-bold mb-[20px]">Как узнать, работаете вы в типовой или измененной конфигурации</h2>
      <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]">Если вас интересует, в
        какой конфигурации вы работаете - типовой или измененной, то проверить это можно следующим образом:
        <br> Зайдите в конфигуратор меню Конфигурация - Поддержка - Настройка поддержки.</p>
      <img src="@/assets/img/configure-1.jpg" class="mt-[20px]">
      <p class="text1 text-[#5F687A] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[15px]">Если написано На
        поддержке, то эта конфигурация типовая, в случае, когда стоит Включена возможность изменения - скорее всего,
        конфигурация измененная.</p>
      <img src="@/assets/img/configure-2.jpg" class="mt-[20px]">
      <img src="@/assets/img/configure-3.jpg" class="mt-[20px]">
      <img src="@/assets/img/configure-4.jpg" class="mt-[20px]">
    </div>

  </ContentRendererPoleznaya>
</template>

<style scoped>

</style>