<template>
  <div>
    <ul>
      <li>{{item.name}}-{{item.age}}-
        {{item.status? '不在籍' : '在籍'}}-
        {{item.sex? '女' : '男'}}</li>
    </ul>
 </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
