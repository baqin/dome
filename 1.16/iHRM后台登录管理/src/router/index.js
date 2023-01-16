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
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("../views/settingg")
      },
      {
        path: "/permission",
        name: "permission",
        component: () => import("../views/permission")
      },
      {
        path: "/social_securitys",
        name: "securitys",
        component: () => import("../views/securitys")
      },
      {
        path: "/approvals",
        name: "approvals",
        component: () => import("../views/approvals")
      },
      {
        path: "/attendances",
        name: "attendances",
        component: () => import("../views/attendances")
      },
      {
        path: "/salarys",
        name: "salarys",
        component: () => import("../views/salarys")
      },
      {
        path: "/departments",
        name: "departments",
        component: () => import("../views/departments")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
