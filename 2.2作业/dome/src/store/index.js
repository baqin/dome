import Vue from "vue"
import Vuex from "vuex"
import staff from "./module/staff"
import Setup from "./module/Setup"
Vue.use(Vuex)

export default new Vuex.Store({
  getters: {},
  modules: {
    namespaced: true,
    staff,
    Setup
  }
})
