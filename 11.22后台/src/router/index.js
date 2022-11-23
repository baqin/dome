import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,children:[
      {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/manage.vue')
  },   {
    path: '/userList',
    name: 'userList',       
    component: () => import('../views/userList.vue')
  }, {
    path: '/shopList',
    name: 'shopList',
    component: () => import('../views/shopList.vue')
  },{
    path: '/foodList',
    name: 'foodList',
    component: () => import('../views/foodList.vue')
  },{
    path: '/orderList',
    name: 'orderList',
    component: () => import('../views/orderList.vue')
  },{          
    path: '/adminList',     
    name: 'adminList',
    component: () => import('../views/adminList.vue')
  },{           
    path: '/addShop',
    name: 'addShop',
    component: () => import('../views/addShop.vue')
  },{           
    path: '/addGoods',
    name: 'addGoods',
    component: () => import('../views/addGoods.vue')
  },{            
    path: '/explain',    
    name: 'explain',    
    component: () => import('../views/explain.vue')
  },{            
    path: '/vueEdit',      
    name: 'vueEdit',    
    component: () => import('../views/vueEdit.vue')
  },{            
    path: '/visitor',      
    name: 'visitor',
    component: () => import('../views/visitor.vue')
  },{            
    path: '/adminSet',      
    name: 'adminSet',
    component: () => import('../views/adminSet.vue')
  }
    ]
  }, {
    path: '/about',       
    name: 'about',     
    component: () => import('../views/AboutView.vue')
  },  
  
]

const router = new VueRouter({
  routes
})

export default router
