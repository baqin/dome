<template>
	<div class="box">
		<div class="title">
			<ul>
			<li style="background:#b7ce86">订单量</li>
			<li>销售额</li>
			<li>用户数</li>
			<li>退单量</li>
		</ul>
		</div>
		<br>
		<div class="nav">
		<h4>实时订单趋势图</h4>
		<p style="font-size:12px;">Real-time order trend chart</p>
		<h2>23,242</h2>
		<p style="font-size:12px;">周同比增长率</p>
		<h5 style="color: #8ebf55;">2.32%</h5>
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
	// width: 100%;
margin-top: 5px;
	color: #fff;
	padding: 5px;
	box-sizing: border-box;
	ul{
		// width: 100%;
		display: flex;
	justify-content: space-between;
	li{
		width: 202px;
		border: 1px solid #ccc;
		flex: 1;
		text-align: center;

		align-items: center
	}
	}
}
</style>
