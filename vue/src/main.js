import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'

AOS.init({
    duration: 800,
    once: true,
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
