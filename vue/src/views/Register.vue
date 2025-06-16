<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import { setUser, isAuthenticated } from '../auth.js'

const fullName = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const onSubmit = async () => {
  try {
    errorMessage.value = ''
    const { data } = await axios.post('https://runka-1.onrender.com/auth/register', {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
    })

    localStorage.setItem('token', data.token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

    setUser(data)

    router.push('/')
  } catch (err) {
    errorMessage.value = err.response?.data?.message || err.message
  }
}


</script>


<template>
  <Header />
  <main>
  <div data-aos="fade-up">
  <section class="min-h-[calc(100vh-115px)] flex justify-center items-center">
    <div class="container mx-auto flex flex-col lg:flex-row items-center gap-20 justify-between">

      <div class="w-full md:w-3/6 max-lg:w-full">
        <h1 class="text-6xl font-bold mb-5 max-lg:text-center max-sm:text-5xl">Создать аккаунт</h1>
        <p class="text-gray-600 mb-6 max-lg:text-center">
          У вас уже есть аккаунт?
          <router-link to="/login" class="text-blue-600 hover:underline">Войти</router-link>
        </p>

        <form @submit.prevent="onSubmit" class="space-y-5 mt-10 w-[550px] max-lg:w-full">
          <div>
            <label for="fullName" class="block text-[16px] font-medium mb-2">Полное имя</label>
            <input
                v-model="fullName"
                type="text"
                id="fullName"
                placeholder="Дима Кучеров"
                class="w-full border rounded px-3 py-2 border-primary3"
                required
            />
          </div>

          <div>
            <label for="email" class="block text-[16px] font-medium mb-2">Почта</label>
            <input
                v-model="email"
                type="email"
                id="email"
                placeholder="roma@gmail.com"
                class="w-full border rounded px-3 py-2 border-primary3"
                required
            />
          </div>

          <div class="mb-8">
            <label for="password" class="block text-[16px] font-medium mb-2">Пароль</label>
            <input
                v-model="password"
                type="password"
                id="password"
                placeholder="********"
                class="w-full border rounded px-3 py-2 border-primary3"
                required
            />
          </div>

          <p v-if="errorMessage" class="text-red-600 mb-4">{{ errorMessage }}</p>

          <button
              type="submit"
              class="text-white py-4 rounded hover:bg-blue-700 transition w-full cursor-pointer bg-primary2"
          >
            Создать аккаунт
          </button>
        </form>
      </div>

      <div class="w-full md:w-1/2 max-lg:hidden">
        <img src="../assets/img/registerImg.png" alt="register" class="w-full h-auto" />
      </div>
    </div>
  </section>
  </div>
  </main>

</template>

<style scoped>
section {
  background-image: url("@/assets/img/welcome.png");
  background-size: cover;
  background-repeat: no-repeat;
}
input::placeholder {
  font-size: 16px;
}
</style>
