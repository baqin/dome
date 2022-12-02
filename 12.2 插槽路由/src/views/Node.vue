<template>
  <div>
    <ul>
      <li>{{item.name}}-{{item.age}}-
        {{item.sex}}-
        {{item.zz}}</li>
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
