<template>
	<div>
		<div class="box">
			<h3>慕课外卖用户年龄分布&平均年龄</h3>
			<h1>30.08岁</h1>
			<p>Dowbon of Age</p>
			<ul class="ul1">
				<li>0</li>
				<li>300,000</li>
				<li>600,000</li>
				<li>900,000</li>
				<li>1,200,000</li>
				<li>1,500,000</li>
				<li>1,739,222</li>
			</ul>
			<ul class="ul2">
				<li><h4>304,378</h4><p>0-20</p></li>
				<li><h4>505,391</h4><p>20-30</p></li>
				<li><h4>725,216</h4><p>30-50</p></li>
				<li><h4>505,391</h4><p>≥50</p></li>
			</ul>
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
	width: 25%;
	background: #2a2b2d;
	color: #fff;
	margin-top: 10px;
	box-sizing: border-box;
	padding: 10px;
	.ul1{
		display: flex;
font-size:12px;
justify-content: space-between;
box-sizing: border-box
	}
	.ul2{
		display: flex;
		justify-content: space-between;
		text-align: center;
		align-items: center;
		width: 100%;
		color: #fff;
		li{
			padding: 15px;
			box-sizing: border-box;
		}
	}
}
</style>
