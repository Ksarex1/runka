import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'ru') // или 'en', если хочешь по-другому
}

i18n.global.locale = localStorage.getItem('lang')

AOS.init({
  duration: 800,
  once: true,
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')