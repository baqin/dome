import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect: '/Login'
		},
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/Login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
