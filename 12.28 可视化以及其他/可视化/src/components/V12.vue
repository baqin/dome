<template>
	<div>
		<div class="box">
			 <div class="nav">
      <h4>实时订单趋势图</h4>
      <p style="font-size: 12px">Real-time order trend chart</p>
      <h2>23,242</h2>
      <p style="font-size: 12px">周同比增长率</p>
      <h5 style="color: #8ebf55">2.32%</h5>
    </div>
		<!-- <img src="../assets/地图3.png" alt="" class="img1"> -->
		<img src="../assets/底部点.png" alt="" class="img2">
		</div>
 </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {

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
.box{
	width: 100%;
	background:#424345;
	color: #fff;
	margin: 5px;
overflow: hidden;
	position: fixed;
	left: 0;
	bottom: 0;
	position: relative;
	.nav{
		width: 100%;
		padding: 5px;
	box-sizing: border-box;
	}
	.img1{

		position: absolute;
bottom: 80px;
		left: 175px;
		width: 500px;
		height: 100px;
	}
.img2{
	width: 100%;
}
}
</style>
