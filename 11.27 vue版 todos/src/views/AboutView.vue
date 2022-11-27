<template>
  <div>
    <!-- 模版字符串 -->
    <h1>{{msg}}</h1>
    <span v-bind:title="mss">悬停几秒</span>
    <!-- 悬停加悬停出现内容 -->
    <p :title="mgg">悬停N秒</p>
    <!-- v-bind缩写悬停出现内容 -->
    <p v-if="flag">星辰大海</p>
    <p v-else>遥遥无期</p>
    <button @click="dj">点击显示</button>
    <!-- v-if和v-else -->
    <ul>
      <li v-for="item in mx" :key="item.id">{{item.name}}</li>
    </ul>
    <!-- 练习v-for -->
    <p><button @click="xg">修改</button></p>
    <!-- 修改内容 -->
    <input type="text" @change="add" v-model="title">
    <p>{{title}}</p>
    <!-- 双向数据绑定 -->
 </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'11111',
      mgg:'2222',
      mss:'666'+new Date().toLocaleString(),
      flag:true,
      title:'',
      mx: [
        {
          id: 1,
          name: "杨幂"
        },
        {
          id: 2,
          name: "王一博"
        },
        {
          id: 3,
          name: "张建雨"
        }]
    }
  },
  methods: {
    dj(){
      this.flag=!this.flag
    },
    xg(){    
      this.mx[2].name = "孙铭";
    },
    add(e){
      console.log(e);
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
li{
  list-style: none;
}
</style>
