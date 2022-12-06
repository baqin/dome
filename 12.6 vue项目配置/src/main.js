import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '../untils/httoRequest'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//element-ui样式引入
// import 'element-ui/lib/theme-chalk/index.css'
// //element-ui文件夹下
// import element from './element-ui/index'
// Vue.use(element)
Vue.prototype.$http=http
new Vue({
	// el: '#app',
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
