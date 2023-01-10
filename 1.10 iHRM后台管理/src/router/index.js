import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/pageing",
    name: "Pageing",
    component: () => import("../views/Pageing"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashboard")
      },
      {
        path: "/employees",
        name: "employees",
        component: () => import("../views/employees")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
