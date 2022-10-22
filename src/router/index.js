import {createWebHistory, createRouter} from "vue-router";
import * as vueRouter from 'vue-router';

import {createApp} from 'vue';

createApp(vueRouter);
const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "Login" */'@/views/Pages/Login.vue'),
        children: [
            {
                component: () => import(/* webpackChunkName: "Order Index" */ '@/views/Pages/Login.vue'),
                path: '',
                name: 'login.index',
            },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;




