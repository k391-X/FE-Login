import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../components/HelloWorld.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/index.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue'),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout/index.vue'),
  },
  {
    path: '/driver01',
    name: 'Driver01',
    component: () => import('../views/Driver-Js/Single/index.vue'),
  },
  {
    path: '/driver02',
    name: 'Driver02',
    component: () => import('../views/Driver-Js/Vue3/index.vue'),
  },
  {
    path: '/driver03',
    name: 'Driver03',
    component: () => import('../views/Driver-Js/TestCase3/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
