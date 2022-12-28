<template>
  <div>
    <div class="box">
      <h4>区域销售大盘环比分析</h4>
      <ul>
        <li style="font-size: 14px">城市订单量</li>
        <li style="font-size: 14px">店铺数</li>
        <li style="font-size: 14px">接单骑手人数</li>
        <li style="font-size: 14px">新店铺数量</li>
        <li style="font-size: 14px">人均订单量</li>
      </ul>
			<img src="../assets/地图2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
.box {
  width: 100%;
  margin-top: 5px;
  background: #272727;
  color: #fff;
  padding: 5px;
  box-sizing: border-box;
  h4 {
    width: 100%;
    background: #363636;
  }
  ul {
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    background: #595959;
  }
	img{
		width: 100%;
		height: 260px;
	}
}
</style>
