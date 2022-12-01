<template>
  <div>
    <h1>学生统计列表</h1>
    <ul>
      <li v-for="item in list" :key="item.id" @click="add(item)">
        {{item.name}}
      </li>
      <hr>
    </ul>
    <Node :item="arr"></Node>
 </div>
</template>

<script>
import Node from "./Node";
import name from "../../mock/mock.json";
console.log(name);
// console.log(mock);
export default {
  data() {
    return {
      list: [],
      arr:[]
    };
  },
  methods: {
    add(item){
      
      this.arr=item
      // console.log(mock);
    }
  },
  created() {
    if (name.code == 200) {
      let { data } = name;
      // console.log(data);
      this.list = data;
      //  console.log(mock);
    }
  },
  mounted() {},
  components: {
    Node
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
