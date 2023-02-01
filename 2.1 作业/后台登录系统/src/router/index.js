import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
	{ path: "/", redirect: "/Login" },
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/Index",
    name: "Index",
    component: () => import("../views/Index/Index.vue"),
		children:[{
			path: "/Dashboard",
			name: "Dashboard",
			component: () => import("../views/Dashboard/Dashboard.vue")
		},
		{
			path: "/Employees",
			name: "Employees",
			component: () => import("../views/Employees/Employees.vue")
		}
	]
  }
]

const router = new VueRouter({
  routes
})

export default router
