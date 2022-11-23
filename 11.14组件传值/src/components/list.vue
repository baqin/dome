<template>
  <div>
      {{mag}}
      <h3>这是用inject拿到父组件数据------{{msg}}</h3>
      {{flag}}
 </div>
</template>

<script>
export default {
    inject:['msg'],
    props:{type:Boolean},
  data () {
    return {
        mag:'',
        list:'list子组件数据',
        flag:false
    }
  },
  methods: {
      confirm(){
          this.$emit('input',false)
      }
  },
  created () {
      this.$bus.$on('bro',val=>{
          console.log(val);
          this.mag=val
      })
  },
  mounted () {
      console.log(this.$parent.list);
  },
  components: {

  },
  computed: {
  },
  watch: {
      value(val){
          this.flag=val
      }
  },
}
</script>

<style lang='scss' scoped>
</style>
