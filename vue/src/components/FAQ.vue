<template>
  <section class="2xl:mt-[200px] xl:mt-[250px] lg:mt-[650px] md:mt-[700px] sm:mt-[600px] p-[50px] bg-[#EFF3FA] mb-[100px]">
    <div class="container flex flex-col justify-center items-center">
      <div class="text w-full md:w-[60%] text-center">
        <h2 class="font-bold text-[#030303] text-3xl md:text-[36px]">{{ t('faq.title') }}</h2>
        <p class="text-[#5F687A] text-base md:text-[18px] mt-2">
          {{ t('faq.subtitle') }}
        </p>
      </div>

      <div class="accordion-wrapper mt-12 w-full flex flex-col items-center">
        <div
            v-for="(accordion, index) in accordions"
            :key="accordion.id"
            class="acc shadow-xl w-[1196px] lg:w-[1000px] md:w-[700px] sm:w-[600px] border border-[#5F687A] rounded-[15px] overflow-hidden mb-4"
        >
          <button
              class="cursor-pointer accordion-header w-full xl:h-[100px] sm:h-[75px] px-6 py-4 pb-3 flex justify-between items-center text-left"
              @click="toggleAccordion(index)"
              :aria-expanded="accordion.isOpen"
          >
            <h4 class="accordion-title text-[#030303] xl:text-[22px] sm:text-[18px] font-medium break-words text-left">
              {{ accordion.title }}
            </h4>
            <img
                class="accordion-icon ml-3 xl:h-[50px] xl:w-[50px] sm:h-[25px] sm:w-[25px] transition-transform duration-200"
                :src="accordion.isOpen ? closeIcon : openIcon"
                :alt="accordion.isOpen ? 'Закрыть' : 'Открыть'"
            />
          </button>

          <transition
              @before-enter="beforeEnter"
              @enter="enter"
              @before-leave="beforeLeave"
              @leave="leave"
          >
            <div
                v-show="accordion.isOpen"
                class="accordion-content bg-[#EFF3FA] px-6 pb-4 text-[18px] sm:text-[14px] text-[#5F687A] whitespace-normal break-words"
            >
              {{ accordion.content }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import openIcon from '@/assets/img/open-but.png';
import closeIcon from '@/assets/img/close-but.png';

export default {
  name: "FAQ",
  setup(){
    const { t } = useI18n()
    return {t}
  },
  data() {
    return {
      openIcon,
      closeIcon,
      accordions: [
        {
          id: 1,
          title: "Как сделать заказ на сайте?",
          content: "Для оформления заказа выберите интересующий товар, добавьте его в корзину и перейдите к оформлению заказа, указав свои контактные данные и способ оплаты.",
          isOpen: false
        },
        {
          id: 2,
          title: "Какие способы оплаты вы принимаете?",
          content: "Мы принимаем оплату банковскими картами, через электронные кошельки и при получении наличными в пункте выдачи.",
          isOpen: false
        },
        {
          id: 3,
          title: "Сколько длится доставка заказа?",
          content: "Сроки доставки зависят от региона и выбранного способа. Обычно доставка занимает от 2 до 7 рабочих дней.",
          isOpen: false
        },
        {
          id: 4,
          title: "Можно ли вернуть товар?",
          content: "Да, вы можете вернуть товар в течение 14 дней при сохранении товарного вида и упаковки. Для возврата свяжитесь с нашей службой поддержки.",
          isOpen: false
        },
      ]

    };
  },
  methods: {
    toggleAccordion(index) {
      this.accordions[index].isOpen = !this.accordions[index].isOpen;
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.transition = 'all 0.3s ease';
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.transition = 'all 0.3s ease';
      el.style.height = '0';
      el.style.opacity = '0';
    }
  }
}
</script>

<style scoped>
@media (max-width: 640px) {
  .acc{
    width: 100%;
    height: 60px;
  }
  h4{
    font-size: 2.2vw;
  }

  .accordion-icon{
    width: 5%;
    height: auto;
  }

  .accordion-header{
    align-items: start;
  }
}
.accordion-content {
  overflow: hidden;
}
</style>