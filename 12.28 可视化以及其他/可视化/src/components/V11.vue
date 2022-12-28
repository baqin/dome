<template>
  <div class="box">
      <ul>
        <li :class="{ active: flag == 0 }" @click="flag = 0">订单量</li>
        <li :class="{ active: flag == 1 }" @click="flag = 1">销售额</li>
        <li :class="{ active: flag == 2 }" @click="flag = 2">用户数</li>
        <li :class="{ active: flag == 3 }" @click="flag = 3">退单量</li>
      </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 0
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.active {
  background: #b7ce86;
	color: #fff;
}
.box {
  width: 100%;
  margin-top: 5px;
  color: #ccc;
  // padding: 5px;
  // box-sizing: border-box;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      width: 202px;
      border: 1px solid #ccc;
      flex: 1;
      text-align: center;
      align-items: center;
    }
  }
}
</style>
