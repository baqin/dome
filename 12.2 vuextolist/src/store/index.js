import Vue from 'vue'
import Vuex from 'vuex'
import vuexp from "vuex-persistedstate"    
Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[vuexp()],
  state: {
    list:[]
  },
  getters: {
  },
  mutations: {
    add(state,val){
      console.log(val);
      state.list.push(val)
    }
  },
  actions: {
  },
  modules: {
  }
})
