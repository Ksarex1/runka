<script>
import Header from '../components/Header.vue'
import { ref } from 'vue'

export default {
  name: "Me",
  components: { Header },
  setup() {
    const isEditing = ref(false)

    const toggleEdit = () => {
      isEditing.value = !isEditing.value
    }

    return { isEditing, toggleEdit }
  }
}
</script>

<template>
  <Header />
  <main>
  <div data-aos="fade-up">
  <section class="mt-17 relative max-md:mb-30">
    <div class="container">
      <h1 class="text-[45px] font-bold mb-10">Личный кабинет</h1>

      <div class="border border-gray-300 rounded-2xl p-[60px] bg-[#f9fbff]">
        <div class="flex flex-col md:flex-row gap-10">

          <div class="flex flex-col items-center w-full md:w-1/3">
            <div class="w-52 h-52 mb-6">
              <img class="rounded-full w-full h-full object-cover" src="@/assets/img/profileImg.jpg" alt="profileImg" />
            </div>
            <button class="rounded-xl bg-primary2 py-2 px-5 text-white font-bold hover:bg-blue-700">
              Загрузить фото
            </button>
          </div>

          <div class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div>
              <label class="font-bold text-[20px]">Фамилия</label>
              <input type="text" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="Кучеров" :disabled="!isEditing" />
            </div>
            <div>
              <label class="font-bold text-[20px]">Название компании</label>
              <input type="text" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="Радуга" :disabled="!isEditing" />
            </div>
            <div>
              <label class="font-bold text-[20px]">Имя</label>
              <input type="text" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="Дмитрий" :disabled="!isEditing" />
            </div>
            <div>
              <label class="font-bold text-[20px]">Email</label>
              <input type="email" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="diman3000@mail.ru" :disabled="!isEditing" />
            </div>
            <div>
              <label class="font-bold text-[20px]">Отчество</label>
              <input type="text" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="Станиславович" :disabled="!isEditing" />
            </div>
            <div>
              <label class="font-bold text-[20px]">Телефон</label>
              <input type="tel" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="+7 (123) 456 78-90" :disabled="!isEditing" />
            </div>
            <div>
              <label class="font-bold text-[20px]">Дата рождения</label>
              <input type="date" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="2000-01-01" :disabled="!isEditing" />
            </div>
            <div>
              <label class="font-bold text-[20px]">Пароль</label>
              <input type="password" class="w-full border-b border-gray-300 focus:outline-none mt-2" value="**********" :disabled="!isEditing" />
            </div>
          </div>
        </div>

        <div class="mt-10 text-center absolute left-1/2 transform -translate-x-1/2">
          <button
              @click="toggleEdit"
              class="max-w-[360px] w-full rounded-xl bg-primary py-3 px-5 text-white font-bold hover:bg-blue-900"
          >
            {{ isEditing ? 'Сохранить изменения' : 'Изменить информацию' }}
          </button>
        </div>
      </div>
    </div>
  </section>
  </div>
  </main>
</template>

<style scoped>
</style>
