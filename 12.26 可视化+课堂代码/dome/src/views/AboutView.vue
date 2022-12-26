<template>
    <div class='about'>
      <h1>姓名：{{text}}</h1>
      <button @click="getage">1111</button>
       <!-- <h1>姓名：{{text}}</h1>
      <button @click="getage">1111</button>
       <h1>姓名：{{text}}</h1>
      <button @click="getage">1111</button> -->
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
 export default {
  methods: {
    
  },
  //   beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  //   beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
setup(props, ctx) {
  console.log('setup');
  console.log(this);
  let text='666'
  function getage(params){
    console.log('一个方法');
  }
  //   let text='666'
  // function getage(params){
  //   console.log('一个方法');
  // }
  //   let text='666'
  // function getage(params){
  //   console.log('一个方法');
  // }
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
return { ...toRefs(data),text,getage};
 },
 };
</script>

<style lang='scss' scoped>

</style>

