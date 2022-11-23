<template>
  <div>
      {{arr}}
      <button @click="add">子传父</button>
      {{token}}
      <button @click="bro">兄弟传值</button>
      <button @click="vuex">vuex</button>
      {{$store.state.flag}}
 </div>
</template>

<script>
export default {
    props:['arr'],
  data () {
    return {
        list:'这是子传父',
        token:localStorage.getItem('token') || [],
         msg:'兄弟组件传值',
         flag:'这是vuex数据'
    }
  },
  methods: {
      add(){
          this.$emit('aa',this.list)
      },
      bro(){
          this.$bus.$emit('bro',this.msg)
      },
      vuex(){
          this.$store.commit('vuex',this.flag)
      }
  },
  created () {

  },
  mounted () {
      
  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
