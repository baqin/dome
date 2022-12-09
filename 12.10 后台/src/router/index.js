import Cookies from 'js-cookie'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import {setToken} from '../../untils/auth.js'
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
			},
			{
				path: '/Roles',
				name: 'Roles',
				component: () => import('../views/Roles.vue')
			},
			{
				path: '/Rights',
				name: 'Rights',
				component: () => import('../views/Rights.vue')
			},{
				path: '/Goods',
				name: 'Goods',
				component: () => import('../views/Goods.vue')
			},{
				path: '/Orders',
				name: 'Orders',
				component: () => import('../views/Orders.vue')
			},{
				path: '/Categories',
				name: 'Categories',
				component: () => import('../views/Categories.vue')
			},{
				path: '/Params',
				name: 'Params',
				component: () => import('../views/Params.vue')
			},{
				path: '/Reports',
				name: 'Reports',
				component: () => import('../views/Reports.vue')
			},
			// {
			// 	path: '/Add',
			// 	name: 'Add',
			// 	component: () => import('../views/Add.vue')
			// }
		]
	}
]


// 全局导航守卫
// router.beforeEach((to, from, next) => {
// 	// to 到哪儿去   from 从哪儿来   next执行下一步、放行
// 	if (getToken()) {
// 			next();
// 	} else {
// 			if(to.path == "/Login"){
// 					next();
// 			} else {
// 					next("/Login"); // 只有跳转，没有放行
// 			}
// 	}
// })

const router = new VueRouter({
	routes
})

export default router
