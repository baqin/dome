<template>
  <div>
      <h1>'可以拿到爷的数据'+{{$attrs.msg}}</h1>
      <button @click="gethand">调用爷的事件</button>
 </div>
</template>

<script>
export default {
  data () {
    return {
        list:'孙子的数据'
    }
  },
  methods: {
      gethand(){
          this.$emit('hand',this.list)
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
