<template>
  <div>
    <h2>home组件内容</h2>
    <div>
      <ul>
      <li>
        <router-link to="/home/news">news</router-link>
      </li>
      <li>
        <router-link to="/home/message">message</router-link>
      </li>
      </ul>

      <keep-alive include="News">
       <router-view></router-view>
      </keep-alive>
     
    </div>
 </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {

    }
  },
  methods: {

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

