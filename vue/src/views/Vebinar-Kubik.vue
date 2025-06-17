<script>
import cards from "@/assets/data/vebinar-content.js"
import ContentRendererKubik from "@/components/ContentRenderer-Kubik.vue";
import Button1 from "@/components/button-1.vue";
export default {
  components: {Button1, ContentRendererKubik},
  name: "Vebinar-Kubik",
  data(){
    return{
      cards: cards
    }
  }
}
</script>

<template>
  <ContentRendererKubik>
    <h2 class="h2-razdel md:text-[30px] sm:text-[26px] font-bold mb-[4px]">Вебинары</h2>
    <div class="cards mt-[30px] flex flex-col gap-[32px]">
      <div v-for="card in cards" :key="card.img" class="card flex gap-[40px] items-center">
        <img :src="card.img" class="h-full rounded-[25px]">
        <div class="text flex flex-col justify-center">
          <h3 class="ellipsis-2-lines font-bold text-[22px]">{{card.title}}</h3>
          <p class="ellipsis-2-lines text-[16px] text-[#5F687A] mt-[10px] mb-[20px]">{{card.desc}}</p>
          <h4 class="font-medium text-[18px]">{{card.date}}</h4>
          <Button1 class="but w-[220px] h-[43px] mt-[30px]">Подробнее</Button1>
        </div>
      </div>

    </div>
  </ContentRendererKubik>
</template>

<style scoped>
.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;     /* Ограничение на 2 строки */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 1280px) {
  .cards{
    gap: 50px;
  }
}

@media (max-width: 1024px) {
  .cards{
    gap: 50px;
  }

  h3{
    font-size: 16px;
  }
  img{
    height: auto;
  }

  p{
    font-size: 14px;
  }

  h4{
    font-size: 16px;
  }
}

@media (max-width: 640px) {
  h3{
    font-size: 18px;
  }
}

@media (max-width: 510px) {
  h3{
    font-size: 3vw;
  }

  p{
    font-size: 12px;
  }

  h4{
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
    margin-top: 10px;
  }

  img{
    border-radius: 10px;
  }

  p{
    font-size: 10px;
  }

  h4{
    font-size: 3vw;
  }
}
</style>