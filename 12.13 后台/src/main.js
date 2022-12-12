import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "../untils/httpRequest"
Vue.config.productionTip = false

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
