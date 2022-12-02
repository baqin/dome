<template>
  <div>
    <h2>你好</h2>

    <ul>
        <li v-for="l in messageList" :key="l.id">
          <!-- 跳转路由并携带query参数，to的字符串写法 -->
          <router-link :to="`/home/message/detail?id=${l.id}=${l.title}`">{{l.title}}</router-link>
           <!-- 跳转路由并携带query参数，to的对象写法 -->
            <!-- <router-link :to="{
                path:'/home/message/detail',
                query:{
                    id:l.id,
                    title:l.title
                }
             }">
             {{l.title}}
             </router-link>  -->
    <button @click="pushShow(l)">push查看</button>
    <button @click="replaceShow(l)">replace查看</button>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
  data () {
    return {
        messageList:[
            {
                id:1,
                title:'周六休息一天'
            },
            {
                id:2,
                title:'哈哈哈哈'
            }
        ]
    }
  },
  methods: {
    pushShow(l){
        this.$router.push({
            name:'detail',
            query:{
                id:l.id,
                title:l.title
            }
        })
    },
    replaceShow(l){
         this.$router.replace({
            name:'detail',
            query:{
                id:l.id,
                title:l.title
            }
        })
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
