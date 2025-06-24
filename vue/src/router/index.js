import {createRouter, createWebHistory} from 'vue-router';
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
import ITS from "@/views/ITS.vue";
import Consult from "@/views/Consult.vue";
import DopYslygi from "@/views/Dop-Yslygi.vue";
import CSO from "@/views/CSO.vue";
import Seminar from "@/views/Seminar.vue";
import Kyrsi from "@/views/Kyrsi.vue";
import Vebinar from "@/views/Vebinar.vue";
import Otveti1C from "@/views/Otveti-1C.vue";
import Tonkosti from "@/views/Tonkosti.vue";
import ActReliz from "@/views/Act-reliz.vue";
import Configure from "@/views/Configure.vue";
import BGY1 from "@/views/BGY-1.vue";
import BGY2 from "@/views/BGY-2.vue";
import ZKGY3 from "@/views/ZKGY-3.vue";
import CAMIN from "@/views/CAMIN.vue";
import Apteka from "@/views/Apteka.vue";
import Diet from "@/views/Diet.vue";
import Kubik from "@/views/Kubik.vue";
import VebinarKubik from "@/views/Vebinar-Kubik.vue";
import KyrsiKubik from "@/views/Kyrsi-Kubik.vue";

import {isAuthenticated} from '../auth.js';

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
    { path: '/cart', component: Cart, meta: { requiresAuth: true } },
    { path: '/news', component: News },
    { path: '/calendar', component: Calendar },
    { path: '/1c-gos', component: Gos_ychr },
    { path: '/1c-zdravoohrana', component: Zdravoohrana },
    { path: '/1c-server-license', component: Server_Licences },
    { path: '/1c-client-license', component: Client_Licences },
    { path: '/1c-services', component: Services },
    { path: '/contacts', component: Contacts },
    { path: '/1c-sopr/ITS', component: ITS },
    { path: '/1c-sopr/consult', component: Consult },
    { path: '/1c-sopr/dop-yslygi', component: DopYslygi },
    { path: '/cso', component: CSO },
    { path: '/cso/seminar', component: Seminar },
    { path: '/cso/kyrsi', component: Kyrsi },
    { path: '/cso/vebinar', component: Vebinar },
    { path: '/otveti-1c', component: Otveti1C },
    { path: '/tonkosti', component: Tonkosti },
    { path: '/act-reliz', component: ActReliz },
    { path: '/configure', component: Configure },
    { path: '/act-reliz/bgy1', component: BGY1 },
    { path: '/act-reliz/bgy2', component: BGY2 },
    { path: '/act-reliz/zkgy3', component: ZKGY3 },
    { path: '/act-reliz/camin', component: CAMIN },
    { path: '/act-reliz/apteka', component: Apteka },
    { path: '/act-reliz/diet', component: Diet },
    { path: '/kubik', component: Kubik },
    { path: '/kubik/vebinar', component: VebinarKubik },
    { path: '/kubik/kyrsi', component: KyrsiKubik },
    {
        path: '/1c-gos/:id',
        name: 'ProductDetailGos',
        component: () => import('@/views/ProductDetail.vue'),
        props: true
    },
    {
        path: '/1c-zdravoohrana/:id',
        name: 'ProductDetailZdrav',
        component: () => import('@/views/ProductDetail.vue'),
        props: true
    },
    {
        path: '/1c-services/:id',
        name: 'ProductDetailServices',
        component: () => import('@/views/ProductDetail.vue'),
        props: true
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