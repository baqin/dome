<template>
  <div>
      <B :msg='msg' @hand="hand"></B>
 </div>
</template>

<script>
import B from '../components/b.vue'
export default {
  data () {
    return {
        msg:'爷的数据'
    }
  },
  methods: {
      hand(val){
          console.log('这是孙子传到爷的数据'+val);
      }
  },
  created () {

  },
  mounted () {

  },
  components: {
B
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
