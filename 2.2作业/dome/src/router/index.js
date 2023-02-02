import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/Common/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/Common/AboutView.vue"),
    children: [
      {
        path: "/userIndex",
        name: "userIndex",
        component: () => import("../views/One/userIndex.vue")
      },
      {
        path: "/Myinfor",
        name: "Myinfor",
        component: () => import("../views/One/Myinfor.vue")
      },
      {
        path: "/Structure",
        name: "Structure",
        component: () => import("../views/Two/Structure")
      },
      {
        path: "/StaffIn",
        name: "StaffIn",
        component: () => import("../views/Three/StaffIn.vue")
      },
      {
        path: "/Staffsee",
        name: "Staffsee",
        component: () => import("../views/Three/Staffsee.vue")
      },
      {
        path: "/StaffImport",
        name: "StaffImport",
        component: () => import("../views/Three/StaffImport.vue")
      },
      {
        path: "/Setup",
        name: "Setup",
        component: () => import("../views/Four/Setup.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
