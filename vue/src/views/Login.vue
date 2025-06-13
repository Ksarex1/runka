<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Header from '../components/Header.vue'
import { setUser } from '../auth.js' // 👈 если используешь глобального пользователя

const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const onSubmit = async () => {
  try {
    errorMessage.value = ''
    const { data } = await axios.post('http://localhost:4444/auth/login', {
      email: email.value,
      password: password.value,
    })

    localStorage.setItem('token', data.token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

    // ⚠️ получаем текущего пользователя
    const me = await axios.get('http://localhost:4444/auth/me')
    setUser(me.data)

    router.push('/')
  } catch (err) {
    errorMessage.value = err.response?.data?.message || err.message
  }
}
</script>


<template>
  <Header />

  <section class=" min-h-[calc(100vh-115px)] flex justify-center items-center">
    <div class="container mx-auto flex flex-col lg:flex-row items-center gap-20 justify-between">

      <div class="w-full md:w-3/6 max-lg:w-full">
        <h1 class="text-6xl font-bold mb-5 max-lg:text-center max-sm:text-5xl">Войти в аккаунт</h1>
        <p class="text-gray-600 mb-6 max-lg:text-center">
          У вас нет аккаунта?
          <router-link to="/register" class="text-blue-600 hover:underline">Зарегистрироваться</router-link>
        </p>

        <form @submit.prevent="onSubmit" class="space-y-5 mt-10 w-[550px] max-lg:w-full">
          <div>
            <label for="email" class="block text-[16px] font-medium mb-2 ">Почта</label>
            <input
                type="email"
                id="email"
                v-model="email"
                placeholder="roma@gmail.com"
                class="w-full border rounded px-3 py-2 border-primary3"
                required
            />
          </div>

          <div class="mb-8">
            <label for="password" class="block text-[16px] font-medium mb-2 ">Пароль</label>
            <input
                type="password"
                id="password"
                v-model="password"
                placeholder="********"
                class="w-full border rounded px-3 py-2 border-primary3"
                required

            />
          </div>
          <p v-if="errorMessage" class="text-red-600 mb-4">{{ errorMessage }}</p>
          <button
              type="submit"
              class="bg-primary2 text-white py-4 rounded hover:bg-blue-700 transition w-full cursor-pointer"
          >
            Войти в аккаунт
          </button>
        </form>
      </div>

      <div class="w-full md:w-1/2 max-lg:hidden">
        <img src="../assets/img/loginImg.png" alt="login" class="w-full h-auto" />
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
  section{
    background-image: url("@/assets/img/welcome.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  input::placeholder {
    font-size: 16px;
  }
</style>
