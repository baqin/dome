<template>
  <div>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.title}}</li>
         <li>消息编号：{{a}}</li>
        <li>消息标题：{{b}}</li>
    </ul>
 </div>
</template>

<script>
export default {
    props:['id','title'],
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
    console.log(this.$route)
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
