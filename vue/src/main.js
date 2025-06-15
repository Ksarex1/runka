import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 800, // продолжительность анимации в мс
    once: true,    // анимация один раз при появлении
});

createApp(App).use(router).mount('#app')
