<script>
import checkboxActive from '@/assets/img/checkbox-active.svg'
import checkboxInactive from '@/assets/img/checkbox-inactive.svg'

import Button1 from "@/components/button-1.vue";

export default {
  name: 'Contacts',
  components:{
    Button1
  },
  data() {
    return {
      consent1: false,
      consent2: false,
      checkboxActive,
      checkboxInactive
    }
  },
  methods: {
    toggleConsent(which) {
      this[which] = !this[which]
    }
  }
}
</script>

<template>
<section class="p-[50px] bg-[#101B44] mt-[100px] mb-[200px]">
  <div class="container h-[617px] flex justify-between  p-[50px]">
    <div class="text-left  w-[464px] flex flex-col">
      <div class="text-top1 flex flex-col pb-10 border-b border-b-[#D9D9D9]">
        <h2 class="text-[36px] font-medium text-white">Связаться с нами</h2>
        <p class="text-[20px] mt-[21px] mb-[35px] text-white">Оставьте заявку и мы свяжемся с вами в короткие сроки</p>
        <div class="icons flex justify-between w-[30%]">
          <img class="w-[41px] h-[41px]" src="../assets/img/vk.svg">
          <img class="w-[41px] h-[41px]" src="../assets/img/tg.svg">
          <img class="w-[41px] h-[41px]" src="../assets/img/ok.svg">

        </div>
      </div>

      <div class="text-btt flex flex-col justify-between mt-[40px]">
        <div class="txt flex-row flex">
          <img src="../assets/img/email-1.svg">
          <div class="flex flex-col ml-5">
            <p class="text-[#BACAEA] xl:text-[14px]">Напишите нам на почту</p>
            <p class="font-bold text-white xl:text-[14px]">runa_post@mail.ru</p>
          </div>
        </div>

        <div class="txt flex-row flex mt-[21px]">
          <img src="../assets/img/call.svg">
          <div class="flex flex-col ml-5">
            <p class="text-[#BACAEA] xl:text-[14px]">Позвоните нам</p>
            <p class="font-bold text-white xl:text-[14px]">+7 963-232-82-23, +7 920-253-21-36</p>
          </div>
        </div>
      </div>

    </div>
    <div class="formaa bg-white w-[830px] h-[701px] rounded-[35px] px-[96px] pt-[70px]">
      <form class="flex flex-wrap justify-between">
        <div class="inp">
          <p class="text-[20px] font-bold">Полное имя</p>
          <input class="w-[268px] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[12px]" placeholder="Дмитрий Кучеров...">
        </div>
        <div class="inp">
          <p class="text-[20px] font-bold">Адрес эл. почты</p>
          <input class="w-[268px] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[12px]" placeholder="example@mail.ru">
        </div>
        <div class="inp mt-[40px]">
          <p class="text-[20px] font-bold">Номер телефона</p>
          <input class="w-[268px] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[12px]" placeholder="(123) 456 78-90">
        </div>
        <div class="inp mt-[40px]">
          <p class="text-[20px] font-bold">Название компании</p>
          <input class="w-[268px] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[12px]" placeholder="Руна С">
        </div>

        <div class="inp mt-[40px]">
          <p class="text-[20px] font-bold">Сообщение</p>
          <textarea class="inp-sms w-[634px] h-[190px] rounded-[13px] border border-[#5F687A] pl-[20px] pr-[20px] pt-[10px] mt-[15px] text-[#5F687A] text-[12px]" placeholder="Введите ваше сообщение здесь..."></textarea>
        </div>

        <div class="checkboxes">
          <div
              class="checkbox cursor-pointer flex justify-start items-center mt-[21px]"
              :data-checked="consent1"
              @click="toggleConsent('consent1')"
          >
            <img
                :src="consent1 ? checkboxActive : checkboxInactive"
                alt="checkbox"
                class="checkbox-icon"
            />
            <span class="checkbox-label text-[10px] font-medium text-[#5F687A] ml-[10px]">Нажимая кнопку "Отправить", я даю свое согласие на обработку персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ "О персональных данных", на условиях и для целей, определенных <span class="underline">ПОЛИТИКОЙ В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ.</span></span>
          </div>

          <div
              class="checkbox cursor-pointer flex justify-start items-center mt-[10px]"
              :data-checked="consent2"
              @click="toggleConsent('consent2')"
          >
            <img
                :src="consent2 ? checkboxActive : checkboxInactive"
                alt="checkbox"
                class="checkbox-icon"
            />
            <span class="checkbox-label text-[10px] font-medium text-[#5F687A] ml-[10px]">Нажимая кнопку "Отправить", я даю свое <span class="underline">СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ.</span></span>
          </div>
        </div>

        <Button1 class="w-[201px] h-[56px] mt-[27px] text-[20px] font-bold" type="button">Отправить</Button1>

      </form>
    </div>
  </div>
</section>
</template>

<style scoped>
.inp-sms{
  box-sizing: border-box;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>