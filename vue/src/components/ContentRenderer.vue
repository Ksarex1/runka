<template>
  <div class="sections-container flex flex-col gap-4">
    <div v-for="section in sections" :key="section.title" class="section">
      <h2 class="text-[20px] text-[#030303] mt-[40px] font-500 mb-[25px]">{{ section.title }}</h2>
      <p class="text-[#5F687A] text-[20px]">{{ section.text }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text2 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text3 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text4 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text5 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text6 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text7 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text8 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text9 }}</p>
      <p class="text-[#5F687A] text-[20px] mt-[20px]">{{ section.text10 }}</p>



      <!-- Списки -->
      <ul v-if="section.list && section.list.length" class="list-disc pl-5 mb-4">
        <li v-for="(item, idx) in section.list" :key="idx">{{ item }}</li>
      </ul>

      <!-- Картинки -->
      <div v-if="section.images.length" class="flex flex-wrap gap-4 mt-[40px]">
        <img
            v-for="(img, index) in section.images"
            :key="index"
            :src="img"
            :alt="section.title + ' ' + (index + 1)"
            class="w-[200px] h-auto rounded shadow cursor-pointer transition hover:scale-105"
            @click="openImage(img)"
        />
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="selectedImage" class="fixed inset-0 bg-[#030303] bg-opacity-30 flex items-center justify-center z-50" @click.self="closeImage">
      <div class="relative">
        <img :src="selectedImage" class="max-h-[90vh] max-w-[90vw] rounded shadow-xl" />
        <button @click="closeImage" class="absolute top-2 right-2 text-white text-3xl font-bold">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import content from "@/assets/content.json";
import { ref } from "vue";

export default {
  name: "ContentRenderer",
  props: {
    pageKey: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const selectedImage = ref(null);
    const openImage = (img) => selectedImage.value = img;
    const closeImage = () => selectedImage.value = null;

    const sections = ref([]);

    if (content[props.pageKey]) {
      sections.value = content[props.pageKey].map(item => ({
        ...item,
        list: Array.isArray(item.list) ? item.list : [],
        images: item.images.map(img =>
            new URL(`../assets/img/${img}`, import.meta.url).href
    )
    }));
    }

    return { sections, selectedImage, openImage, closeImage };
  }
};
</script>
