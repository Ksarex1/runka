import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import LoginPage from '../views/Login.vue';
import RegisterPage from '../views/Register.vue';
import MePage from '../views/Me.vue';
import StatysSertificate from "@/views/Statys_sertificate.vue";

import { isAuthenticated } from '../auth.js';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/me', component: MePage, meta: { requiresAuth: true } },
    { path: '/statys', component: StatysSertificate },
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
