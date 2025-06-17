<script>
import cards from "../assets/data/product-zdravoohrana.js"
import ContentRendererPrograms from "@/components/ContentRenderer-Programs.vue";
export default {
  components:{
    ContentRenderer: ContentRendererPrograms
  },
  name: "Zdravoohrana",
  data() {
    return {
      cards: cards
    }
  }
}
</script>

<template>
  <ContentRenderer :cards="cards"/>
</template>

<style scoped>

</style>