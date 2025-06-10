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
<section>
  <div class="container">
    <div class="left">
      <h2>Подробнее О Компании</h2>
      <p class="mt-4 mb-7.5">Компания «Руна С» основана в 2002 году консультантами по бюджетному учету, имеющими опыт внедрения бюджетных проектов с 1997 года.</p>
      <img src="../assets/img/about-1.png">
    </div>
    <div class="right">
      <img src="../assets/img/about-2.png">
      <p class="mt-7.5 mb-11">Постоянное повышение квалификации позволяет нам быть всегда в центре событий, происходящих в бюджетной сфере. Наши специалисты разговаривают с бухгалтерами на одном языке.</p>
      <div class="buttons">
        <button1 style="width: 258px; height: 49px;">Заказать консультацию</button1>
        <button2 class="ml-6" style="width: 142px; height: 49px;">Подробнее</button2>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
section{
  margin-top: 300px;
  background-color: #EFF3FA;
  padding: 100px;
}

h2{
  font-size: 36px;
  font-weight: bold;
}

p{
  font-size: 20px;
  color: #5F687A;
}

.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left, .right{
  width: 49%;
}
</style>