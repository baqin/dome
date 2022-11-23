import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag:''
  },
  getters: {
  },
  mutations: {
    vuex(state,val){
      state.flag=val
    }
  },
  actions: {
  },
  modules: {
  }
})
