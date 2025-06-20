<script>
import Header from '../components/Header.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import defaultImg from '../assets/img/profileImg.jpg'

export default {
  name: "Me",
  components: { Header },
  setup() {
    const isEditing = ref(false)
    const user = ref(null)
    const defaultAvatar = defaultImg

    const toggleEdit = async () => {
      if (!isEditing.value) {
        isEditing.value = true
      } else {
        try {
          await axios.put('https://runka-1.onrender.com/auth/me', user.value)
          isEditing.value = false
          alert('Данные успешно обновлены!')
        } catch (err) {
          console.error('Ошибка при обновлении данных', err)
          alert('Произошла ошибка при сохранении. Попробуйте позже.')
        }
      }
    }

    const fetchUser = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
          const { data } = await axios.get('https://runka-1.onrender.com/auth/me')
          user.value = data
          console.log(data)
        } catch (err) {
          console.log('Ошибка при получении пользователя', err)
        }
      }
    }

    const onFileChange = async (event) => {
      const file = event.target.files[0]
      if (!file) return

      try {
        const formData = new FormData()
        formData.append('avatar', file)

        const token = localStorage.getItem('token')
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          const { data } = await axios.post('https://runka-1.onrender.com/upload/avatar', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })

          user.value.avatarUrl = data.avatarUrl
          alert('Аватар успешно обновлен!')
        }
      } catch (err) {
        console.error('Ошибка загрузки аватара', err)
        alert('Ошибка при загрузке аватара')
      }
    }

    onMounted(fetchUser)

    return {
      isEditing,
      toggleEdit,
      user,
      onFileChange,
      defaultAvatar,
    }
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

          <div class="border border-gray-300 rounded-2xl p-[60px] bg-[#f9fbff]" v-if="user">
            <div class="flex flex-col md:flex-row gap-10">

              <!-- Аватар -->
              <div class="flex flex-col items-center w-full md:w-1/3">
                <div class="w-52 h-52 mb-6">
                  <img
                      class="rounded-full w-full h-full object-cover "
                      :src="user.avatarUrl ? 'https://runka-1.onrender.com' + user.avatarUrl : defaultAvatar"
                  />
                </div>

                <label
                    for="avatarInput"
                    class="rounded-xl bg-primary2 py-2 px-5 text-white font-bold hover:bg-blue-700 cursor-pointer select-none"
                >
                  Загрузить фото
                </label>
                <input
                    id="avatarInput"
                    type="file"
                    @change="onFileChange"
                    accept="image/*"
                    style="display: none;"
                />
              </div>

              <div class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                <div>
                  <label class="font-bold text-[20px]">Фамилия</label>
                  <input
                      type="text"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      v-model="user.middleName"
                      :disabled="!isEditing"
                  />
                </div>
                <div>
                  <label class="font-bold text-[20px]">Название компании</label>
                  <input
                      type="text"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      v-model="user.company"
                      :disabled="!isEditing"
                  />
                </div>
                <div>
                  <label class="font-bold text-[20px]">Имя</label>
                  <input
                      type="text"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      v-model="user.firstName"
                      :disabled="!isEditing"
                  />
                </div>
                <div>
                  <label class="font-bold text-[20px]">Email</label>
                  <input
                      type="email"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      v-model="user.email"
                      :disabled="!isEditing"
                  />
                </div>
                <div>
                  <label class="font-bold text-[20px]">Логин</label>
                  <input
                      type="text"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      v-model="user.fullName"
                      :disabled="!isEditing"
                  />
                </div>
                <div>
                  <label class="font-bold text-[20px]">Телефон</label>
                  <input
                      type="tel"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      v-model="user.phone"
                      :disabled="!isEditing"
                  />
                </div>
                <div>
                  <label class="font-bold text-[20px]">Дата рождения</label>
                  <input
                      type="date"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      v-model="user.birthdate"
                      :disabled="!isEditing"
                  />
                </div>
                <div>
                  <label class="font-bold text-[20px]">Пароль</label>
                  <input
                      type="password"
                      class="w-full border-b border-gray-300 focus:outline-none mt-2"
                      value="**********"
                      disabled
                  />
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
main {
  padding-top: 40px;
}
</style>
