<template>
  <div>
    <div class="box">
      <h4>地区商家销售排行</h4>
      <ul>
        <li>
          <h6>合肥</h6>
          <div><p></p></div>
          <ul class="ul2">
            <li style="font-size: 14px; background: #b7ce86">商家</li>
            <li style="font-size: 14px">订单数</li>
            <li style="font-size: 14px">销售额</li>
          </ul>
					<ul class="ul3">
            <li style="font-size: 12px;">必胜客</li>
            <li style="font-size: 12px">880</li>
            <li style="font-size: 12px ;color: #b7ce86">14300</li>
          </ul>
					<ul class="ul4">
            <li style="font-size: 12px;">肯德基</li>
            <li style="font-size: 12px">217</li>
            <li style="font-size: 12px ;color: #b7ce86">3858</li>
          </ul>
					<ul class="ul5">
            <li style="font-size: 12px;">麦当劳</li>
            <li style="font-size: 12px">40</li>
            <li style="font-size: 12px ;color: #b7ce86">561</li>
          </ul>
        </li>
        <li>
          <h6>济南</h6>
          <div><p></p></div>
          <ul class="ul2">
            <li style="font-size: 14px; background: #b7ce86">商家</li>
            <li style="font-size: 14px">订单数</li>
            <li style="font-size: 14px">销售额</li>
          </ul>
					<ul class="ul3">
            <li style="font-size: 12px;">必胜客</li>
            <li style="font-size: 12px">880</li>
            <li style="font-size: 12px ;color: #b7ce86">14300</li>
          </ul>
					<ul class="ul4">
            <li style="font-size: 12px;">肯德基</li>
            <li style="font-size: 12px">217</li>
            <li style="font-size: 12px ;color: #b7ce86">3858</li>
          </ul>
					<ul class="ul5">
            <li style="font-size: 12px;">麦当劳</li>
            <li style="font-size: 12px">40</li>
            <li style="font-size: 12px ;color: #b7ce86">561</li>
          </ul>
        </li>
        <li>
          <h6>太原</h6>
          <div><p></p></div>
          <ul class="ul2">
            <li style="font-size: 14px; background: #b7ce86">商家</li>
            <li style="font-size: 14px">订单数</li>
            <li style="font-size: 14px">销售额</li>
          </ul>
					<ul class="ul3">
            <li style="font-size: 12px;">必胜客</li>
            <li style="font-size: 12px">880</li>
            <li style="font-size: 12px ;color: #b7ce86">14300</li>
          </ul>
					<ul class="ul4">
            <li style="font-size: 12px;">肯德基</li>
            <li style="font-size: 12px">217</li>
            <li style="font-size: 12px ;color: #b7ce86">3858</li>
          </ul>
					<ul class="ul5">
            <li style="font-size: 12px;">麦当劳</li>
            <li style="font-size: 12px">40</li>
            <li style="font-size: 12px ;color: #b7ce86">561</li>
          </ul>
        </li>
      </ul>
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
  color: #fff;
  padding: 5px;
  box-sizing: border-box;
  background: #363636;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 33%;
      margin: 5px 0 5px 5px;
      background: #2c2c2c;
      div {
        width: 100%;
        background: #5c5c5c;
        height: 16px;
        overflow: hidden;
        p {
          box-sizing: border-box;
          margin-top: 3px;
          margin-left: 80px;
          width: 10px;
          height: 10px;
          background: #313131;
        }
        .ul2 {
          display: flex;
          justify-content: space-between;
          width: 100%;
          background: #35383f;
        }
				 .ul3{
          display: flex;
          justify-content: space-between;
          width: 100%;
          background: #363636;
				 }
				  .ul4{
          display: flex;
          justify-content: space-between;
          width: 100%;
          background: #272727;
				 }
				  .ul5{
          display: flex;
          justify-content: space-between;
          width: 100%;
          background: #363636;
				 }
      }
    }
  }
}
</style>
