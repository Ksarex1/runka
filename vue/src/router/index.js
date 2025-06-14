import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import LoginPage from '../views/Login.vue';
import RegisterPage from '../views/Register.vue';
import MePage from '../views/Me.vue';
import StatysSertificate from "@/views/Statys_sertificate.vue";
import About from "@/views/About.vue";
import Blagodar_letter from "@/views/Blagodar_letter.vue";
import Blagodar from "@/views/Blagodar.vue";
import Rabota_runa from "@/views/Rabota_runa.vue";
import Vakansii from "@/views/Vakansii.vue";
import Politika from "@/views/Politika.vue";
import Soglasie from "@/views/Soglasie.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/me', component: MePage },
    { path: '/statys', component: StatysSertificate },
    { path: '/about', component: About },
    { path: '/blagodar_letter', component: Blagodar_letter },
    { path: '/blagodar', component: Blagodar },
    { path: '/rabota_runa', component: Rabota_runa },
    { path: '/vakansii', component: Vakansii },
    { path: '/politika', component: Politika },
    { path: '/soglasie', component: Soglasie },
];

const router = createRouter({
    history: createWebHistory('/runka/'),
    routes,
});

export default router;
