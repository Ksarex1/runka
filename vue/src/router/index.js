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
import Cart from "@/views/Cart.vue";

import { isAuthenticated } from '../auth.js';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/me', component: MePage, meta: { requiresAuth: true } },
    { path: '/statys', component: StatysSertificate },
    { path: '/about', component: About },
    { path: '/blagodar_letter', component: Blagodar_letter },
    { path: '/blagodar', component: Blagodar },
    { path: '/rabota_runa', component: Rabota_runa },
    { path: '/vakansii', component: Vakansii },
    { path: '/politika', component: Politika },
    { path: '/soglasie', component: Soglasie },
    { path: '/1c-gos', component: Soglasie },
    { path: '/cart', component: Cart },
];

const router = createRouter({
    history: createWebHistory('/runka/'),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated.value) {
        next('/login');
    } else {
        next();
    }
});

export default router;
