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
import Contacts from "@/components/Contacts.vue";

export default {
  name: "Home",
  components: {Header, Rating, News, FAQ, Footer, category, About, WhyWe, Welcome, Contacts}
}
</script>

<template>
  <Header></Header>
  <main>
    <div data-aos="fade-up">
      <Welcome/>
    </div>

    <div data-aos="fade-up">
      <category></category>
    </div>

    <div data-aos="fade-up">
      <About></About>
    </div>

    <div data-aos="fade-up">
      <WhyWe/>
    </div>

    <div data-aos="fade-up">
      <News/>
    </div>

    <div data-aos="fade-up">
      <Rating/>
    </div>

    <div data-aos="fade-up">
      <Contacts/>
    </div>

    <div data-aos="fade-up">
      <FAQ/>
    </div>
  </main>


    <Footer/>
</template>

<style>
  main{
    margin-top: 100px;
  }
</style>