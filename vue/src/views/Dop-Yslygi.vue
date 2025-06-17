<script>
import cards from "@/assets/data/dop-yslygi.js"
import ContentRendererYslygi from "@/components/ContentRenderer-Yslygi.vue";
import Button1 from "@/components/button-1.vue";
export default {
  components: {Button1, ContentRendererYslygi},
  name: "DopYslygi",
  data(){
    return{
      cards: cards
    }
  }
}
</script>

<template>
  <ContentRendererYslygi>
     <h2 class="h2-razdel md:text-[30px] sm:text-[26px] font-bold mb-[4px]">Дополнительные услуги</h2>
    <div class="cards mt-[30px] flex flex-col gap-[30px]">
      <div v-for="card in cards" :key="card.img" class="card flex gap-[40px]">
        <img :src="card.img" class="">
        <div class="text flex flex-col justify-center">
          <h3 class="font-bold text-[22px]">{{card.title}}</h3>
          <Button1 class="but w-[220px] h-[43px] mt-[30px]">Подробнее</Button1>
        </div>
      </div>

    </div>
  </ContentRendererYslygi>
</template>

<style scoped>
@media (max-width: 640px) {
  h3{
    font-size: 18px;
  }
}

@media (max-width: 510px) {
  h3{
    font-size: 3vw;
  }

  .but{
    width: 50%;
    height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img{
    width: 30%;
  }
}

@media (max-width: 400px) {
  .card{
    gap: 20px;
  }

  .but{
    font-size: 12px;
  }
}
</style>