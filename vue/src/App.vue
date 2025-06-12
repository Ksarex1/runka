<script>
import Header from "@/components/Header.vue";
import button1 from "@/components/button-1.vue";
import button2 from "@/components/button-2.vue";
import category from "@/components/category.vue";
import Welcome from "@/components/Welcome.vue";
import About from "@/components/About.vue";
import WhyWe from "@/components/WhyWe.vue";
import News from "@/components/News.vue";
import Rating from "@/components/Rating.vue";
import FAQ from "@/components/FAQ.vue";
export default {
  components: {
    Header, button1, button2, category, Welcome, About,WhyWe, News, Rating, FAQ
  }
}
</script>

<template>
  <Header></Header>
  <Welcome></Welcome>
  <category></category>
  <About></About>
  <WhyWe/>
  <News/>
  <Rating/>
  <FAQ/>

</template>

<style scoped>

</style>