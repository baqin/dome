import Cookies from 'js-cookie'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		redirect: '/Welcome'
		},
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/Login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/Index',
		name: 'Index',
		component: () => import('../views/Index.vue'),
		children:[
			{
				path: '/Welcome',
				name: 'Welcome',
				component: () => import('../views/Welcome.vue')
			},
			{
				path: '/Users',
				name: 'Users',
				component: () => import('../views/Users.vue')
			}
		]
	}
]


// 全局导航守卫
// router.beforeEach((to, from, next) => {
// 	// to 到哪儿去   from 从哪儿来   next执行下一步、放行
// 	if (Cookies.getItem("token")) {
// 			next();
// 	} else {
// 			if(to.path == "/login"){
// 					next();
// 			} else {
// 					next("/login"); // 只有跳转，没有放行
// 			}
// 	}
// })

const router = new VueRouter({
	routes
})

export default router
