import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;