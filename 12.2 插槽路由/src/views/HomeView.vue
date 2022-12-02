<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" @click="add(item)">
        {{item.title}}
      <div>
        {{item.name}}-{{item.age}}-
        {{item.sex}}-
        {{item.zz}}
      </div>
      </li>
      <hr>
    </ul>
    <Node></Node>
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
