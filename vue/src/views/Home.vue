<script>
import Welcome from "@/components/Welcome.vue";
import WhyWe from "@/components/WhyWe.vue";
import About from "@/components/About.vue";
import category from "@/components/category.vue";
import Footer from "@/components/Footer.vue";
import FAQ from "@/components/FAQ.vue";
import News from "@/components/News.vue";
import Rating from "@/components/Rating.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {Header, Rating, News, FAQ, Footer, category, About, WhyWe, Welcome}
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
  <Footer/>
</template>

<style scoped>

</style>