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
      state.list.push({...val,id:this.state.list.length})
    },
    undata(state, val) {
      console.log(val);
      state.list.forEach((item, index) => {
        if (item.id == val.id) {
          state.list[index].name = val.form.name
          state.list[index].resource = val.form.resource
          state.list[index].date1 = val.form.date1
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
