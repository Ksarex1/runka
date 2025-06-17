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
import News from "@/views/News.vue";
import Calendar from "@/views/Calendar.vue";
import Gos_ychr from "@/views/Gos_ychr.vue";
import Zdravoohrana from "@/views/Zdravoohrana.vue";
import Client_Licences from "@/views/1C_Client_Licenses.vue"
import Server_Licences from "@/views/1C_Server_Licenses.vue"
import Services from "@/views/1C_Services.vue"
import Contacts from "@/views/Contacts.vue"

import { isAuthenticated } from '../auth.js';

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/me', component: MePage, meta: { requiresAuth: true } },
    { path: '/about/statys', component: StatysSertificate },
    { path: '/about', component: About },
    { path: '/about/blagodar_letter', component: Blagodar_letter },
    { path: '/about/blagodar_letter/blagodar', component: Blagodar },
    { path: '/about/rabota_runa', component: Rabota_runa },
    { path: '/about/rabota_runa/vakansii', component: Vakansii },
    { path: '/about/politika', component: Politika },
    { path: '/about/soglasie', component: Soglasie },
    { path: '/cart', component: Cart },
    { path: '/news', component: News },
    { path: '/calendar', component: Calendar },
    { path: '/1c-gos', component: Gos_ychr },
    { path: '/1c-zdravoohrana', component: Zdravoohrana },
    { path: '/1c-server-license', component: Server_Licences },
    { path: '/1c-client-license', component: Client_Licences },
    { path: '/1c-services', component: Services },
    { path: '/contacts', component: Contacts },
    {
        path: '/1c-gos/:id',
        name: 'ProductDetail',
        component: () => import('@/views/ProductDetail.vue')
    }

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
