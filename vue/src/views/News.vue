<template>
<ContentRendererEvents>
  <section>
    <div class="container">
      <h2 class="font-medium text-[30px]">Новости</h2>
        <div class="cards mt-[30px] flex flex-col gap-[30px]">
          <div class="card flex gap-[40px]">
            <img src="@/assets/img/news-img-1.png">
            <div class="text flex flex-col justify-center">
              <h3 class="font-bold text-[22px]">Предложение на 2025 год от Клуба Уникальных Бухгалтеров и Консультантов «Будь в курсе»</h3>
              <p class="text-[16px] text-[#5F687A] mt-[10px] mb-[20px]">В 2025г году мы поменяли формат обучения. Из квартальных семинаров перевели занятия в регулярные 2 раза в месяц.</p>
              <h4 class="font-medium text-[18px]">Июнь 27, 2023</h4>
              <Button1 class="w-[220px] h-[43px] mt-[30px]">Подробнее</Button1>
            </div>
          </div>

          <div class="card flex gap-[40px]">
            <img src="@/assets/img/news-img-1.png">
            <div class="text flex flex-col justify-center">
              <h3 class="font-bold text-[22px]">Предложение на 2025 год от Клуба Уникальных Бухгалтеров и Консультантов «Будь в курсе»</h3>
              <p class="text-[16px] text-[#5F687A] mt-[10px] mb-[20px]">В 2025г году мы поменяли формат обучения. Из квартальных семинаров перевели занятия в регулярные 2 раза в месяц.</p>
              <h4 class="font-medium text-[18px]">Июнь 27, 2023</h4>
              <Button1 class="w-[220px] h-[43px] mt-[30px]">Подробнее</Button1>
            </div>
          </div>

          <div class="card flex gap-[40px]">
            <img src="@/assets/img/news-img-1.png">
            <div class="text flex flex-col justify-center">
              <h3 class="font-bold text-[22px]">Предложение на 2025 год от Клуба Уникальных Бухгалтеров и Консультантов «Будь в курсе»</h3>
              <p class="text-[16px] text-[#5F687A] mt-[10px] mb-[20px]">В 2025г году мы поменяли формат обучения. Из квартальных семинаров перевели занятия в регулярные 2 раза в месяц.</p>
              <h4 class="font-medium text-[18px]">Июнь 27, 2023</h4>
              <Button1 class="w-[220px] h-[43px] mt-[30px]">Подробнее</Button1>
            </div>
          </div>

          <div class="card flex gap-[40px]">
            <img src="@/assets/img/news-img-1.png">
            <div class="text flex flex-col justify-center">
              <h3 class="font-bold text-[22px]">Предложение на 2025 год от Клуба Уникальных Бухгалтеров и Консультантов «Будь в курсе»</h3>
              <p class="text-[16px] text-[#5F687A] mt-[10px] mb-[20px]">В 2025г году мы поменяли формат обучения. Из квартальных семинаров перевели занятия в регулярные 2 раза в месяц.</p>
              <h4 class="font-medium text-[18px]">Июнь 27, 2023</h4>
              <Button1 class="w-[220px] h-[43px] mt-[30px]">Подробнее</Button1>
            </div>
          </div>
        </div>
    </div>
  </section>
</ContentRendererEvents>
</template>

<script>
import ContentRendererEvents from "@/components/ContentRenderer-Events.vue";
import Button2 from "@/components/button-2.vue";
import Button1 from "@/components/button-1.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "News",
  components: { Footer, Header, Button1, Button2, ContentRendererEvents },

  setup() {
    const menuOpen = ref(false);
    const route = useRoute();

    return { menuOpen, route };
  },
};
</script>

<style scoped>
.group{
  list-style: none;
}

.list-disc li{
  color: #5F687A;
  font-size: 20px;
}

h2{
  display: inline-block;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1536px) {
  .list-disc li{
    font-size: 20px;
  }
}

@media (max-width: 1280px) {
  .list-disc li{
    font-size: 18px;
  }
}

@media (max-width: 1024px) {
  .list-disc li{
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .list-disc li{
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .list-disc li, .text1, .text2{
    font-size: 14px;
  }

  .h2-razdel{
    font-size: 20px;
  }

  #butt{
    font-size: 14px;
  }
}


</style>