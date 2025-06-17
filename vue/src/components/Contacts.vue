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
      checkboxInactive,
      fullName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  },
  methods: {
    toggleConsent(which) {
      this[which] = !this[which]
    },
    checkConsents(e) {
      if (!this.consent1 || !this.consent2) {
        e.preventDefault()
        alert("Пожалуйста, подтвердите согласия перед отправкой.")
      }
    }
  },
  computed: {
    isFormValid() {
      return (
          this.consent1 &&
          this.consent2 &&
          this.fullName.trim() &&
          this.email.trim() &&
          this.phone.trim() &&
          this.message.trim()
      );
    }
  }


}
</script>

<template>
<section class="p-[50px] bg-[#101B44] mt-[100px] mb-[200px]">
  <div class="container h-[617px] flex justify-between 2xl:items-start xl:items-start 2xl:flex-row xl:flex-row  p-[50px] sm:items-center sm:flex-col">
    <div class="text-left  sm:w-[464px] flex flex-col sm:items-center xl:items-start">
      <div class="text-top1 flex flex-col pb-10 border-b border-b-[#D9D9D9] sm:items-center xl:items-start">
        <h2 class="text-[36px] font-medium text-white">Связаться с нами</h2>
        <p class="p-ostavte text-[20px] mt-[21px] mb-[35px] text-white">Оставьте заявку и мы свяжемся с вами в короткие сроки</p>
        <div class="icons flex sm:justify-between w-[30%]">
          <img class="w-[41px] h-[41px] cursor-pointer" src="../assets/img/vk.svg">
          <img class="w-[41px] h-[41px] cursor-pointer" src="../assets/img/tg.svg">
          <img class="w-[41px] h-[41px] cursor-pointer" src="../assets/img/ok.svg">

        </div>
      </div>

      <div class="text-btt flex flex-col justify-between mt-[40px]">
        <div class="txt flex-row flex">
          <img class="img-email" src="../assets/img/email-1.svg">
          <div class="flex flex-col ml-5">
            <p class="email-p1 text-[#BACAEA] sm:text-[14px]">Напишите нам на почту</p>
            <p class="email-p2 font-bold text-white xl:text-[14px]">runa_post@mail.ru</p>
          </div>
        </div>

        <div class="txt flex-row flex mt-[21px]">
          <img class="img-tel" src="../assets/img/call.svg">
          <div class="flex flex-col ml-5">
            <p class="tel-p1 text-[#BACAEA] sm:text-[14px]">Позвоните нам</p>
            <p class="tel-p2 font-bold text-white xl:text-[14px]">+7 963-232-82-23, +7 920-253-21-36</p>
          </div>
        </div>
      </div>

    </div>

    <div class="formaa bg-white 2xl:mt-[0px] sm:mt-[50px] 2xl:w-[830px] h-[701px] rounded-[35px] 2xl:px-[96px] md:pt-[70px] sm:pt-[40px] xl:w-[600px] lg:w-[800px] xl:px-[40px] lg:px-[40px] md:px-[30px] sm:px-[20px]">
      <form @submit="checkConsents" class="flex flex-wrap justify-between"   action="https://api.web3forms.com/submit"   method="POST">
        <input type="hidden" name="access_key" value="9cb6669d-5c6c-4291-a244-d0f400aa8063" />
        <input type="hidden" name="subject" value="Новая заявка с сайта" />
        <input type="hidden" name="from_name" value="Runa Contact Form" />
        <div class="inp sm:w-[45%]">
          <p class="2xl:text-[20px] xl:text-[18px] sm:text-[16px] font-bold">Полное имя</p>
          <input v-model="fullName" name="name" class="2xl:w-[268px] xl:w-[220px] lg:w-[330px] sm:w-[100%] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[14px]" placeholder="Дмитрий Кучеров...">
        </div>
        <div class="inp sm:w-[45%]">
          <p class="2xl:text-[20px] xl:text-[18px] sm:text-[16px] font-bold">Адрес эл. почты</p>
          <input v-model="email" name="email" class="2xl:w-[268px] xl:w-[220px] lg:w-[330px] sm:w-[100%] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[14px]" placeholder="example@mail.ru">
        </div>
        <div class="inp mt-[40px] sm:w-[45%]">
          <p class="2xl:text-[20px] xl:text-[18px] sm:text-[16px] font-bold">Номер телефона</p>
          <input v-model="phone" name="phone" class="2xl:w-[268px] xl:w-[220px] lg:w-[330px] sm:w-[100%] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[14px]" placeholder="(123) 456 78-90">
        </div>
        <div class="inp mt-[40px] sm:w-[45%]">
          <p class="2xl:text-[20px] xl:text-[18px] sm:text-[16px] font-bold">Название компании</p>
          <input v-model="company" name="company" class="2xl:w-[268px] xl:w-[220px] lg:w-[330px] sm:w-[100%] h-[30px] rounded-[13px] border border-[#5F687A] pl-[20px] mt-[15px] text-[#5F687A] text-[14px]" placeholder="Руна С">
        </div>

        <div class="inp mt-[40px] w-[100%]">
          <p class="2xl:text-[20px] xl:text-[18px] font-bold">Сообщение</p>
          <textarea v-model="message" name="message" class="inp-sms 2xl:w-[634px] xl:w-[100%] sm:w-[100%] md:h-[190px] sm:h-[150px] rounded-[13px] border border-[#5F687A] pl-[20px] pr-[20px] pt-[10px] mt-[15px] text-[#5F687A] text-[14px]" placeholder="Введите ваше сообщение здесь..."></textarea>
        </div>

        <div class="checkboxes">
          <div
              class="checkbox cursor-pointer flex justify-start items-start mt-[21px]"
              :data-checked="consent1"
              @click="toggleConsent('consent1')"
          >
            <img
                :src="consent1 ? checkboxActive : checkboxInactive"
                alt="checkbox"
                class="checkbox-icon"
            />
            <span class="checkbox-label 2xl:text-[10px] xl:text-[9px] md:text-[10px] sm:text-[9px] font-medium text-[#5F687A] ml-[10px]">Нажимая кнопку "Отправить", я даю свое согласие на обработку персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ "О персональных данных", на условиях и для целей, определенных <span class="underline">ПОЛИТИКОЙ В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ.</span></span>
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
            <span class="checkbox-label 2xl:text-[10px] xl:text-[9px] md:text-[10px] sm:text-[9px] font-medium text-[#5F687A] ml-[10px]">Нажимая кнопку "Отправить", я даю свое <span class="underline">СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ.</span></span>
          </div>
        </div>

        <Button1 :disabled="!isFormValid" class="btn-form md:w-[201px] md:h-[56px] mt-[27px] md:text-[20px] sm:w-[180px] sm:h-[40px] sm:text-[16px] font-bold" type="submit">Отправить</Button1>

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
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (min-width: 640px) {
  .p-ostavte{
    text-align: center;
  }
}
@media (min-width: 1280px) {
  .p-ostavte{
    text-align: start;
  }
}

@media (max-width: 640px) {
  .container{
    flex-direction: column;
  }
  section{
    margin-bottom: 650px;
  }

  .p-ostavte{
    text-align: center;
    font-size: 4vw;
  }

  .text-left{
    width: auto;
    align-items: center;
  }

  .text-top1{
    align-items: center;
  }

  h2{
    font-size: 24px;
    text-align: center;
  }

  .icons img{
    width: 35px;
    height: 35px;
  }

  .icons{
    justify-content: center;
  }

  .email-p1, .tel-p1{
    font-size: 12px;
  }

  .email-p2, .tel-p2{
    font-size: 10px;
  }

  .img-email, .img-tel{
    width: 25px;
  }

  .formaa{
    padding-top: 20px;
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  section{
    padding: 0;
  }

  .inp, .inp input, .inp textarea{
    width: 100%;
  }

  .inp{
    margin-top: 20px;
  }

  .inp-sms{
    height: 100px;
  }

  .checkbox-label{
    font-size: 8px;
  }

  .btn-form{
    width: 150px;
    height: 35px;
  }
}
</style>