<template>
  <div>
    <Header :arr='arr' @aa='child'></Header>
    <List :value="flag" v-on:input='arr=$event'></List>
    <button @click="ref">用ref给子组件传值</button>
    <Child ref='child'></Child>
    <button @click="set">存到本地</button>
 </div>
</template>

<script>
import Header from '../components/header.vue'
import List from '../components/list.vue'
import Child from '../components/child.vue'
export default {
  data () {
    return {
      arr:'这是父传子',
      list:'春华秋实，岁万里路遥，但一定会光芒万丈',
      flag:false
    }
  },
   provide(){
      return {
        msg:'用provide来传值'
      }
    },
  methods: {
    child(val){
      console.log(val);
    },
    set(){
      localStorage.setItem('token',this.list)
    },
    ref(){
      this.$refs.child.info='c6'
    }
  },
  created () {

  },
  mounted () {
    console.log(this.$children[1].list)
  },
  components: {
    Header,
    List,
    Child
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>

