<template>
  <div>
    <div class="box">
      <ul class="ul1">
        <li>
          <img src="../assets/q1.png" alt="" srcset="" />
          <div class="">
            <h5>今日销售额</h5>
            <p>uuu vvv</p>
            <h4>56,998,472</h4>
          </div>
        </li>
        <li>
          <img src="../assets/q2.png" alt="" srcset="" />
          <div>
            <h5>今日销售额</h5>
            <p style="font-size:12px;">uuu vvv</p>
            <h4>3,496,490</h4>
          </div>
        </li>
        <li>
          <img src="../assets/q3.png" alt="" srcset="" />
          <div>
            <h5>今日销售额</h5>
            <p style="font-size:12px;">uuu vvv</p>
            <h4>758,349</h4>
          </div>
        </li>
        <li>
          <img src="../assets/q4.png" alt="" srcset="" />
          <div>
            <h5>今日销售额</h5>
            <p style="font-size:12px;">uuu vvv</p>
            <h4>1,739,919</h4>
          </div>
        </li>
      </ul>
        <ul class="ul2">
          <li class="li">
            <img src="../assets/q5.png" alt="" srcset="" />
            <p style="font-size:12px;">转化率</p>
            <h4>13.00%</h4>
          </li>
          <li>
            <img src="../assets/q6.png" alt="" srcset="" />
            <p style="font-size:12px;">测单率</p>
            <h4>5.66%</h4>
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
  background: #424345;
  color: #fff;
  margin-top: 5px;
  box-sizing: border-box;
  padding: 5px;
	display: flex;
  .ul1 {
    display: flex;
    justify-content: space-between;
		img{
			width: 75px;
			height: 75px;
		}
    li {
      display: flex;
			margin-left: 40px;
			box-sizing: border-box;
			div{
				padding: 5px 0 0 5px;
			}
    }
  }
	.ul2{
    display: flex;
    justify-content: space-between;
		margin-right: 20px;
		.li{
			margin-top: 5px;
		}
	li{
		margin-left: 40px;
	}
  }
}
</style>
