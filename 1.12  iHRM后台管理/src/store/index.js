import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companyId: "",
    staffPhoto: ""
  },
  getters: {},
  mutations: {
    getCompanyId(state, id) {
      console.log(id)
      state.companyId = id
    },
    getStaffPhoto(state, img) {
      // console.log(id)
      state.staffPhoto = img
    }
  },
  actions: {},
  modules: {}
})
