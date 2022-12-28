import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false
import axios from "axios"
Vue.prototype.$axios = axios;

import 'default-passive-events'
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
