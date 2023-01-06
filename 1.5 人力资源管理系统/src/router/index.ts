import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  // 路由的重定向
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
